import { showToast } from "helpers/toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { setRecoil } from "recoil-nexus";
import { login, register } from "services/auth";
import { paymentStatusState, tokenState } from "store/atom/authState";
import { validationErrorState } from "store/atom/formState";
import { isLoadingState } from "store/atom/pageState";

const useAuthController = () => {
  const nav = useNavigate();

  const loginMutation = useMutation(login, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      setRecoil(tokenState, response.token.token);
      setRecoil(paymentStatusState, response.paymentStatus);
      localStorage.setItem("@token", response.token.token);
      localStorage.setItem("@paymentStatus", JSON.stringify(response.paymentStatus));
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

  const useLogout = async () => {
    setRecoil(isLoadingState, true);

    localStorage.removeItem("@token");
    localStorage.removeItem("@paymentStatus");
    setRecoil(tokenState, null);
    setRecoil(paymentStatusState, null);

    setRecoil(isLoadingState, false);
  };

  const useIsLoggedIn = () => {
    setRecoil(isLoadingState, true);

    const response = localStorage.getItem("@token");

    if (response) {
      setRecoil(tokenState, response);
    }

    setRecoil(isLoadingState, false);
  };

  return {
    useLogin: (data) => loginMutation.mutate(data),
    useRegisterAdmin: (data) => registerAdminMutation.mutate({ ...data, gender: data.gender.value }),
    useLogout,
    useIsLoggedIn,
  };
};

export default useAuthController;
