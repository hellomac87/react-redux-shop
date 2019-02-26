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
  // -. 컨테이너에서 redux의 상태에 접근하기 위해서는 셀렉터를 거쳐야만 해
  // -. 이 셀렉터는 화면에 표시할 products를 state로 부터 가져오기 위한 셀렉터야
  // -. 첫번째 인자인 state는 redux 상태를 의미해, 두번째 인자인 category는 가져올 카테고리를 뜻하지

  // 1. products.listByCategory[category] 를 우선 가져와, 얘는 객체 형태겟지
  // 1-1. 객체에서 ids를 가져와, 최초에는 빈 배열이 들어있을거야
  const ids = fromList.getIds(state.listByCategory[category]);

  //
  return ids.map(id => fromById.getProduct(state.byId, id));
};

// export const getIsFetching = (state, category) =>
//   fromList.getIsFetching(state.listByCategory[category]);
