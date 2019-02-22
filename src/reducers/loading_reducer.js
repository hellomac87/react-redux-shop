import produce from "immer";

export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";

const loadingInitialState = {
  state: false
};

export const loading = (state = loadingInitialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOADING_START:
        draft.state = action.payload;
      case LOADING_END:
        draft.state = action.payload;
    }
  });
