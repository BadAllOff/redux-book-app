import { configureStore } from "@reduxjs/toolkit";
import APIMiddleware from "./middleware/API";

import rootReducer from "./reducers";

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APIMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});
