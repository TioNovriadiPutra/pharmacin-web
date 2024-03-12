import { useQuery } from "react-query";
import { getDoctorConsultingQueue } from "services/queue";

const useQueueModel = () => {
  const useGetDoctorConsultingQueues = () => {
    return useQuery({ queryKey: ["getDoctorConsultingQueues"], queryFn: () => getDoctorConsultingQueue() });
  };

  return {
    useGetDoctorConsultingQueues,
  };
};

export default useQueueModel;
