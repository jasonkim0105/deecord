import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import RootReducer from "../reducers/root_reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
<<<<<<< HEAD
  middlewares.push(logger);
=======
 middlewares.push(logger);
>>>>>>> server
}

const configureStore = (preloadedState = {}) =>
  createStore(RootReducer, preloadedState, applyMiddleware(...middlewares));

export default configureStore;