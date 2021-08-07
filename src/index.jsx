import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import Contents from "./contentsApi/contentsApi";
import ContentsMovie from "./contentsApi/movieApi";
import ContentsTV from "./contentsApi/tvApi";

const contents = new Contents(process.env.REACT_APP_TMDB_API_KEY);
const contentsMovie = new ContentsMovie();
const contentsTV = new ContentsTV();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        contents={contents}
        contentsMovie={contentsMovie}
        contentsTV={contentsTV}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
