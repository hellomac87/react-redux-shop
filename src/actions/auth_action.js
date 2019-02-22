import api from "../api/api";
import { SET_USER } from "../reducers/auth_reducer";

// thunk actions
export const createUserToken = (username, password) => async dispatch => {
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
};

const getUser = () => async dispatch => {
  // 1. call API
  const res = await api.get("/me");

  // 1-1. console
  console.log("getUser", res);

  const id = res.data.id;
  const username = res.data.username;

  // 2. dispatch action
  dispatch(setUser(id, username));
};

// action creators
export const setUser = (id, username) => {
  return {
    type: SET_USER,
    id,
    username
  };
};
