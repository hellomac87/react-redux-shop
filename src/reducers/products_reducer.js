import { combineReducers } from "redux";

import byId, * as fromById from "./byId_reducer";
import createList, * as fromList from "./createList";

const listByCategory = combineReducers({
  all: createList("all"),
  iphone: createList("iphone"),
  macbook: createList("macbook"),
  watch: createList("watch"),
  imac: createList("imac")
});

const products = combineReducers({
  byId,
  listByCategory
});

export default products;

export const getProducts = (state, category) => {
  const ids = fromList.getIds(state.listByCategory[category]);
  return ids.map(id => fromById.getProduct(state.byId, id));
};

// export const getIsFetching = (state, category) =>
//   fromList.getIsFetching(state.listByCategory[category]);
