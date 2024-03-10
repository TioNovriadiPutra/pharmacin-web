import { atom } from "recoil";

const validationErrorState = atom({
  key: "validationErrorState",
  default: null,
});

const showFormModalState = atom({
  key: "showFormModalState",
  default: false,
});

const formModalDataState = atom({
  key: "formModalDataState",
  default: null,
});

const cashierDataState = atom({
  key: "cashierDataState",
  default: null,
});

export { validationErrorState, showFormModalState, formModalDataState, cashierDataState };
