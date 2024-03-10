import { addDoctorForm } from "constants/form";
import useDoctorModal from "models/doctorModal";
import useAuthController from "./authController";
import { setRecoil } from "recoil-nexus";
import { deleteDataState, isLoadingState, showConfirmationModalState } from "store/atom/pageState";
import { deleteDoctor, getDoctorDetail, updateDoctor } from "services/doctor";
import { formModalDataState, showFormModalState, validationErrorState } from "store/atom/formState";
import { showToast } from "helpers/toast";
import { useMutation } from "react-query";
import { queryClient } from "config/query";

const useDoctorController = () => {
  const { useGetDoctors } = useDoctorModal();
  const { registerDoctor } = useAuthController();

  // GET - Get Clinic Doctor Accounts - Access : Admin,Administrator
  const useQueryGetDoctors = () => {
    const results = useGetDoctors();

    const isLoading = results.some((result) => result.isLoading);

    const tableData = {
      header: ["Nama Dokter", "Jenis Kelamin", "Handphone", "Spesialisasi", "Alamat", "Tindakan"],
      table: [],
    };

    if (!isLoading) {
      Object.assign(tableData, {
        table: results[0].data.data.map((item) => {
          const data = [item.full_name, item.gender, item.phone, item.speciality_name, item.address];

          return {
            id: item.id,
            data,
            withAction: [
              {
                type: "edit",
                onClick: (id) => queryGetDoctorUpdateForm(id),
              },
              {
                type: "delete",
                onClick: (id) => {
                  setRecoil(showConfirmationModalState, true);
                  setRecoil(deleteDataState, {
                    onApprove: () => deleteDoctorMutation.mutate(id),
                  });
                },
              },
            ],
          };
        }),
      });

      Object.assign(addDoctorForm, {
        inputs: addDoctorForm.inputs.map((input) => {
          if (input.name === "specialityId") {
            Object.assign(input, {
              items: results[1].data.data.map((item) => {
                return {
                  label: item.speciality,
                  value: item.id,
                };
              }),
            });
          }

          return input;
        }),
        submitButton: {
          ...addDoctorForm.submitButton,
          onClick: (data) => registerDoctor(data),
        },
      });
    }

    return {
      tableData,
      isLoading,
    };
  };

  // GET - Get Doctor Update Form Data - Access : Admin
  const queryGetDoctorUpdateForm = async (id) => {
    setRecoil(isLoadingState, true);

    const formData = { ...addDoctorForm };

    await getDoctorDetail(id)
      .then((response) => {
        Object.assign(formData, {
          title: "Edit Dokter",
          inputs: formData.inputs.filter((input) => input.name !== "email" && input.name !== "password" && input.name !== "password_confirmation"),
          defaultValues: {
            fullName: response.data.full_name,
            gender: response.data.gender,
            phone: response.data.phone,
            specialityId: response.data.speciality,
            address: response.data.address,
          },
          submitButton: {
            ...formData.submitButton,
            label: "Edit Akun",
            onClick: (data) =>
              updateDoctorMutation.mutate({
                id,
                data: {
                  ...data,
                  gender: data.gender ? data.gender.value : null,
                  specialityId: data.specialityId ? data.specialityId.value : null,
                },
              }),
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

  // PUT - Update Doctor Account Data - Access : Admin
  const updateDoctorMutation = useMutation(updateDoctor, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      setRecoil(formModalDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
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

  // DELETE - Delete Doctor Account - Access : Admin
  const deleteDoctorMutation = useMutation(deleteDoctor, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      queryClient.invalidateQueries({ queryKey: ["getDoctors"] });
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
    useQueryGetDoctors,
  };
};

export default useDoctorController;
