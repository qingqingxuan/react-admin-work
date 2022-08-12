import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import React from "react";

import useMock from "../mock";

useMock();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
