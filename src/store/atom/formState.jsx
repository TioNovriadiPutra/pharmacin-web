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

const showEditModalState = atom({
  key: "showEditModalState",
  default: false,
});

export { validationErrorState, showFormModalState, formModalDataState, showEditModalState };
