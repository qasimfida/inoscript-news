import { configureStore } from "@reduxjs/toolkit";
import news from "./News/slice"

export const store = configureStore({
  reducer: {
    news,
  },
});
