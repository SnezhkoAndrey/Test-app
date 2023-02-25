import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";
import { ResponseNewsType } from "../types/types";
import HTTPClient from "../api/api";

const { GET } = HTTPClient();

const initialState = {
  news: [] as ResponseNewsType[],
  loadingData: false,
  error: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<ResponseNewsType[]>) => {
      state.news = action.payload;
    },
    removeNews: (state, action: PayloadAction<string>) => {
      state.news = [
        ...state.news.filter((post) => post.title !== action.payload),
      ];
    },
    setLoadingData: (state, action: PayloadAction<boolean>) => {
      state.loadingData = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setNews, removeNews, setLoadingData, setError } =
  newsSlice.actions;

export const selectNews = (state: RootState) => state.news.news;
export const loadingData = (state: RootState) => state.news.loadingData;
export const selectError = (state: RootState) => state.news.error;

export const getNewsData = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(setLoadingData(true));
    const response = await GET("/news/top/20");
    dispatch(setNews(response));
    dispatch(setLoadingData(false));
  } catch (error: any) {
    dispatch(setError(error.message));
    dispatch(setLoadingData(false));
  }
};

export const getLoadingData =
  (loading: boolean): AppThunk =>
  (dispatch, getState) => {
    try {
      dispatch(setLoadingData(loading));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };

export const removeNewsData =
  (title: string): AppThunk =>
  (dispatch, getState) => {
    try {
      dispatch(removeNews(title));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };

export default newsSlice.reducer;
