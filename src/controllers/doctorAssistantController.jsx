import { addDoctorAssistantForm } from "constants/form";
import { showToast } from "helpers/toast";
import useDoctorAssistantModel from "models/doctorAssistantModel";
import useAuthController from "./authController";
import { useMutation } from "react-query";
import { deleteAssistant, getAssistantDetail, updateAssistant } from "services/doctorAssistant";
import { setRecoil } from "recoil-nexus";
import { deleteDataState, isLoadingState, showConfirmationModalState } from "store/atom/pageState";
import { formModalDataState, showFormModalState, validationErrorState } from "store/atom/formState";
import { queryClient } from "config/query";

const useDoctorAssistantController = () => {
  const { useGetAssistants } = useDoctorAssistantModel();
  const { registerDoctorAssistant } = useAuthController();

  // GET - Get Clinic Assistants Account - Access : Admin
  const useQueryGetDoctorAssistants = () => {
    const results = useGetAssistants();

    const isLoading = results.some((result) => result.isLoading);
    const isError = results.some((result) => result.isError);
    const error = results.find((result) => result.error !== null);

    const tableData = {
      header: ["Nama", "Alamat", "Dokter", "Tindakan"],
      table: [],
    };

    if (!isLoading) {
      if (isError) {
        showToast("failed", error.error.message);
      } else {
        Object.assign(tableData, {
          table: results[0].data.data.map((item) => {
            const data = [item.full_name, item.address, item.doctor_full_name];

            return {
              id: item.id,
              data,
              withAction: [
                {
                  type: "edit",
                  onClick: (id) => getDoctorAssistantUpdateFormMutation.mutate(id),
                },
                {
                  type: "delete",
                  onClick: (id) => {
                    setRecoil(showConfirmationModalState, true);
                    setRecoil(deleteDataState, {
                      onApprove: () => deleteAssistantMutation.mutate(id),
                    });
                  },
                },
              ],
            };
          }),
        });

        Object.assign(addDoctorAssistantForm, {
          inputs: addDoctorAssistantForm.inputs.map((input) => {
            if (input.name === "doctorId") {
              Object.assign(input, {
                items: results[1].data.data.map((item) => {
                  return {
                    label: item.full_name,
                    value: item.doctor_id,
                  };
                }),
              });
            }

            return input;
          }),
          submitButton: {
            ...addDoctorAssistantForm.submitButton,
            onClick: (data) => registerDoctorAssistant(data),
          },
        });
      }
    }

    return {
      tableData,
      isLoading,
    };
  };

  // GET - Get Doctor Assistant Update Form Data - Access : Admin
  const getDoctorAssistantUpdateFormMutation = useMutation(getAssistantDetail, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response, id) => {
      const formData = { ...addDoctorAssistantForm };

      Object.assign(formData, {
        title: "Edit Asisten",
        inputs: formData.inputs.filter((input) => input.name !== "email" && input.name !== "password" && input.name !== "password_confirmation"),
        defaultValues: {
          fullName: response.data.full_name,
          gender: response.data.gender,
          phone: response.data.phone,
          address: response.data.address,
          doctorId: response.data.doctor,
        },
        submitButton: {
          ...formData.submitButton,
          label: "Edit Akun",
          onClick: (data) =>
            updateAssistantMutation.mutate({
              id,
              data: {
                ...data,
                gender: data.gender ? data.gender.value : null,
                doctorId: data.doctorId ? data.doctorId.value : null,
              },
            }),
        },
      });

      setRecoil(formModalDataState, formData);
      setRecoil(showFormModalState, true);
    },
    onError: (error) => {
      showToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
    },
  });

  // PUT - Update Doctor Assistant Account - Access : Admin
  const updateAssistantMutation = useMutation(updateAssistant, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      setRecoil(formModalDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries({ queryKey: ["getAssistants"] });
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

  // DELETE - Delete Doctor Assistant Account - Access : Admin
  const deleteAssistantMutation = useMutation(deleteAssistant, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      queryClient.invalidateQueries({ queryKey: ["getAssistants"] });
    },
    onError: (error) => {
      showToast("failed", error.error.message);
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
      setRecoil(deleteDataState, null);
      setRecoil(showConfirmationModalState, false);
    },
  });

  return {
    useQueryGetDoctorAssistants,
  };
};

export default useDoctorAssistantController;
