import { atom } from "recoil";

const isLoadingState = atom({
  key: "isLoadingState",
  default: false,
});

const showConfirmationModalState = atom({
  key: "showConfirmationModalState",
  default: false,
});

const editDataState = atom({
  key: "editDataState",
  default: null,
});

const detailDataState = atom({
  key: "detailDataState",
  default: null,
});

const showDetailModalState = atom({
  key: "showDetailModalState",
  default: false,
});

const drawerSubIndexState = atom({
  key: "drawerSubIndexState",
  default: 0,
});

const drawerStatusState = atom({
  key: "drawerStatusState",
  default: false,
});

const switchIndexState = atom({
  key: "stockSwitchIndexState",
  default: 0,
});

export { isLoadingState, showConfirmationModalState, editDataState, detailDataState, showDetailModalState, drawerSubIndexState, drawerStatusState, switchIndexState };
