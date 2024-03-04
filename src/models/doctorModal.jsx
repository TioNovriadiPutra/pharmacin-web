import { useQuery } from "react-query";
import { getDoctors } from "services/doctor";

const useDoctorModal = () => {
  const useGetDoctors = () => {
    return useQuery({ queryKey: ["getDoctors"], queryFn: () => getDoctors() });
  };

  return {
    useGetDoctors,
  };
};

export default useDoctorModal;
