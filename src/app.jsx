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

function App({ location, match, contents }) {
  const [popularMovie, setPopularMovie] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [popularKids, setPopularKids] = useState([]);
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
  const [tvPopActionAdventure, setTvPopActionAdventure] = useState([]);

  // TV 장르
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
  const [tvPopWestern, setTvPopWestern] = useState([]);
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
    contents
      .tvPopularActionAdventure()
      .then((content) => setTvPopActionAdventure(content));
  }, [contents]);

  useEffect(() => {
    contents.tvPopularAnimation().then((content) => setTvPopAnimation(content));
  }, [contents]);

  useEffect(() => {
    contents.tvPopularComedy().then((content) => setTvPopComedy(content));
  }, [contents]);

  useEffect(() => {
    contents.tvPopularCrime().then((content) => setTvPopCrime(content));
  }, [contents]);

  useEffect(() => {
    contents
      .tvPopularDocumentary()
      .then((content) => setTvPopDocumentary(content));
  }, [contents]);

  useEffect(() => {
    contents.tvPopularDrama().then((content) => setTvPopDrama(content));
  }, [contents]);

  useEffect(() => {
    contents.tvPopularFamily().then((content) => setTvPopFamily(content));
  }, [contents]);

  useEffect(() => {
    contents.tvPopularMystery().then((content) => setTvPopMystery(content));
  }, [contents]);

  useEffect(() => {
    contents.tvKoreanReality().then((content) => setTvKoreanShow(content));
  }, [contents]);

  useEffect(() => {
    contents.tvEnReality().then((content) => setTvEnShow(content));
  }, [contents]);

  useEffect(() => {
    contents.tvEnReality().then((content) => setTvEnShow(content));
  }, [contents]);

  useEffect(() => {
    contents.tvPopularSfFantasy().then((content) => setTvPopSfFantasy(content));
  }, [contents]);

  useEffect(() => {
    contents.tvPopularWar().then((content) => setTvPopWar(content));
  }, [contents]);

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
              <MovieActionAdventure popular={moviePopActionAdventure} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/animation' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieAnimation popular={moviePopAnimation} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/comedy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieComedy popular={moviePopComedy} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/crime-thriller' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieCrimeThriller popular={moviePopCrimeThriller} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/documentary' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieDocumentary popular={moviePopDocumentary} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/drama' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieDrama popular={moviePopDrama} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/family' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieDrama popular={moviePopDrama} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/sf-fantasy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieSfFantasy popular={moviePopSfFantasy} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/history' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieHistory popular={moviePopHistory} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/music' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieMusic popular={moviePopMusic} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/music' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieMusic popular={moviePopMusic} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/mystery' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieMystery popular={moviePopMystery} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/romance' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieRomance popular={moviePopRomance} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/war' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieWar popular={moviePopuWar} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/western' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <MovieWestern popular={moviePopWestern} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/action-adventure' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <TVActionAdventure popular={tvPopActionAdventure} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/animation' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <TVAnimation popular={tvPopAnimation} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/comedy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <TVComedy popular={tvPopComedy} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/crime' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <TVCrime popular={tvPopCrime} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/documentary' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <TVDocumentary popular={tvPopDocumentary} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/drama' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <TVDrama popular={tvPopDrama} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/family' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
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
              <div>인기</div>
              <TVMystery popular={tvPopMystery} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/sf-fantasy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <TVSfFantasy popular={tvPopSfFantasy} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/war' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <TVWar popular={tvPopWar} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/western' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <div>인기</div>
              <TVWestern popular={tvPopWestern} />
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
