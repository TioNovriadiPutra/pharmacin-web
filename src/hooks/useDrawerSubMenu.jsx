import { useSpring } from "@react-spring/web";
import useDrawer from "./useDrawer";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { drawerSubIndexState } from "store/atom/pageState";

const useDrawerSubMenu = (index, height) => {
  const drawerSubIndex = useRecoilValue(drawerSubIndexState);

  const { onClose, nav } = useDrawer();

  const [arrowAnim, apiArrow] = useSpring(() => ({
    transform: "rotate(0deg)",
  }));
  const [subMenuAnim, apiSub] = useSpring(() => ({ height: "0px" }));

  const onSubMenuItemClick = (path) => {
    nav(path);
    onClose();
  };

  useEffect(() => {
    if (drawerSubIndex === index) {
      apiArrow.start({ transform: "rotate(-180deg)" });
      apiSub.start({ height: `${height}px` });
    } else {
      apiArrow.start({ transform: "rotate(0deg)" });
      apiSub.start({ height: "0px" });
    }
  }, [drawerSubIndex]);

  return {
    arrowAnim,
    onSubMenuItemClick,
    subMenuAnim,
  };
};

export default useDrawerSubMenu;
