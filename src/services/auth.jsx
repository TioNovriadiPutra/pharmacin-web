import axios from "axios";
import { ENDPOINT } from "config/api";

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
