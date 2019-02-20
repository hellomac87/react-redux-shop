export const GET_USER_TOKEN = "GET_USER_TOKEN";

export const token = (state = "asdf", action) => {
  switch (action.type) {
    case GET_USER_TOKEN:
      return "asdf";
    default:
      return state;
  }
};
