import { combineReducers } from "redux";
import { token } from "./auth_reducer";

const rootReducer = combineReducers({
  token
});

export default rootReducer;
