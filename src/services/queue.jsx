import axios from "axios";
import { ENDPOINT } from "config/api";
import { getRecoil } from "recoil-nexus";
import { tokenState } from "store/atom/authState";

export const cancelQueue = async (id) => {
  try {
    const response = await axios.delete(`${ENDPOINT.cancelQueue}/${id}`, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDoctorConsultingQueue = async () => {
  try {
    const response = await axios.get(ENDPOINT.getDoctorConsultingQueue, {
      headers: {
        Authorization: `Bearer ${getRecoil(tokenState)}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getDoctorConsultingQueueDetail = async (id) => {
  try {
    const response = await axios.get(
      `${ENDPOINT.getDoctorConsultingQueue}/${id}`,
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
