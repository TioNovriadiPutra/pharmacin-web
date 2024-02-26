import { atom } from "recoil";

const toastShowState = atom({
  key: "toastShowState",
  default: false,
});

const toastMessageState = atom({
  key: "toastMessageState",
  default: false,
});

const toastTypeState = atom({
  key: "toastTypeState",
  default: "success",
});

export { toastShowState, toastMessageState, toastTypeState };
