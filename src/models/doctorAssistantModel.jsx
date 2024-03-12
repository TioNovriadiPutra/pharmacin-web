import { useQueries } from "react-query";
import { getDoctors } from "services/doctor";
import { getAssistants } from "services/doctorAssistant";

const useDoctorAssistantModel = () => {
  const useGetAssistants = () => {
    return useQueries([
      { queryKey: ["getAssistants"], queryFn: () => getAssistants() },
      { queryKey: ["getDoctorsDropdown"], queryFn: () => getDoctors() },
    ]);
  };

  return {
    useGetAssistants,
  };
};

export default useDoctorAssistantModel;
