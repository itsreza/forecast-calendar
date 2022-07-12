import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [],
});

export default store;
