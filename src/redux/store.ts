import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
