import api from "../api/api";
import { loadingStart, loadingEnd } from "./loading_action";
import { SET_PRODUCT } from "../reducers/product_reducer";

export const getProduct = (category, page, limit) => async disaptch => {
  const params = {
    category: category || null,
    _page: page || 1,
    _limit: limit || null
  };
  try {
    // Start. 로딩 인디케이터 시작
    disaptch(loadingStart());

    // 1. call api
    const res = await api.get("/products", { params });
    const payload = res.data;
    const total_count = res.headers["x-total-count"];

    // 2. dispatch setProduct action
    disaptch(setProduct(payload, category, total_count));
  } catch (e) {
    // Error
    console.log(e);
  } finally {
    // END. 로딩 인디케이터 끝
    disaptch(loadingEnd());
  }
};

const setProduct = (payload, category, total_count) => {
  return {
    type: SET_PRODUCT,
    payload,
    category,
    total_count
  };
};
