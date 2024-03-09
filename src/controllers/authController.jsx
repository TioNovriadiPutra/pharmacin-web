import { queryClient } from "config/query";
import { showToast } from "helpers/toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { setRecoil } from "recoil-nexus";
import { login, logout, register, registerAdministrator } from "services/auth";
import { paymentStatusState, roleState, tokenState } from "store/atom/authState";
import { formModalDataState, showFormModalState, validationErrorState } from "store/atom/formState";
import { drawerStatusState, drawerSubIndexState, isLoadingState } from "store/atom/pageState";

const useAuthController = () => {
  const nav = useNavigate();

  // POST - Login - Access : All
  const loginMutation = useMutation(login, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      setRecoil(tokenState, response.token.token);
      setRecoil(paymentStatusState, response.paymentStatus);
      setRecoil(roleState, response.roleId);
      localStorage.setItem("@token", response.token.token);
      localStorage.setItem("@paymentStatus", JSON.stringify(response.paymentStatus));
      localStorage.setItem("@role", JSON.stringify(response.roleId));
      showToast("success", response.message);
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      } else {
        showToast("failed", error.error.message);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  // POST - Register Clinic and Owner - Access : Guest
  const registerAdminMutation = useMutation(register, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      nav("/login");
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  // POST - Register Administrator Employee - Access : Admin
  const registerAdministratorMutation = useMutation(registerAdministrator, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      setRecoil(formModalDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries({ queryKey: ["getAdministrators"] });
    },
    onError: (error) => {
      if (error.error.status === 422) {
        setRecoil(validationErrorState, error.error.message);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  // GET - Logout - Access : All
  const logoutMutation = useMutation(logout, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      localStorage.removeItem("@token");
      localStorage.removeItem("@paymentStatus");
      localStorage.removeItem("@role");
      setRecoil(tokenState, null);
      setRecoil(paymentStatusState, null);
      setRecoil(roleState, null);
      setRecoil(drawerStatusState, false);
      setRecoil(drawerSubIndexState, 0);
      showToast("success", response.message);
    },
    onError: (error) => {
      showToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  const useIsLoggedIn = () => {
    setRecoil(isLoadingState, true);

    const token = localStorage.getItem("@token");
    const role = localStorage.getItem("@role");
    const paymentStatus = localStorage.getItem("@paymentStatus");

    if (token && role && paymentStatus) {
      setRecoil(tokenState, token);
      setRecoil(roleState, JSON.parse(role));
      setRecoil(paymentStatusState, JSON.parse(paymentStatus));
    }

    setRecoil(isLoadingState, false);
  };

  return {
    useLogin: (data) => loginMutation.mutate(data),
    useRegisterAdmin: (data) =>
      registerAdminMutation.mutate({
        ...data,
        gender: data.gender ? data.gender.value : null,
      }),
    registerAdministrator: (data) =>
      registerAdministratorMutation.mutate({
        ...data,
        gender: data.gender ? data.gender.value : null,
      }),
    logout: () => logoutMutation.mutate(),
    useIsLoggedIn,
  };
};

export default useAuthController;
