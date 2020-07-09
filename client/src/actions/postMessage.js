import { FETCH_ALL, CREATE, UPDATE, DELETE } from "./constants";
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

export const create = (data) => async (dispatch) => {
  try {
    const response = await api.postMessage().create(data);
    dispatch({
      type: CREATE,
      payload: response,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const update = (id, data) => async (dispatch) => {
  try {
    const res = await api.postMessage().update(id, data);
    dispatch({
      type: UPDATE,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const Delete = (id) => async (dispatch) => {
  try {
    await api.postMessage().delete(id);
    dispatch({
      type: DELETE,
      payload: id,
    });
  } catch (error) {
    console.error(error.message);
  }
};
