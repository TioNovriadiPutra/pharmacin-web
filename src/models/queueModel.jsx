import { useQuery } from "react-query";
import {
  getDoctorConsultingQueue,
  getDoctorConsultingQueueDetail,
} from "services/queue";

const useQueueModel = () => {
  const useGetDoctorConsultingQueues = () => {
    return useQuery({
      queryKey: ["getDoctorConsultingQueues"],
      queryFn: () => getDoctorConsultingQueue(),
    });
  };

  const useGetDoctorConsultingQueueDetail = (id) => {
    return useQuery({
      queryKey: ["getDoctorConsultingQueueDetail"],
      queryFn: () => getDoctorConsultingQueueDetail(id),
    });
  };

  return {
    useGetDoctorConsultingQueues,
    useGetDoctorConsultingQueueDetail,
  };
};

export default useQueueModel;
