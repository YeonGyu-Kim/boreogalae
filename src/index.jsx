import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import Contents from "./contentsApi/contentsApi";
import ContentsMovieGenre from "./contentsApi/movieGenreApi";
import ContentsTvGenre from "./contentsApi/tvGenreApi";

const contents = new Contents(process.env.REACT_APP_TMDB_API_KEY);
const contentsMovieGenre = new ContentsMovieGenre();
const contentsTvGenre = new ContentsTvGenre();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        contents={contents}
        contentsMovieGenre={contentsMovieGenre}
        contentsTvGenre={contentsTvGenre}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
