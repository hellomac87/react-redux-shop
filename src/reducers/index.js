import { combineReducers } from "redux";
import { user } from "./auth_reducer";
import { loading } from "./loading_reducer";
import { product } from "./product_reducer";

const rootReducer = combineReducers({
  user,
  loading,
  product
});

export default rootReducer;
