import { logoutIcon, pengaturanIcon } from "assets/images";
import useAuthController from "controllers/authController";

const ProfileMenu = () => {
  const { logout } = useAuthController();

  return (
    <div className="bg-white w-66 absolute left-70 bottom-6 rounded-sm px-2.5 shadow-profile-menu">
      <button className="py-3.75 border-b flex-row items-center gap-2 rounded-none border-b-bar">
        <img src={pengaturanIcon} />

        <h3 className="text-placeholder flex-1 text-start">Pengaturan</h3>
      </button>

      <button className="py-3.75 border-b flex-row items-center gap-2 rounded-none border-b-bar" onClick={logout}>
        <img src={logoutIcon} />

        <h3 className="text-placeholder flex-1 text-start">Logout</h3>
      </button>
    </div>
  );
};

export default ProfileMenu;
