import { LOADING_START, LOADING_END } from "../reducers/loading_reducer";

export const loadingStart = () => {
  return {
    type: LOADING_START,
    payload: true
  };
};

export const loadingEnd = () => {
  return {
    type: LOADING_END,
    payload: false
  };
};
