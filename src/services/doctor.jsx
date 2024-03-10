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

export const getDoctorDetail = async (id) => {
  try {
    const response = await axios.get(`${ENDPOINT.getDoctors}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateDoctor = async (data) => {
  try {
    const response = await axios.put(`${ENDPOINT.getDoctors}/${data.id}`, data.data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteDoctor = async (id) => {
  try {
    const response = await axios.delete(`${ENDPOINT.getDoctors}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
