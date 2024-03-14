import axios from "axios";
import { ENDPOINT } from "config/api";
import { getRecoil } from "recoil-nexus";
import { tokenState } from "store/atom/authState";

export const getPurchaseTransactions = async () => {
  try {
    const response = await axios.get(ENDPOINT.getPurchaseTransactions, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getPurchaseTransactionDetail = async (id) => {
  try {
    const response = await axios.get(
      `${ENDPOINT.getPurchaseTransactions}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${getRecoil(tokenState)}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const addPurchaseTransaction = async (data) => {
  try {
    const response = await axios.post(ENDPOINT.getPurchaseTransactions, data, {
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
