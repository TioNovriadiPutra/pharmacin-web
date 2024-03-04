import { animated } from "@react-spring/web";
import Bar from "components/elements/Bar";
import DrawerBackdrop from "components/elements/DrawerBackdrop";
import DrawerList from "components/fragments/DrawerList";
import DrawerLogo from "components/fragments/DrawerLogo";
import DrawerProfile from "components/fragments/DrawerProfile";
import ProfileSkeleton from "components/skeleton/ProfileSkeleton";
import useUserController from "controllers/userController";
import useDrawer from "hooks/useDrawer";

const CustomDrawer = () => {
  const { drawerStatus, drawerAnim, drawerBorderAnim, onLogoClick, onClose, location, onMenuClick, onProfileMenuClick } = useDrawer();

  const { useQueryGetUserProfile } = useUserController();

  const { profileData, isLoading } = useQueryGetUserProfile();

  return (
    <div className="w-18 h-screen relative">
      {drawerStatus && <DrawerBackdrop onClick={onClose} />}

      <animated.div style={{ width: drawerAnim, borderTopRightRadius: drawerBorderAnim, borderBottomRightRadius: drawerBorderAnim }} className="h-full bg-white z-50 w-18 py-6">
        <DrawerLogo onClick={onLogoClick} />

        <Bar />

        <DrawerList location={location} onMenuClick={onMenuClick} />

        <Bar />

        {isLoading ? <ProfileSkeleton /> : <DrawerProfile onClick={onLogoClick} profileData={profileData} onMenuClick={onProfileMenuClick} />}
      </animated.div>
    </div>
  );
};

export default CustomDrawer;
