import { createStore, applyMiddleware, compose } from "redux";

// import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

import { getUser } from "../actions/auth_action";

const configureStore = () => {
  // const middleWares = [logger, thunk];
  const middleWares = [thunk];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleWares))
  );

  const token = localStorage.getItem("token");
  if (token) {
    store.dispatch(getUser());
  }

  return store;
};

export default configureStore;
