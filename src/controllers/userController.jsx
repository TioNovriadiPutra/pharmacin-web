import useUserModel from "models/userModel";

const useUserController = () => {
  const { useGetUserProfile } = useUserModel();

  const useQueryGetUserProfile = () => {
    const { data, isLoading } = useGetUserProfile();

    const profileData = {
      name: "",
      role: "",
    };

    if (!isLoading) {
      Object.assign(profileData, {
        name: data.data.full_name,
        role: data.data.role_name,
      });
    }

    return {
      profileData,
      isLoading,
    };
  };

  return {
    useQueryGetUserProfile,
  };
};

export default useUserController;
