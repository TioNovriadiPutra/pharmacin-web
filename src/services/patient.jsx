import axios from "axios";
import { ENDPOINT } from "config/api";
import { getRecoil } from "recoil-nexus";
import { tokenState } from "store/atom/authState";

export const getPatients = async () => {
  const response = await axios.get(ENDPOINT.getPatients, {
    headers: {
      Authorization: `Bearer ${getRecoil(tokenState)}`,
    },
  });

  return response.data;
};

export const getQueueingPatients = async () => {
  const response = await axios.get(ENDPOINT.getQueueingPatients, {
    headers: {
      Authorization: `Bearer ${getRecoil(tokenState)}`,
    },
  });

  return response.data;
};

export const addPatientQueue = async (data) => {
  try {
    const response = await axios.post(`${ENDPOINT.getQueueingPatients}/${data.id}`, data.data, {
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
