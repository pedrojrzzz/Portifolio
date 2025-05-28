import React from "react";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";

import "./App.css";

function App() {
  const { currentColorConfig } = useSelector((state) => state.theme);

  return (
    <div className="App">
      <GlobalStyle colorConfig={currentColorConfig} />
    </div>
  );
}

export default App;
