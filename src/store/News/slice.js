import { createSlice } from "@reduxjs/toolkit";
import {
  fetchArticles,
  fetchGNewsArticles,
  fetchNYTimesArticles,
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
      .addCase(fetchNYTimesArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNYTimesArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = transformNewYorkTimesArticles(action.payload);
      })
      .addCase(fetchNYTimesArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchGNewsArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGNewsArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = transformGoogleNewsArticles(action.payload);
      })
      .addCase(fetchGNewsArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});


export default news.reducer;
