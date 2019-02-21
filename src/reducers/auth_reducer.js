export const GET_USER_TOKEN = "GET_USER_TOKEN";
export const CREATE_USER_TOKEN = "REGISTER_USER";

export const token = (state = "asdf", action) => {
  switch (action.type) {
    case GET_USER_TOKEN:
      return "asdf";
    case CREATE_USER_TOKEN:
      console.log("CREATE_USER_TOKEN");
    default:
      return state;
  }
};
