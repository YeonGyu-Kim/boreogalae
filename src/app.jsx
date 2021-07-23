import "./app.css";
import styles from "./app.module.css";
import BeginningScreen from "./components/beginning/beginning_screen";
import { RouteComponentProps } from "react-router";
import { Route, Switch, withRouter } from "react-router-dom";
import GlobalStyle from "./global_style";
import Header from "./components/header/header";
import ContentsDetail from "./components/detail/contents_detail";
import Genre from "./components/genre/genre";
import { useState, useEffect } from "react";
import MoviePopular from "./components/movie/movie_popular";
import TvPopular from "./components/tv/tv_popular";

function App({ location, match, contents }) {
  const [popularMovie, setPopularMovie] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [movieID, setMovieID] = useState();
  const [movieDetail, setMovieDetail] = useState([]);

  const getMovieID = (contentsID) => {
    setMovieID(contentsID);
  };

  useEffect(() => {
    contents.moviePopular().then((content) => setPopularMovie(content));
  }, [contents]);

  useEffect(() => {
    contents.tvPopular().then((content) => setPopularTV(content));
  }, [contents]);

  return (
    <div className={styles.app}>
      {location.pathname === "/" ? <BeginningScreen /> : <Header />}
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
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default withRouter(App);
