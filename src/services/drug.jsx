import axios from "axios";
import { ENDPOINT } from "config/api";
import { getRecoil } from "recoil-nexus";
import { tokenState } from "store/atom/authState";

export const getDrugs = async () => {
  const response = await axios.get(ENDPOINT.getDrugs, {
    headers: {
      Authorization: `Bearer ${getRecoil(tokenState)}`,
    },
  });

  return response.data;
};

export const getDrugDetail = async (id) => {
  try {
    const response = await axios.get(`${ENDPOINT.getDrugs}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addDrug = async (data) => {
  try {
    const response = await axios.post(ENDPOINT.getDrugs, data, {
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

export const updateDrug = async (data) => {
  try {
    const response = await axios.put(`${ENDPOINT.getDrugs}/${data.id}`, data.data, {
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

export const deleteDrug = async (id) => {
  try {
    const response = await axios.delete(`${ENDPOINT.getDrugs}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
