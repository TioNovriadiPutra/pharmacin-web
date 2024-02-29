import { animated } from "@react-spring/web";
import Bar from "components/elements/Bar";
import DrawerBackdrop from "components/elements/DrawerBackdrop";
import DrawerList from "components/fragments/DrawerList";
import DrawerLogo from "components/fragments/DrawerLogo";
import useDrawer from "hooks/useDrawer";

const CustomDrawer = () => {
  const { drawerStatus, drawerAnim, drawerBorderAnim, onLogoClick, onClose, location, onMenuClick } = useDrawer();

  return (
    <div className="w-18 h-screen relative">
      {drawerStatus && <DrawerBackdrop onClick={onClose} />}

      <animated.div style={{ width: drawerAnim, borderTopRightRadius: drawerBorderAnim, borderBottomRightRadius: drawerBorderAnim }} className="h-full overflow-hidden bg-white z-50 w-18 pt-6">
        <DrawerLogo onClick={onLogoClick} />

        <Bar />

        <DrawerList location={location} onMenuClick={onMenuClick} />
      </animated.div>
    </div>
  );
};

export default CustomDrawer;
