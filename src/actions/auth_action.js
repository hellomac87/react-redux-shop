import api from "../api/api";
import { SET_USER, DESTROY_USER } from "../reducers/auth_reducer";
import { loadingStart, loadingEnd } from "./loading_action";

// thunk actions
export const createUser = (username, password) => async dispatch => {
  try {
    // 1. call API
    // const res = await api.post("/users/register", {
    await api.post("/users/register", {
      username,
      password
    });

    // 2. success action dispatch
  } catch (e) {
    console.log(e);
  }
};

export const createUserToken = (username, password) => async dispatch => {
  try {
    // 1. call API
    const res = await api.post("/users/login", {
      username,
      password
    });
    const { token } = res.data;
    // 1-1. console
    console.log("createUserToken", res);

    // 2. save token data at localStorage
    localStorage.setItem("token", token);

    // 3. dispatch action
    dispatch(getUser());
  } catch (e) {
    console.log(e);
  }
};

export const getUser = () => async dispatch => {
  dispatch(loadingStart());
  try {
    // 1. call API
    const res = await api.get("/me");

    // 1-1. console
    console.log("getUser", res);

    const id = res.data.id;
    const username = res.data.username;

    // 2. dispatch action
    dispatch(setUser(id, username));
    dispatch(loadingEnd());
  } catch (e) {
    // 1. logging error
    console.log(e);
    // 2. dispatch error action
    // TODO: dispatch error action
  }
};

// action creators
export const setUser = (id, username) => {
  return {
    type: SET_USER,
    id,
    username
  };
};

export const destroyUser = () => {
  localStorage.removeItem("token");
  return {
    type: DESTROY_USER,
    id: null,
    username: null
  };
};

// TODO: dispatch error action
// const setUserSuccess = () => {
//   return {};
// };
// const setUserFailure = () => {
//   return {};
// };
