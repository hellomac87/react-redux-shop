import produce from "immer";

export const SET_PRODUCT = "SET_PRODUCT";

const userInitialState = [];

export const product = (state = userInitialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_PRODUCT:
        action.payload.forEach(product => {
          draft[product.id] = product;
        });
    }
  });
