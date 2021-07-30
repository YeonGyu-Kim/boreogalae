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
import KidsPopular from "./components/kids/kids_popular";
import KidsLatest from "./components/kids/kids_latest";
import MovieActionAdventure from "./components/genre/movie/action_adventure";
import MovieAnimation from "./components/genre/movie/animation";
import MovieComedy from "./components/genre/movie/comedy";
import MovieCrimeThriller from "./components/genre/movie/crime_thriller";
import MovieDocumentary from "./components/genre/movie/documentary";
import MovieDrama from "./components/genre/movie/drama";
import MovieSfFantasy from "./components/genre/movie/sf_fantasy";
import MovieHistory from "./components/genre/movie/history";
import MovieMusic from "./components/genre/movie/music";
import MovieMystery from "./components/genre/movie/mystery";
import MovieRomance from "./components/genre/movie/romance";
import MovieWar from "./components/genre/movie/war";
import MovieWestern from "./components/genre/movie/western";

function App({ location, match, contents }) {
  const [popularMovie, setPopularMovie] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [popularKids, setPopularKids] = useState([]);
  const [kidsLatest, setKidsLatest] = useState([]);

  // movie genre
  const [moviePopActionAdventure, setMoviePopActionAdventure] = useState([]);
  const [moviePopAnimation, setMoviePopAnimation] = useState([]);
  const [moviePopComedy, setMoviePopComedy] = useState([]);
  const [moviePopCrimeThriller, setMoviePopCrimeThriller] = useState([]);
  const [moviePopDocumentary, setMoviePopDocumentary] = useState([]);
  const [moviePopDrama, setMoviePopDrama] = useState([]);
  const [moviePopFamily, setMoviePopFamily] = useState([]);
  const [moviePopSfFantasy, setMoviePopSfFantasy] = useState([]);
  const [moviePopHistory, setMoviePopHistory] = useState([]);
  const [moviePopHorror, setMoviePopHorror] = useState([]);
  const [moviePopMusic, setMoviePopMusic] = useState([]);
  const [moviePopMystery, setMoviePopMystery] = useState([]);
  const [moviePopRomance, setMoviePopRomance] = useState([]);
  const [moviePopuWar, setMoviePopWar] = useState([]);
  const [moviePopWestern, setMoviePopwestern] = useState([]);
  const [tvKrReality, setTvKrReality] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  const movieGenre = location.pathname.includes("/movie-genre");
  const tvGenre = location.pathname.includes("/tv-genre");
  const movieTvKids =
    location.pathname === "/movie" ||
    location.pathname === "/tv" ||
    location.pathname === "/kids";

  const search = (q) => {
    setSearchResult(q);
  };

  useEffect(() => {
    contents.moviePopular().then((content) => setPopularMovie(content));
  }, [contents]);

  useEffect(() => {
    contents.tvPopular().then((content) => setPopularTV(content));
  }, [contents]);

  useEffect(() => {
    contents.tvKidsPopular().then((content) => setPopularKids(content));
  }, [contents]);

  useEffect(() => {
    contents.tvKidsLatest().then((content) => setKidsLatest(content));
  }, [contents]);

  useEffect(() => {
    contents
      .moviePopularActionAdventure()
      .then((content) => setMoviePopActionAdventure(content));
  }, [contents]);

  useEffect(() => {
    contents
      .moviePopularAnimation()
      .then((content) => setMoviePopAnimation(content));
  }, [contents]);

  useEffect(() => {
    contents.moviePopularComedy().then((content) => setMoviePopComedy(content));
  }, [contents]);

  useEffect(() => {
    contents
      .moviePopularCrimeThriller()
      .then((content) => setMoviePopCrimeThriller(content));
  }, [contents]);

  useEffect(() => {
    contents
      .moviePopularDocumentary()
      .then((content) => setMoviePopDocumentary(content));
  }, [contents]);

  useEffect(() => {
    contents.moviePopularDrama().then((content) => setMoviePopDrama(content));
  }, [contents]);

  useEffect(() => {
    contents.moviePopularFamily().then((content) => setMoviePopFamily(content));
  }, [contents]);

  useEffect(() => {
    contents
      .moviePopularSfFantasy()
      .then((content) => setMoviePopSfFantasy(content));
  }, [contents]);

  useEffect(() => {
    contents
      .moviePopularHistory()
      .then((content) => setMoviePopHistory(content));
  }, [contents]);

  useEffect(() => {
    contents.moviePopularHorror().then((content) => setMoviePopHorror(content));
  }, [contents]);

  useEffect(() => {
    contents.moviePopularMusic().then((content) => setMoviePopMusic(content));
  }, [contents]);

  useEffect(() => {
    contents
      .moviePopularMystery()
      .then((content) => setMoviePopMystery(content));
  }, [contents]);

  useEffect(() => {
    contents
      .moviePopularRomance()
      .then((content) => setMoviePopRomance(content));
  }, [contents]);

  useEffect(() => {
    contents.moviePopularWar().then((content) => setMoviePopWar(content));
  }, [contents]);

  useEffect(() => {
    contents
      .moviePopularWestern()
      .then((content) => setMoviePopwestern(content));
  }, [contents]);

  useEffect(() => {
    contents.tvKoreanReality().then((content) => setTvKrReality(content));
  }, [contents]);

  console.log(tvKrReality);
  return (
    <div className={styles.app}>
      {location.pathname === "/" ? (
        <BeginningScreen />
      ) : (
        <Header onSearch={search} />
      )}
      {movieGenre || tvGenre || movieTvKids ? <Genre /> : null}
      {location.pathname === "/detail" && <ContentsDetail />}
      <Switch>
        <Route path='/movie' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기 영화</div>
              <MoviePopular moviesPopular={popularMovie} />
            </section>
          </main>
        </Route>
        <Route path='/tv' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기 TV프로그램</div>
              <TvPopular tvPopular={popularTV} />
            </section>
          </main>
        </Route>
        <Route path='/kids' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기 키즈</div>
              <KidsPopular popularKids={popularKids} />
              <div>최근 키즈</div>
              <KidsLatest kidsLatest={kidsLatest} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/action-adventure' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieActionAdventure genre={moviePopActionAdventure} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/animation' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieAnimation genre={moviePopAnimation} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/comedy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieComedy genre={moviePopComedy} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/crime-thriller' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieCrimeThriller genre={moviePopCrimeThriller} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/documentary' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieDocumentary genre={moviePopDocumentary} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/drama' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieDrama genre={moviePopDrama} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/family' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieDrama genre={moviePopDrama} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/sf-fantasy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieSfFantasy genre={moviePopSfFantasy} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/history' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieHistory genre={moviePopHistory} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/music' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieMusic genre={moviePopMusic} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/music' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieMusic genre={moviePopMusic} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/mystery' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieMystery genre={moviePopMystery} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/romance' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieRomance genre={moviePopRomance} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/war' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieWar genre={moviePopuWar} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/western' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieWestern genre={moviePopWestern} />
            </section>
          </main>
        </Route>
        <Route path='/movie/:id'>
          <ContentsDetail contents={contents} />
        </Route>
        <Route path='/tv/:id'>
          <ContentsDetail contents={contents} />
        </Route>
        <Route path='/kids/:id'>
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
