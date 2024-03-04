import { useQueries } from "react-query";
import { getPatients, getQueueingPatients } from "services/patient";

const usePatientModel = () => {
  const useGetPatients = () => {
    return useQueries([
      { queryKey: ["getQueueingPatients"], queryFn: () => getQueueingPatients() },
      { queryKey: ["getPatients"], queryFn: () => getPatients() },
    ]);
  };

  return {
    useGetPatients,
  };
};

export default usePatientModel;
