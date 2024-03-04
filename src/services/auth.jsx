import axios from "axios";
import { ENDPOINT } from "config/api";
import { getRecoil } from "recoil-nexus";
import { tokenState } from "store/atom/authState";

export const login = async (data) => {
  try {
    const response = await axios.post(ENDPOINT.login, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (data) => {
  try {
    const response = await axios.post(ENDPOINT.registerAdmin, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(ENDPOINT.logout, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
