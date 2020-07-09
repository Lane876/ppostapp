import { FETCH_ALL } from "./constants";
import api from "./api";

export const fetchAll = () => async (dispatch) => {
  try {
    const { data } = await api.postMessage().fetchAll();
    dispatch({
      type: FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.error(error.message);
  }
};
