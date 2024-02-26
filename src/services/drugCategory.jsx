import axios from "axios";
import { ENDPOINT } from "config/api";
import { getRecoil } from "recoil-nexus";
import { tokenState } from "store/atom/authState";

export const getDrugCategories = async () => {
  const response = await axios.get(ENDPOINT.getCategories, {
    headers: {
      Authorization: `Bearer ${getRecoil(tokenState)}`,
    },
  });

  return response.data;
};

export const getDrugCategoryDetail = async (id) => {
  try {
    const response = await axios.get(`${ENDPOINT.getCategories}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addDrugCategory = async (data) => {
  try {
    const response = await axios.post(ENDPOINT.getCategories, data, {
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

export const updateDrugCategory = async (data) => {
  try {
    const response = await axios.put(`${ENDPOINT.getCategories}/${data.id}`, data.data, {
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

export const deleteDrugCategory = async (id) => {
  try {
    const response = await axios.delete(`${ENDPOINT.getCategories}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
