import { createStore, compose, applyMiddleware } from "redux";
import APIMiddleware from "./middleware/API";

import rootReducer from "./reducers";

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(APIMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);