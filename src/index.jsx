import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import Contents from "./contentsApi";

const contents = new Contents(process.env.REACT_APP_TMDB_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App contents={contents} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
