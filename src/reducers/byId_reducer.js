import produce from "immer";

const byId = (state = {}, action) =>
  produce(state, draft => {
    switch (action.type) {
      case "FETCH_PRODUCTS_SUCCESS":
        action.response.forEach(item => {
          draft[item.id] = item;
        });
        break;
      default:
        return state;
    }
  });

export default byId;

// selector
export const getProduct = (state, id) => state[id];
