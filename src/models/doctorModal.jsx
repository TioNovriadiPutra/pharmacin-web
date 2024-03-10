import { useQueries } from "react-query";
import { getDoctors } from "services/doctor";
import { getSpecialities } from "services/speciality";

const useDoctorModal = () => {
  const useGetDoctors = () => {
    return useQueries([
      { queryKey: ["getDoctors"], queryFn: () => getDoctors() },
      {
        queryKey: ["getSpecialitiesDropdown"],
        queryFn: () => getSpecialities(),
      },
    ]);
  };

  return {
    useGetDoctors,
  };
};

export default useDoctorModal;
