import { queryClient } from "config/query";
import { perawatanForm } from "constants/form";
import { patientHeader } from "constants/header";
import { hashIdUrl } from "helpers/hash";
import { showToast } from "helpers/toast";
import useQueueModel from "models/queueModel";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { setRecoil } from "recoil-nexus";
import { cancelQueue } from "services/queue";
import {
  deleteDataState,
  isLoadingState,
  showConfirmationModalState,
} from "store/atom/pageState";

const useQueueController = () => {
  const { useGetDoctorConsultingQueues, useGetDoctorConsultingQueueDetail } =
    useQueueModel();
  const nav = useNavigate();

  // DELETE - Cancel Patient Queue - Access : Administrator
  const cancelQueueMutation = useMutation(cancelQueue, {
    onMutate: () => {
      setRecoil(isLoadingState, true);
    },
    onSuccess: (response) => {
      showToast("success", response.message);
      queryClient.invalidateQueries({ queryKey: ["getQueueingPatients"] });
      queryClient.invalidateQueries({ queryKey: ["getPatients"] });
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

  // GET - Get Doctor Patient Queue List - Access : Doctor,Admin
  const useQueryGetDoctorConsultingQueues = () => {
    const { data, isLoading, isError, error } = useGetDoctorConsultingQueues();

    const tableData = {
      header: [
        "Nama Pasien",
        "No. Registrasi",
        "No. RM",
        "Tgl. Pemeriksaan",
        "Tindakan",
      ],
      table: [],
    };

    if (!isLoading) {
      if (isError) {
        showToast("failed", error.error.message);
      } else {
        Object.assign(tableData, {
          table: data.data.map((item) => {
            const data = [
              item.full_name,
              item.registration_number,
              item.record_number,
              item.queue_date,
            ];

            return {
              id: item.id,
              data,
              withAction: [
                {
                  type: "button",
                  label: "Periksa",
                  color: "bg-primary",
                  onClick: () => nav(`/dokter/perawatan/${hashIdUrl(item.id)}`),
                },
              ],
            };
          }),
        });
      }
    }

    return {
      tableData,
      isLoading,
    };
  };

  const useQueryGetDoctorConsultingQueueDetail = (id) => {
    const { data, isLoading, isError, error } =
      useGetDoctorConsultingQueueDetail(id);

    if (!isLoading) {
      if (isError) {
        showToast("failed", error.error.message);
      } else {
        const fetchData1 = [
          data.data.registration_number,
          data.data.record_number,
          data.data.full_name,
          data.data.ttl,
          data.data.address,
        ];

        const fetchData2 = [
          data.data.queue_date,
          data.data.doctor,
          data.data.allergy || "-",
        ];

        Object.assign(patientHeader, {
          first: patientHeader.first.map((item, index) => {
            Object.assign(item, {
              value: fetchData1[index],
            });

            return item;
          }),
          second: patientHeader.second.map((item, index) => {
            Object.assign(item, {
              value: fetchData2[index],
            });

            return item;
          }),
        });

        Object.assign(perawatanForm.defaultValues, {
          dokter: data.data.doctor,
        });
      }
    }

    return {
      isLoading,
    };
  };

  return {
    cancelQueueMutation,
    useQueryGetDoctorConsultingQueues,
    useQueryGetDoctorConsultingQueueDetail,
  };
};

export default useQueueController;
