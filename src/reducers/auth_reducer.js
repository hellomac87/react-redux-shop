import produce from "immer";

export const SET_USER = "SET_USER";
export const DESTROY_USER = "DESTROY_USER";

const userInitialState = {
  username: null,
  id: null
};

export const user = (state = userInitialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_USER:
      case DESTROY_USER:
        draft.username = action.username;
        draft.id = action.id;
        break;
      default:
        return state;
    }
  });
