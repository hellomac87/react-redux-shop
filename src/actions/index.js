import { GET_USER_TOKEN } from "../reducers/auth_reducer";

export const getUserToken = () => {
  console.log("get user token action");
  return {
    type: GET_USER_TOKEN
  };
};
