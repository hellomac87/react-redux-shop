import { combineReducers } from "redux";

import byProductId, * as fromProductId from "./byProductId_reducer";
import createList, * as fromCreateList from "./createList";

const listByCategory = combineReducers({
  all: createList("all"),
  iphone: createList("iphone"),
  macbook: createList("macbook"),
  watch: createList("watch"),
  imac: createList("imac")
});

const products = combineReducers({
  byProductId,
  listByCategory
});

export default products;
