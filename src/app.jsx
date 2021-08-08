import BeginningScreen from "./components/beginning/beginning_screen";
import { useCallback } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./app.css";
import styles from "./app.module.css";
import GlobalStyle from "./global_style";
import Header from "./components/header/header";
import ContentsDetail from "./components/detail/contents_detail";
import Genre from "./components/genre/genre";
import { useState, useEffect } from "react";
import MoviePopular from "./components/movie/movie_popular";
import TvPopular from "./components/tv/tv_popular";
import SearchScreen from "./components/search/search_screen";
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
import CharacterDetail from "./components/detail/character_detail";

function App({ location, match, contents, contentsMovie, contentsTV }) {
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

  const movieGenre = location.pathname.includes("/movie-genre");
  const tvGenre = location.pathname.includes("/tv-genre");
  const movieTvKids =
    location.pathname === "/movie" ||
    location.pathname === "/tv" ||
    location.pathname === "/kids";

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
    contentsMovie.movieClassic().then((content) => setClassicMovie(content));
  }, [contentsMovie]);

  // TV
  useEffect(() => {
    contents.tvPopular().then((content) => setPopularTV(content));
  }, [contents]);

  useEffect(() => {
    contents.tvTopRated().then((content) => setTopRatedTV(content));
  }, [contents]);

  useEffect(() => {
    contentsTV.tvKrPopular().then((content) => setKrPopularTv(content));
  }, [contentsTV]);

  // 키즈
  useEffect(() => {
    contentsTV.tvKidsPopular().then((content) => setPopularKids(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvKidsLatest().then((content) => setKidsLatest(content));
  }, [contentsTV]);

  //영화 장르
  useEffect(() => {
    contentsMovie
      .moviePopularActionAdventure()
      .then((content) => setMoviePopActionAdventure(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie
      .moviePopularAnimation()
      .then((content) => setMoviePopAnimation(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie
      .moviePopularComedy()
      .then((content) => setMoviePopComedy(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie
      .moviePopularCrimeThriller()
      .then((content) => setMoviePopCrimeThriller(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie
      .moviePopularDocumentary()
      .then((content) => setMoviePopDocumentary(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie
      .moviePopularDrama()
      .then((content) => setMoviePopDrama(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie
      .moviePopularFamily()
      .then((content) => setMoviePopFamily(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie
      .moviePopularSfFantasy()
      .then((content) => setMoviePopSfFantasy(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie
      .moviePopularHistory()
      .then((content) => setMoviePopHistory(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie
      .moviePopularHorror()
      .then((content) => setMoviePopHorror(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie
      .moviePopularMusic()
      .then((content) => setMoviePopMusic(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie
      .moviePopularMystery()
      .then((content) => setMoviePopMystery(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie
      .moviePopularRomance()
      .then((content) => setMoviePopRomance(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie.moviePopularWar().then((content) => setMoviePopWar(content));
  }, [contentsMovie]);

  useEffect(() => {
    contentsMovie
      .moviePopularWestern()
      .then((content) => setMoviePopwestern(content));
  }, [contentsMovie]);

  // TV 장르
  useEffect(() => {
    contentsTV
      .tvPopularActionAdventure()
      .then((content) => setTvPopActionAdventure(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV
      .tvPopularAnimation()
      .then((content) => setTvPopAnimation(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvPopularComedy().then((content) => setTvPopComedy(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvPopularCrime().then((content) => setTvPopCrime(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV
      .tvPopularDocumentary()
      .then((content) => setTvPopDocumentary(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvPopularDrama().then((content) => setTvPopDrama(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvPopularFamily().then((content) => setTvPopFamily(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvPopularMystery().then((content) => setTvPopMystery(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvKoreanReality().then((content) => setTvKoreanShow(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvEnReality().then((content) => setTvEnShow(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV
      .tvPopularSfFantasy()
      .then((content) => setTvPopSfFantasy(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvPopularWar().then((content) => setTvPopWar(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvPopularWar().then((content) => setTvPopWar(content));
  }, [contentsTV]);

  return (
    <div className={styles.app}>
      {location.pathname === "/" ? <BeginningScreen /> : <Header />}
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
        <Route path='/movie/:id' exact>
          <ContentsDetail contents={contents} />
        </Route>
        <Route path='/tv/:id' exact>
          <ContentsDetail contents={contents} />
        </Route>
        <Route path='/kids/:id' exact>
          <ContentsDetail contents={contents} />
        </Route>
        <Route path='/:id' exact>
          <CharacterDetail contents={contents} />
        </Route>
        <Route path='/result/search_query=:result'>
          <SearchScreen contents={contents} />
        </Route>
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default withRouter(App);
