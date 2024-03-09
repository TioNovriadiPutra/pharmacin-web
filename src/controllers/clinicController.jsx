import { queryClient } from "config/query";
import { editKlinikForm } from "constants/form";
import { showToast } from "helpers/toast";
import useClinicModel from "models/clinicModel";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";
import { updateClinic } from "services/clinic";
import { formModalDataState, showFormModalState, validationErrorState } from "store/atom/formState";
import { isLoadingState } from "store/atom/pageState";

const useClinicController = () => {
  const { useGetClinicDetail } = useClinicModel();

  // GET - Get Clinic Profile - Access : Admin, Administrator
  const useQueryGetClinicDetail = () => {
    const { data, isLoading } = useGetClinicDetail();

    const detailData = {
      inputs: [],
    };

    if (!isLoading) {
      Object.assign(detailData, {
        inputs: [
          {
            title: "Nama Klinik",
            value: data.data.clinic_name,
          },
          {
            title: "Alamat",
            value: data.data.address || "-",
          },
          {
            title: "Telepon",
            value: data.data.clinic_phone,
          },
        ],
      });

      Object.assign(editKlinikForm, {
        defaultValues: {
          clinicName: data.data.clinic_name,
          address: data.data.address,
          clinicPhone: data.data.clinic_phone,
        },
        submitButton: {
          ...editKlinikForm.submitButton,
          onClick: (data) => updateClinicMutation.mutate(data),
        },
      });
    }

    return {
      detailData,
      isLoading,
    };
  };

  // PUT - Update Clinic Profile - Access : Admin
  const updateClinicMutation = useMutation(updateClinic, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
      setRecoil(validationErrorState, null);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      setRecoil(formModalDataState, null);
      setRecoil(showFormModalState, false);
      queryClient.invalidateQueries({ queryKey: ["getClinicDetail"] });
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

  return {
    useQueryGetClinicDetail,
  };
};

export default useClinicController;
