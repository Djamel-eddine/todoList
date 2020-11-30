import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";
import { DataProvider } from "./context/context";

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById("root")
);
