import { useQuery } from "react-query";
import { getUserProfile } from "services/user";

const useUserModel = () => {
  const useGetUserProfile = () => {
    return useQuery({ queryKey: ["getUserProfile"], queryFn: () => getUserProfile() });
  };

  return {
    useGetUserProfile,
  };
};

export default useUserModel;
