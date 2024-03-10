import { showToast } from "helpers/toast";
import useUserModel from "models/userModel";
import useAuthController from "./authController";
import { addAdministratorForm } from "constants/form";
import { useMutation } from "react-query";
import { deleteDataState, isLoadingState, showConfirmationModalState } from "store/atom/pageState";
import { setRecoil } from "recoil-nexus";
import { queryClient } from "config/query";
import { deleteAdministrator, getAdministratorDetail, updateAdministrator } from "services/user";
import { formModalDataState, showFormModalState, validationErrorState } from "store/atom/formState";

const useUserController = () => {
  const { useGetUserProfile, useGetAdministrators } = useUserModel();
  const { registerAdministrator } = useAuthController();

  // GET - Get User Profile - Access : All
  const useQueryGetUserProfile = () => {
    const { data, isLoading } = useGetUserProfile();

    const profileData = {
      name: "",
      role: "",
    };

    if (!isLoading) {
      Object.assign(profileData, {
        name: data.data.full_name,
        role: data.data.role_name,
      });
    }

    return {
      profileData,
      isLoading,
    };
  };

  // GET - Get Administrators Account - Access : Admin
  const useQueryGetAdministrators = () => {
    const { data, isLoading, error, isError } = useGetAdministrators();

    const tableData = {
      header: ["Email", "Nama", "Jenis Kelamin", "Handphone", "Alamat", "Tindakan"],
      table: [],
    };

    if (!isLoading) {
      if (isError) {
        showToast("failed", error.response.data.error.message);
      } else {
        Object.assign(tableData, {
          table: data.data.map((item) => {
            const data = [item.email, item.full_name, item.gender, item.phone, item.address || "-"];

            return {
              id: item.id,
              data,
              withAction: [
                {
                  type: "edit",
                  onClick: (id) => queryGetAdministratorUpdateForm(id),
                },
                {
                  type: "delete",
                  onClick: (id) => {
                    setRecoil(showConfirmationModalState, true);
                    setRecoil(deleteDataState, {
                      onApprove: () => deleteAdministratorMutation.mutate(id),
                    });
                  },
                },
              ],
            };
          }),
        });

        Object.assign(addAdministratorForm, {
          submitButton: {
            ...addAdministratorForm.submitButton,
            onClick: (data) => registerAdministrator(data),
          },
        });
      }
    }

    return {
      tableData,
      isLoading,
    };
  };

  // GET - Get Administrator Update Form Data - Access : Admin
  const queryGetAdministratorUpdateForm = async (id) => {
    setRecoil(isLoadingState, true);

    const formData = { ...addAdministratorForm };

    await getAdministratorDetail(id)
      .then((response) => {
        Object.assign(formData, {
          title: "Edit Administrator",
          inputs: formData.inputs.filter((input) => input.name !== "password" && input.name !== "password_confirmation" && input.name !== "email"),
          defaultValues: {
            fullName: response.data.full_name,
            gender: response.data.gender,
            phone: response.data.phone,
            address: response.data.address,
          },
          submitButton: {
            ...formData.submitButton,
            label: "Edit Akun",
            onClick: (data) => updateAdministratorMutation.mutate({ id, data: { ...data, gender: data.gender ? data.gender.value : null } }),
          },
        });

        setRecoil(formModalDataState, formData);
        setRecoil(showFormModalState, true);
      })
      .catch((error) => {
        showToast("failed", error.error.message);
      })
      .finally(() => {
        setRecoil(isLoadingState, false);
      });
  };

  // PUT - Update Administrator Account - Access : Admin
  const updateAdministratorMutation = useMutation(updateAdministrator, {
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
      } else {
        showToast("failed", error.error.message);
        setRecoil(formModalDataState, null);
        setRecoil(showFormModalState, false);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  // DELETE - Delete Administrator Account - Access : Admin
  const deleteAdministratorMutation = useMutation(deleteAdministrator, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      queryClient.invalidateQueries({ queryKey: ["getAdministrators"] });
    },
    onError: (error) => {
      if (error.error.status === 404) {
        showToast("failed", error.error.message);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
      setRecoil(deleteDataState, null);
      setRecoil(showConfirmationModalState, false);
    },
  });

  return {
    useQueryGetUserProfile,
    useQueryGetAdministrators,
  };
};

export default useUserController;
