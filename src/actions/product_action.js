import api from "../api/api";
import { SET_PRODUCT } from "../reducers/product_reducer";

export const getProduct = () => async disaptch => {
  try {
    const res = await api.get("/products");
    const payload = res.data;
    disaptch(setProduct(payload));
  } catch (e) {}
};

const setProduct = payload => {
  return {
    type: SET_PRODUCT,
    payload
  };
};
