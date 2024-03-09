import { showToast } from "helpers/toast";
import useUserModel from "models/userModel";
import useAuthController from "./authController";
import { addAdministratorForm } from "constants/form";
import { useMutation } from "react-query";
import { deleteDataState, isLoadingState, showConfirmationModalState } from "store/atom/pageState";
import { setRecoil } from "recoil-nexus";
import { queryClient } from "config/query";
import { deleteAdministrator } from "services/user";

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
