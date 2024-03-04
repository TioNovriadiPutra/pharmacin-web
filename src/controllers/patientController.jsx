import { queryClient } from "config/query";
import { pickDoctorForm } from "constants/form";
import { showToast } from "helpers/toast";
import usePatientModel from "models/patientModel";
import { useMutation } from "react-query";
import { setRecoil } from "recoil-nexus";
import { getDoctors } from "services/doctor";
import { addPatientQueue } from "services/patient";
import { deleteDataState, isLoadingState, pickDoctorDataState, showConfirmationModalState, showPickDoctorModalState } from "store/atom/pageState";
import useQueueController from "./queueController";

const usePatientController = () => {
  const { useGetPatients } = usePatientModel();
  const { cancelQueueMutation } = useQueueController();

  const useQueryGetPatients = () => {
    const results = useGetPatients();

    const isLoading = results.some((result) => result.isLoading);

    const tableData = [
      { header: ["Nomor Registrasi", "Nama Pasien", "No. RM", "J. Kelamin", "Tgl. Daftar", "Status", "Tindakan"] },
      { header: ["Nama Pasien", "No. RM", "No. Handphone", "Alamat", "J. Kelamin", "Tgl. Lahir", "Tindakan"] },
    ];

    if (!isLoading) {
      Object.assign(tableData[0], {
        table: results[0].data.data.map((item) => {
          const data = [item.registration_number, item.full_name, item.record_number, item.gender, item.created_at];

          return {
            id: item.id,
            data,
            withStatus: {
              label: item.status,
              color: item.status.includes("wait") ? "bg-light-primary" : "bg-light-danger",
              textColor: item.status.includes("wait") ? "text-primary" : "text-danger",
            },
            withAction: [
              {
                type: "delete",
                onClick: (id) => {
                  setRecoil(showConfirmationModalState, true);
                  setRecoil(deleteDataState, {
                    onApprove: () => cancelQueueMutation.mutate(id),
                  });
                },
              },
            ],
          };
        }),
      });

      Object.assign(tableData[1], {
        table: results[1].data.data.map((item) => {
          const data = [item.full_name, item.record_number, item.phone, item.address, item.gender, item.date_birth];

          return {
            id: item.id,
            data,
            withAction: [
              {
                type: "button",
                label: "Daftar",
                color: item.ready ? "bg-secondary" : "bg-inactive",
                disabled: !item.ready,
                onClick: () => {
                  queryGetDoctorsDropdown({
                    id: item.id,
                    name: item.full_name,
                    onApprove: (data) => addPatientQueueMutation.mutate({ id: item.id, data: { doctorId: data.doctorId ? data.doctorId.value : null } }),
                  });
                },
              },
            ],
          };
        }),
      });
    }

    return {
      tableData,
      isLoading,
    };
  };

  const queryGetDoctorsDropdown = async (data) => {
    setRecoil(isLoadingState, true);

    await getDoctors()
      .then((response) => {
        Object.assign(pickDoctorForm.inputs[0], {
          items: response.data.map((item) => {
            return {
              label: item.doctor,
              value: item.id,
            };
          }),
        });

        setRecoil(showPickDoctorModalState, true);
        setRecoil(pickDoctorDataState, data);
      })
      .finally(() => {
        setRecoil(isLoadingState, false);
      });
  };

  const addPatientQueueMutation = useMutation(addPatientQueue, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      queryClient.invalidateQueries({ queryKey: ["getQueueingPatients"] });
      queryClient.invalidateQueries({ queryKey: ["getPatients"] });
    },
    onError: (error) => {
      if (error.error.status === 422) {
        showToast("failed", error.error.message[0].message);
      } else if (error.error.status === 404 || error.error.status === 403) {
        showToast("failed", error.error.message);
      }
    },
    onSettled: () => {
      setRecoil(isLoadingState, false);
      setRecoil(pickDoctorDataState, null);
      setRecoil(showPickDoctorModalState, false);
    },
  });

  return {
    useQueryGetPatients,
  };
};

export default usePatientController;
