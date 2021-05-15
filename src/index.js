import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeProvider from "./components/Theme/ThemeContext";
import "./styles/global.css";
import "./styles/style-vars.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
