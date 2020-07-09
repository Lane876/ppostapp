import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import postMessageReducer from "../reducers/postMessageReducer";

const reducers = combineReducers({
  list: postMessageReducer,
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
