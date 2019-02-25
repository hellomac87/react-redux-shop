import produce from "immer";

export const SET_PRODUCT = "SET_PRODUCT";

const userInitialState = {
  byId: [],
  total_count: null,
  byFilter: []
};

export const product = (state = userInitialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_PRODUCT:
        action.payload.forEach(product => {
          draft.byId[product.id] = product;
          draft.byFilter = action.payload.filter(
            item => item.category === action.category
          );
          draft.total_count = action.total_count;
        });
        break;
      default:
        return state;
    }
  });
