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
import TVActionAdventure from "./components/genre/tv/action_adventure";
import TVAnimation from "./components/genre/tv/animation";
import TVComedy from "./components/genre/tv/comedy";
import TVCrime from "./components/genre/tv/crime";
import TVDocumentary from "./components/genre/tv/documentary";
import TVDrama from "./components/genre/tv/drama";
import TVFamily from "./components/genre/tv/family";
import TVWar from "./components/genre/tv/war";
import TVWestern from "./components/genre/tv/western";
import TVMystery from "./components/genre/tv/mystery";
import TVSfFantasy from "./components/genre/tv/sf_fantasy";
import TVReality from "./components/genre/tv/reality";
import MovieFamily from "./components/genre/movie/family";
import MovieHorror from "./components/genre/movie/horror";
import MovieNowPlaying from "./components/movie/movie_now_playing";
import MovieTopRated from "./components/movie/movie_top_rated";
import MovieUpComing from "./components/movie/movie_upcoming";
import MovieClassic from "./components/movie/movie_classic";
import TvKrPoular from "./components/tv/tv_kr_poular";
import TvTopRated from "./components/tv/tv_top_rated";

function App({
  location,
  match,
  contents,
  contentsMovieGenre,
  contentsTvGenre,
}) {
  // 영화
  const [popularMovie, setPopularMovie] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [upComingMovie, setUpComingMovie] = useState([]);
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const [classicMovie, setClassicMovie] = useState([]);

  // TV & 키즈
  const [popularTV, setPopularTV] = useState([]);
  const [popularKids, setPopularKids] = useState([]);
  const [krPopularTV, setKrPopularTv] = useState([]);
  const [topRatedTV, setTopRatedTV] = useState([]);
  const [kidsLatest, setKidsLatest] = useState([]);

  // 영화 장르
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

  // TV 장르
  const [tvPopActionAdventure, setTvPopActionAdventure] = useState([]);
  const [tvPopAnimation, setTvPopAnimation] = useState([]);
  const [tvPopComedy, setTvPopComedy] = useState([]);
  const [tvPopCrime, setTvPopCrime] = useState([]);
  const [tvPopDocumentary, setTvPopDocumentary] = useState([]);
  const [tvPopDrama, setTvPopDrama] = useState([]);
  const [tvPopFamily, setTvPopFamily] = useState([]);
  const [tvPopMystery, setTvPopMystery] = useState([]);
  const [tvKoreanShow, setTvKoreanShow] = useState([]);
  const [tvEnShow, setTvEnShow] = useState([]);
  const [tvPopSfFantasy, setTvPopSfFantasy] = useState([]);
  const [tvPopWar, setTvPopWar] = useState([]);
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
  // 영화
  useEffect(() => {
    contents.moviePopular().then((content) => setPopularMovie(content));
  }, [contents]);

  useEffect(() => {
    contents.movieTopRated().then((content) => setTopRatedMovie(content));
  }, [contents]);

  useEffect(() => {
    contents.movieUpComing().then((content) => setUpComingMovie(content));
  }, [contents]);

  useEffect(() => {
    contents.movieNowPlaying().then((content) => setNowPlayingMovie(content));
  }, [contents]);

  useEffect(() => {
    contentsMovieGenre
      .movieClassic()
      .then((content) => setClassicMovie(content));
  }, [contentsMovieGenre]);

  // TV
  useEffect(() => {
    contents.tvPopular().then((content) => setPopularTV(content));
  }, [contents]);

  useEffect(() => {
    contents.tvTopRated().then((content) => setTopRatedTV(content));
  }, [contents]);

  useEffect(() => {
    contentsTvGenre.tvKrPopular().then((content) => setKrPopularTv(content));
  }, [contentsTvGenre]);

  // 키즈
  useEffect(() => {
    contentsTvGenre.tvKidsPopular().then((content) => setPopularKids(content));
  }, [contentsTvGenre]);

  useEffect(() => {
    contentsTvGenre.tvKidsLatest().then((content) => setKidsLatest(content));
  }, [contentsTvGenre]);

  //영화 장르
  useEffect(() => {
    contentsMovieGenre
      .moviePopularActionAdventure()
      .then((content) => setMoviePopActionAdventure(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularAnimation()
      .then((content) => setMoviePopAnimation(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularComedy()
      .then((content) => setMoviePopComedy(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularCrimeThriller()
      .then((content) => setMoviePopCrimeThriller(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularDocumentary()
      .then((content) => setMoviePopDocumentary(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularDrama()
      .then((content) => setMoviePopDrama(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularFamily()
      .then((content) => setMoviePopFamily(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularSfFantasy()
      .then((content) => setMoviePopSfFantasy(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularHistory()
      .then((content) => setMoviePopHistory(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularHorror()
      .then((content) => setMoviePopHorror(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularMusic()
      .then((content) => setMoviePopMusic(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularMystery()
      .then((content) => setMoviePopMystery(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularRomance()
      .then((content) => setMoviePopRomance(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularWar()
      .then((content) => setMoviePopWar(content));
  }, [contentsMovieGenre]);

  useEffect(() => {
    contentsMovieGenre
      .moviePopularWestern()
      .then((content) => setMoviePopwestern(content));
  }, [contentsMovieGenre]);

  // TV 장르
  useEffect(() => {
    contentsTvGenre
      .tvPopularActionAdventure()
      .then((content) => setTvPopActionAdventure(content));
  }, [contentsTvGenre]);

  useEffect(() => {
    contentsTvGenre
      .tvPopularAnimation()
      .then((content) => setTvPopAnimation(content));
  }, [contentsTvGenre]);

  useEffect(() => {
    contentsTvGenre
      .tvPopularComedy()
      .then((content) => setTvPopComedy(content));
  }, [contentsTvGenre]);

  useEffect(() => {
    contentsTvGenre.tvPopularCrime().then((content) => setTvPopCrime(content));
  }, [contentsTvGenre]);

  useEffect(() => {
    contentsTvGenre
      .tvPopularDocumentary()
      .then((content) => setTvPopDocumentary(content));
  }, [contentsTvGenre]);

  useEffect(() => {
    contentsTvGenre.tvPopularDrama().then((content) => setTvPopDrama(content));
  }, [contentsTvGenre]);

  useEffect(() => {
    contentsTvGenre
      .tvPopularFamily()
      .then((content) => setTvPopFamily(content));
  }, [contentsTvGenre]);

  useEffect(() => {
    contentsTvGenre
      .tvPopularMystery()
      .then((content) => setTvPopMystery(content));
  }, [contentsTvGenre]);

  useEffect(() => {
    contentsTvGenre
      .tvKoreanReality()
      .then((content) => setTvKoreanShow(content));
  }, [contentsTvGenre]);

  useEffect(() => {
    contentsTvGenre.tvEnReality().then((content) => setTvEnShow(content));
  }, [contentsTvGenre]);

  useEffect(() => {
    contentsTvGenre
      .tvPopularSfFantasy()
      .then((content) => setTvPopSfFantasy(content));
  }, [contentsTvGenre]);

  useEffect(() => {
    contentsTvGenre.tvPopularWar().then((content) => setTvPopWar(content));
  }, [contentsTvGenre]);

  useEffect(() => {
    contentsTvGenre.tvPopularWar().then((content) => setTvPopWar(content));
  }, [contentsTvGenre]);

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
              <MoviePopular moviesPopular={popularMovie} />
              <MovieNowPlaying nowPlaying={nowPlayingMovie} />
              <MovieTopRated topRated={topRatedMovie} />
              <MovieUpComing upComing={upComingMovie} />
              <MovieClassic classic={classicMovie} />
            </section>
          </main>
        </Route>
        <Route path='/tv' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TvPopular tvPopular={popularTV} />
              <TvKrPoular tvKrPopukar={krPopularTV} />
              <TvTopRated tvTopRated={topRatedTV} />
            </section>
          </main>
        </Route>
        <Route path='/kids' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <KidsPopular popularKids={popularKids} />
              <KidsLatest kidsLatest={kidsLatest} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/action-adventure' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieActionAdventure popular={moviePopActionAdventure} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/animation' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieAnimation popular={moviePopAnimation} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/comedy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieComedy popular={moviePopComedy} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/crime-thriller' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieCrimeThriller popular={moviePopCrimeThriller} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/documentary' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieDocumentary popular={moviePopDocumentary} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/drama' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieDrama popular={moviePopDrama} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/family' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieFamily popular={moviePopFamily} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/sf-fantasy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieSfFantasy popular={moviePopSfFantasy} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/history' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieHistory popular={moviePopHistory} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/music' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieMusic popular={moviePopMusic} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/horror' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieHorror popular={moviePopHorror} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/mystery' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieMystery popular={moviePopMystery} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/romance' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieRomance popular={moviePopRomance} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/war' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieWar popular={moviePopuWar} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/western' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieWestern popular={moviePopWestern} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/action-adventure' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVActionAdventure popular={tvPopActionAdventure} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/animation' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVAnimation popular={tvPopAnimation} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/comedy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVComedy popular={tvPopComedy} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/crime' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVCrime popular={tvPopCrime} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/documentary' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVDocumentary popular={tvPopDocumentary} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/drama' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVDrama popular={tvPopDrama} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/family' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVFamily popular={tvPopFamily} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/reality' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVReality kr={tvKoreanShow} en={tvEnShow} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/mystery' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVMystery popular={tvPopMystery} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/sf-fantasy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVSfFantasy popular={tvPopSfFantasy} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/war' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVWar popular={tvPopWar} />
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
