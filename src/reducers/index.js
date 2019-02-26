import { combineReducers } from "redux";
import { user } from "./auth_reducer";
import { loading } from "./loading_reducer";
import { product } from "./product_reducer";
import products, * as fromProducts from "./products_reducer";

const rootReducer = combineReducers({
  user,
  loading,
  product,
  products
});

export default rootReducer;
