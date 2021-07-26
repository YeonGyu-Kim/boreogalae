import "./app.css";
import styles from "./app.module.css";
import BeginningScreen from "./components/beginning/beginning_screen";
import { Route, Switch, withRouter } from "react-router-dom";
import GlobalStyle from "./global_style";
import Header from "./components/header/header";
import ContentsDetail from "./components/detail/contents_detail";
import Genre from "./components/genre/genre";
import { useState, useEffect } from "react";
import MoviePopular from "./components/movie/movie_popular";
import TvPopular from "./components/tv/tv_popular";
import SearchScreen from "./components/search/search_screen";
import { useCallback } from "react";

function App({ location, match, contents }) {
  const [popularMovie, setPopularMovie] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  const search = (q) => {
    setSearchResult(q);
  };

  useEffect(() => {
    contents.moviePopular().then((content) => setPopularMovie(content));
  }, [contents]);

  useEffect(() => {
    contents.tvPopular().then((content) => setPopularTV(content));
  }, [contents]);

  return (
    <div className={styles.app}>
      {location.pathname === "/" ? (
        <BeginningScreen />
      ) : (
        <Header onSearch={search} />
      )}
      {location.pathname === "/detail" && <ContentsDetail />}
      <Switch>
        <Route path='/movie' exact>
          <main className={styles.main}>
            <Genre />
            <section className='contentContainer'>
              <div>인기 영화</div>
              <MoviePopular moviesPopular={popularMovie} />
            </section>
          </main>
        </Route>
        <Route path='/tv' exact>
          <main className={styles.main}>
            <Genre />
            <section className='contentContainer'>
              <div>인기 TV프로그램</div>
              <TvPopular tvPopular={popularTV} />
            </section>
          </main>
        </Route>
        <Route path='/movie/:id'>
          <ContentsDetail contents={contents} />
        </Route>
        <Route path='/tv/:id'>
          <ContentsDetail contents={contents} />
        </Route>
        <Route path='/search_query=:result'>
          <SearchScreen onSearch={searchResult} contents={contents} />
        </Route>
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default withRouter(App);
