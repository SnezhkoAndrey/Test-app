import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";
import { SubmitType } from "../types/types";
import { setError } from "./newsSlice";

const initialState = {
  auth: false,
  authFail: false,
  loadingAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    setFailAuth: (state, action: PayloadAction<boolean>) => {
      state.authFail = action.payload;
    },
    setLoadingAuth: (state, action: PayloadAction<boolean>) => {
      state.loadingAuth = action.payload;
    },
  },
});

export const { setAuth, setFailAuth, setLoadingAuth } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth.auth;
export const selectFailAuth = (state: RootState) => state.auth.authFail;
export const selectLoadingAuth = (state: RootState) => state.auth.loadingAuth;

export const setAuthData =
  (complete: boolean): AppThunk =>
  (dispatch, getState) => {
    try {
      dispatch(setAuth(complete));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };

export const setFailAuthData =
  (fail: boolean): AppThunk =>
  (dispatch, getState) => {
    try {
      dispatch(setFailAuth(fail));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };

export const setLoadingAuthData =
  (loading: boolean): AppThunk =>
  (dispatch, getState) => {
    try {
      dispatch(setLoadingAuth(loading));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };

export const authProccess =
  (submitValue: SubmitType, onAuthSuccess: () => void): AppThunk =>
  (dispatch, getState) => {
    try {
      dispatch(setLoadingAuthData(true));
      if (
        submitValue.username === "admin" &&
        submitValue.password === "12345"
      ) {
        localStorage.setItem("auth", JSON.stringify(submitValue));
        dispatch(setAuthData(true));
        dispatch(setFailAuthData(false));
        dispatch(setLoadingAuthData(false));
        onAuthSuccess();
      } else {
        dispatch(setFailAuthData(true));
        dispatch(setLoadingAuthData(false));
      }
    } catch (error: any) {
      dispatch(setError(error.message));
      dispatch(setLoadingAuthData(false));
    }
  };

export default authSlice.reducer;
