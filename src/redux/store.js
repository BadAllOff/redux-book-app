import { configureStore } from "@reduxjs/toolkit";
import APIMiddleware from "./middleware/API"; // I want to keep it for any case
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware, APIMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});
