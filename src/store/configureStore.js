import { createStore, applyMiddleware, compose } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

const configureStore = () => {
  const middleWares = [logger, thunk];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleWares))
  );
};

export default configureStore;
