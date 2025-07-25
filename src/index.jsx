/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { InjectFonts } from "./components/InjectFonts/InjectFonts";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Router />
        
        <InjectFonts />

      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
