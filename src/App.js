import React from "react";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  const { currentColorConfig } = useSelector((state) => state.theme);

  return (
    <div className="App">
      <Header />
      <GlobalStyle colorConfig={currentColorConfig} />
    </div>
  );
}

export default App;
