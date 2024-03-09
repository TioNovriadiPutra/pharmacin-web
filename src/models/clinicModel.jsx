import { useQuery } from "react-query";
import { getClinicDetail } from "services/clinic";

const useClinicModel = () => {
  const useGetClinicDetail = () => {
    return useQuery({ queryKey: ["getClinicDetail"], queryFn: () => getClinicDetail() });
  };

  return {
    useGetClinicDetail,
  };
};

export default useClinicModel;
