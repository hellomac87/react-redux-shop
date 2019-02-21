import api from "../api/api";
import { GET_USER_TOKEN, CREATE_USER_TOKEN } from "../reducers/auth_reducer";

export const createUserToken = (username, password) => async dispatch => {
  // 1. On Loading indicator dispatch

  // 2. call API
  const res = await api.post("/users/login", {
    username,
    password
  });

  console.log(res);
  // 3. Off Loading indicator dispatch

  // 4. dispatch action creater
  return {
    type: CREATE_USER_TOKEN
  };
};

export const getUserToken = () => async () => {
  // const
  console.log("get user token action");
  return {
    type: GET_USER_TOKEN
  };
};
