import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authSlice from "../features/auth/authSlice";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: "my-super-secret-key",
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
};

const reducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  //auth: authReducer,
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
  devTools: true,
});
