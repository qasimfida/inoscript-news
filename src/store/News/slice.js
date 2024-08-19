import { createSlice } from "@reduxjs/toolkit";
import {
  fetchArticles,
  fetchGoogleNewsArticles,
  fetchNewYorkTimesArticles,
  getArticlesByCategory,
} from "./actions";
import { filterAndTransformArticles, transformGoogleNewsArticles, transformNewYorkTimesArticles } from "../../helpers/transforrm";

const news = createSlice({
  name: "news",
  initialState: {
    items: [],
    status: "",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = filterAndTransformArticles(action.payload);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getArticlesByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getArticlesByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getArticlesByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchNewYorkTimesArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewYorkTimesArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = transformNewYorkTimesArticles(action.payload);
      })
      .addCase(fetchNewYorkTimesArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchGoogleNewsArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGoogleNewsArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = transformGoogleNewsArticles(action.payload);
      })
      .addCase(fetchGoogleNewsArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});


export default news.reducer;
