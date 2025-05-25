import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { InjectFonts } from "./components/InjectFonts/InjectFonts";
import { Provider } from "react-redux";
import store from "./redux/store";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
          <Router />
          <InjectFonts />
        </BrowserRouter>
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);
