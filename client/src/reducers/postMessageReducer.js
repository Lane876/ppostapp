import { FETCH_ALL } from "../actions/constants";

const initialState = {
  list: [],
};

export default postMessage = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        list: [...action.payload],
      };

    default:
      return state;
  }
};
