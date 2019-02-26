import produce from "immer";

const byProductId = (state = {}, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "FETCH_PRODUCTS_SUCCESS":
        action.response.forEach(product => {
          draft[product.id] = product;
        });
        break;
      default:
        return state;
    }
  });

export default byProductId;

// selector
export const getProduct = (state, id) => state[id];
