import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit"
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Vikash_12017013</title>
          <link rel="icon" type="image/png" href="/src/assets/Logo/icon.png" sizes="16x16" />        </Helmet>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
 