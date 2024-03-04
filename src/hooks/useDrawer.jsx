import { useSpringValue } from "@react-spring/web";
import { drawerListAdmin, drawerListDokter } from "constants/drawer";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { roleState } from "store/atom/authState";
import { drawerStatusState, drawerSubIndexState } from "store/atom/pageState";

const useDrawer = () => {
  const [drawerStatus, setDrawerStatus] = useRecoilState(drawerStatusState);
  const [drawerSubIndex, setDrawerSubIndex] = useRecoilState(drawerSubIndexState);
  const role = useRecoilValue(roleState);

  const location = useLocation();
  const nav = useNavigate();

  const drawerAnim = useSpringValue(68);
  const drawerBorderAnim = useSpringValue(0);

  const onLogoClick = () => {
    setDrawerStatus((prev) => !prev);
    if (drawerSubIndex > 0) {
      setDrawerSubIndex(0);
    }
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

  const onProfileMenuClick = () => {
    if (role === 2) {
      if (drawerSubIndex === drawerListDokter.length + 1) {
        setDrawerSubIndex(0);
      } else {
        setDrawerSubIndex(drawerListDokter.length + 1);
      }
    } else {
      if (drawerSubIndex === drawerListAdmin.length + 1) {
        setDrawerSubIndex(0);
      } else {
        setDrawerSubIndex(drawerListAdmin.length + 1);
      }
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
    onProfileMenuClick,
  };
};

export default useDrawer;
