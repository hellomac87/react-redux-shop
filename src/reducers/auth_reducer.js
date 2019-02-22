import produce from "immer";

export const SET_USER = "SET_USER";

const userInitialState = {
  username: null,
  id: null
};

export const user = (state = userInitialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_USER:
        draft.username = action.username;
        draft.id = action.id;
    }
  });
