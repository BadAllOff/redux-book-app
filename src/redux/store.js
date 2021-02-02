import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});
