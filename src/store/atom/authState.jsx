import { atom } from "recoil";

const tokenState = atom({
  key: "tokenState",
  default: null,
});

const roleState = atom({
  key: "roleState",
  default: null,
});

const paymentStatusState = atom({
  key: "paymentStatusState",
  default: null,
});

export { tokenState, paymentStatusState, roleState };
