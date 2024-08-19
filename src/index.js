import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import ArticlesProvider from "./contexts/News";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ArticlesProvider>
      <App />
    </ArticlesProvider>
  </Provider>
);

reportWebVitals();
