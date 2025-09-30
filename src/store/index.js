import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
// import common from "../store/common";

const reducer = combineReducers({
//   common,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});