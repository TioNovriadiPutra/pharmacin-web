import axios from "axios";
import { ENDPOINT } from "config/api";
import { getRecoil } from "recoil-nexus";
import { tokenState } from "store/atom/authState";

export const getDoctors = async () => {
  const response = await axios.get(ENDPOINT.getDoctors, {
    headers: {
      Authorization: `Bearer ${getRecoil(tokenState)}`,
    },
  });

  return response.data;
};
