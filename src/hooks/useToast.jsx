import { useSpringValue } from "@react-spring/web";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { toastMessageState, toastShowState, toastTypeState } from "store/atom/toastState";

const useToast = () => {
  const [toastShow, setToastShow] = useRecoilState(toastShowState);
  const [toastMessage, setToastMessage] = useRecoilState(toastMessageState);
  const toastType = useRecoilValue(toastTypeState);

  const toastAnim = useSpringValue(-108);

  useEffect(() => {
    if (toastShow) {
      toastAnim.start(54);

      setTimeout(() => {
        toastAnim.start(-108);
        setToastMessage(null);
        setToastShow(false);
      }, 2000);
    }
  }, [toastShow]);

  return {
    toastType,
    toastMessage,
    toastAnim,
  };
};

export default useToast;
