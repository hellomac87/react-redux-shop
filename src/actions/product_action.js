import api from "../api/api";
import { loadingStart, loadingEnd } from "./loading_action";
import { SET_PRODUCT } from "../reducers/product_reducer";

export const getProduct = category => async disaptch => {
  const params = {
    category: category ? category : null
  };
  try {
    disaptch(loadingStart());
    const res = await api.get("/products", { params });
    const payload = res.data;
    disaptch(setProduct(payload, category));
    disaptch(loadingEnd());
  } catch (e) {}
};

const setProduct = (payload, category) => {
  return {
    type: SET_PRODUCT,
    payload,
    category
  };
};
