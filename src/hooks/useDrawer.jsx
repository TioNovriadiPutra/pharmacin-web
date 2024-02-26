import { useSpringValue } from "@react-spring/web";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { drawerStatusState, drawerSubIndexState } from "store/atom/pageState";

const useDrawer = () => {
  const [drawerStatus, setDrawerStatus] = useRecoilState(drawerStatusState);
  const setDrawerSubIndex = useSetRecoilState(drawerSubIndexState);

  const location = useLocation();
  const nav = useNavigate();

  const drawerAnim = useSpringValue(68);
  const drawerBorderAnim = useSpringValue(0);

  const onLogoClick = () => {
    setDrawerStatus((prev) => !prev);
  };

  const onClose = () => {
    setDrawerStatus(false);
    setDrawerSubIndex(0);
  };

  const onMenuClick = (item, index) => {
    if (item.subMenu) {
      setDrawerStatus(true);
      setDrawerSubIndex(index);
    } else {
      nav(item.path);
      onClose();
    }
  };

  const handleOpenAnim = () => {
    drawerAnim.start(274);
    drawerBorderAnim.start(10);
  };

  const handleCloseAnim = () => {
    drawerAnim.start(68);
    drawerBorderAnim.start(0);
  };

  useEffect(() => {
    if (drawerStatus) {
      handleOpenAnim();
    } else {
      handleCloseAnim();
    }
  }, [drawerStatus]);

  return {
    drawerStatus,
    drawerAnim,
    drawerBorderAnim,
    onLogoClick,
    onClose,
    location,
    onMenuClick,
    nav,
  };
};

export default useDrawer;
