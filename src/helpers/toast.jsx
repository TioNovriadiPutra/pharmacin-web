import { setRecoil } from "recoil-nexus";
import { toastMessageState, toastShowState, toastTypeState } from "store/atom/toastState";

export const showToast = (type, message) => {
  setRecoil(toastTypeState, type);
  setRecoil(toastMessageState, message);
  setRecoil(toastShowState, true);
};
