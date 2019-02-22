import { combineReducers } from "redux";
import { user } from "./auth_reducer";
import { loading } from "./loading_reducer";

const rootReducer = combineReducers({
  user,
  loading
});

export default rootReducer;
