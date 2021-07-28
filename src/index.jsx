import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import Contents from "./contentsApi";

const contents = new Contents();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App contents={contents} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
