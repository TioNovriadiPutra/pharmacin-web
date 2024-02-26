import { selector } from "recoil";
import { tokenState } from "store/atom/authState";

const isLoggedInSelector = selector({
  key: "isLoggedInSelector",
  get: ({ get }) => {
    const authToken = get(tokenState);

    return !!authToken;
  },
});

export { isLoggedInSelector };
