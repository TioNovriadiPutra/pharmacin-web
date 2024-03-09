import { useQuery } from "react-query";
import { getAdministrators, getUserProfile } from "services/user";

const useUserModel = () => {
  const useGetUserProfile = () => {
    return useQuery({ queryKey: ["getUserProfile"], queryFn: () => getUserProfile() });
  };

  const useGetAdministrators = () => {
    return useQuery({ queryKey: ["getAdministrators"], queryFn: () => getAdministrators() });
  };

  return {
    useGetUserProfile,
    useGetAdministrators,
  };
};

export default useUserModel;
