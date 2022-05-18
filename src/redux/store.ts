import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

//app
import app from "./App/app";

//main
import main from "./Main/main";

export const rootReducer = combineReducers({
  app,
  main,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
