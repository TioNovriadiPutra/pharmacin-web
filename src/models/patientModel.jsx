import { useQueries } from "react-query";
import { getOccupations } from "services/occupation";
import { getPatients, getQueueingPatients } from "services/patient";

const usePatientModel = () => {
  const useGetPatients = () => {
    return useQueries([
      {
        queryKey: ["getQueueingPatients"],
        queryFn: () => getQueueingPatients(),
      },
      { queryKey: ["getPatients"], queryFn: () => getPatients() },
      { queryKey: ["getOccupations"], queryFn: () => getOccupations() },
    ]);
  };

  return {
    useGetPatients,
  };
};

export default usePatientModel;
