import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState = {}) =>
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== "production") {
   middlewares.push(logger);
  }

  const configureStore = (preloadedState = {}) =>
  createStore(RootReducer, preloadedState, applyMiddleware(...middlewares));

export default configureStore;