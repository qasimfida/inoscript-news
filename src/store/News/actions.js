import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  NEWS_API_KEY,
  NEW_YORK_TIMES_API_KEY,
  GOOGLE_NEWS_API_KEY,
  NEWS_BASE_URL,
  NY_TIMES_BASE_URL,
  G_NEWS_BASE_URL,
} from "../../utils/config";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (query, { rejectWithValue }) => {
    const url = `${NEWS_BASE_URL}/everything?q=${query}&apiKey=${NEWS_API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data.articles;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getArticlesByCategory = createAsyncThunk(
  "articles/getArticlesByCategory",
  async (query, { rejectWithValue }) => {
    const url = `${NEWS_BASE_URL}/top-headlines/sources?category=${query}&apiKey=${NEWS_API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data.articles;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNewYorkTimesArticles = createAsyncThunk(
  "articles/fetchNewYorkTimesArticles",
  async (query, { rejectWithValue }) => {
    const url = `${NY_TIMES_BASE_URL}/articlesearch.json?q=${query}&api-key=${NEW_YORK_TIMES_API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data.response.docs;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchGoogleNewsArticles = createAsyncThunk(
  "articles/fetchGoogleNewsArticles",
  async (query, { rejectWithValue }) => {
    const url = `${G_NEWS_BASE_URL}/search?q=${query}&lang=en&country=us&max=20&apikey=${GOOGLE_NEWS_API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data.articles;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);