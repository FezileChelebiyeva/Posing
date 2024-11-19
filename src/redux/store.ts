import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// RootState, AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
