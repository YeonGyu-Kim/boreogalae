import BeginningScreen from "./components/beginning/beginning_screen";
import { Route, Switch, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import "./app.css";
import styles from "./app.module.css";
import GlobalStyle from "./global_style";
import Header from "./components/header/header";
import ContentsDetail from "./components/detail/contents_detail";
import Genre from "./components/genre/genre";
import MovieScreen from "./components/movie/movie_screen";
import TvScreen from "./components/tv/tv_screen";
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
import TVMystery from "./components/genre/tv/mystery";
import TVSfFantasy from "./components/genre/tv/sf_fantasy";
import TVReality from "./components/genre/tv/reality";
import MovieFamily from "./components/genre/movie/family";
import MovieHorror from "./components/genre/movie/horror";
import CharacterDetail from "./components/detail/character_detail";
import ChatScreen from "./components/chat/chat_screen";
import NoticeScreen from "./components/notice/notice_screen";
import KidsKr from "./components/kids/kids_kr";
import KommunicateChat from "./components/chatbot/chatbot";

function App({
  location,
  match,
  contents,
  contentsMovie,
  contentsTV,
  commentService,
  chatService,
}) {
  // 영화
  const [popularMovie, setPopularMovie] = useState([]);
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const [upComingMovie, setUpComingMovie] = useState([]);
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const [movieLatest, setMovieLatest] = useState([]);
  const [classicMovie, setClassicMovie] = useState([]);

  // TV & 키즈
  const [popularTV, setPopularTV] = useState([]);
  const [popularKids, setPopularKids] = useState([]);
  const [krPopularTV, setKrPopularTv] = useState([]);
  const [topRatedTV, setTopRatedTV] = useState([]);
  const [kidsLatest, setKidsLatest] = useState([]);
  const [kidsKr, setKidsKr] = useState([]);
  const [tvKrLatest, setTvKrLatest] = useState([]);

  // 영화 인기 장르
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
  const [moviePopWar, setMoviePopWar] = useState([]);
  const [moviePopWestern, setMoviePopwestern] = useState([]);

  // 영화 국가 장르
  const [movieKrActionAdventure, setMovieKrActionAdventure] = useState([]);
  const [movieKrAnimation, setMovieKrAnimation] = useState([]);
  const [movieKrComedy, setMovieKrComedy] = useState([]);
  const [movieKrCrimeThriller, setMovieKrCrimeThriller] = useState([]);
  const [movieKrDocumentary, setMovieKrDocumentary] = useState([]);
  const [movieKrDrama, setMovieKrDrama] = useState([]);
  const [movieKrFamily, setMovieKrFamily] = useState([]);
  const [movieKrSfFantasy, setMovieKrSfFantasy] = useState([]);
  const [movieKrHistory, setMovieKrHistory] = useState([]);
  const [movieKrHorror, setMovieKrHorror] = useState([]);
  const [movieKrMusic, setMovieKrMusic] = useState([]);
  const [movieKrMystery, setMovieKrMystery] = useState([]);
  const [movieKrRomance, setMovieKrRomance] = useState([]);
  const [movieKrWar, setMovieKrWar] = useState([]);

  // TV 인기 장르
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

  // TV 국가 장르
  const [tvKrActionAdventure, setTvKrActionAdventure] = useState([]);
  const [tvKrAnimation, setTvKrAnimation] = useState([]);
  const [tvJpAnimation, setTvJpAnimation] = useState([]);
  const [tvKrComedy, setTvKrComedy] = useState([]);
  const [tvKrCrime, setTvKrCrime] = useState([]);
  const [tvKrDocumentary, setTvKrDocumentary] = useState([]);
  const [tvKrDrama, setTvKrDrama] = useState([]);
  const [tvKrFamily, setTvKrFamily] = useState([]);
  const [tvKrMystery, setTvKrMystery] = useState([]);
  const [tvKrSfFantasy, setTvKrSfFantasy] = useState([]);
  const [tvKrWar, setTvKrWar] = useState([]);

  // 경로
  const movieGenre = location.pathname.includes("/movie-genre");
  const tvGenre = location.pathname.includes("/tv-genre");
  const movieTvKids =
    location.pathname === "/movie" ||
    location.pathname === "/tv" ||
    location.pathname === "/kids";

  // 인기 영화
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

  useEffect(() => {
    contentsMovie.movieLatest().then((content) => setMovieLatest(content));
  }, [contentsMovie]);

  // 국가 영화 장르
  useEffect(() => {
    contentsMovie
      .movieKrActionAdventure()
      .then((content) => setMovieKrActionAdventure(content));
  }, [contentsMovie]);
  useEffect(() => {
    contentsMovie
      .movieKrAnimation()
      .then((content) => setMovieKrAnimation(content));
  }, [contentsMovie]);
  useEffect(() => {
    contentsMovie.movieKrComedy().then((content) => setMovieKrComedy(content));
  }, [contentsMovie]);
  useEffect(() => {
    contentsMovie
      .movieKrCrimeThriller()
      .then((content) => setMovieKrCrimeThriller(content));
  }, [contentsMovie]);
  useEffect(() => {
    contentsMovie
      .movieKrDocumentary()
      .then((content) => setMovieKrDocumentary(content));
  }, [contentsMovie]);
  useEffect(() => {
    contentsMovie.movieKrDrama().then((content) => setMovieKrDrama(content));
  }, [contentsMovie]);
  useEffect(() => {
    contentsMovie.movieKrFamily().then((content) => setMovieKrFamily(content));
  }, [contentsMovie]);
  useEffect(() => {
    contentsMovie
      .movieKrSfFantasy()
      .then((content) => setMovieKrSfFantasy(content));
  }, [contentsMovie]);
  useEffect(() => {
    contentsMovie
      .movieKrHistory()
      .then((content) => setMovieKrHistory(content));
  }, [contentsMovie]);
  useEffect(() => {
    contentsMovie.movieKrHorror().then((content) => setMovieKrHorror(content));
  }, [contentsMovie]);
  useEffect(() => {
    contentsMovie.movieKrMusic().then((content) => setMovieKrMusic(content));
  }, [contentsMovie]);
  useEffect(() => {
    contentsMovie
      .movieKrMystery()
      .then((content) => setMovieKrMystery(content));
  }, [contentsMovie]);
  useEffect(() => {
    contentsMovie
      .movieKrRomance()
      .then((content) => setMovieKrRomance(content));
  }, [contentsMovie]);
  useEffect(() => {
    contentsMovie.movieKrWar().then((content) => setMovieKrWar(content));
  }, [contentsMovie]);

  //인기 영화 장르
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

  // 인기 TV
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

  useEffect(() => {
    contentsTV.tvKidsKr().then((content) => setKidsKr(content));
  }, [contentsTV]);

  // 인기 TV 장르
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

  // 국가 TV 장르
  useEffect(() => {
    contentsTV
      .tvKrActionAdventure()
      .then((content) => setTvKrActionAdventure(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvKrAnimation().then((content) => setTvKrAnimation(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvJpAnimation().then((content) => setTvJpAnimation(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvKrComedy().then((content) => setTvKrComedy(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvKrCrime().then((content) => setTvKrCrime(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvKrDocumentary().then((content) => setTvKrDocumentary(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvKrDrama().then((content) => setTvKrDrama(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvKrFamily().then((content) => setTvKrFamily(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvKrMystery().then((content) => setTvKrMystery(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvKrSfFantasy().then((content) => setTvKrSfFantasy(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvKrWar().then((content) => setTvKrWar(content));
  }, [contentsTV]);

  useEffect(() => {
    contentsTV.tvKrLatest().then((content) => setTvKrLatest(content));
  }, [contentsTV]);

  return (
    <div className={styles.app}>
      {location.pathname === "/" ? <BeginningScreen /> : <Header />}
      {movieGenre || tvGenre || movieTvKids ? <Genre /> : null}
      {location.pathname === "/detail" && <ContentsDetail />}
      <KommunicateChat />
      <Switch>
        <Route path='/movie' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieScreen
                moviesPopular={popularMovie}
                nowPlaying={nowPlayingMovie}
                topRated={topRatedMovie}
                upComing={upComingMovie}
                latest={movieLatest}
                classic={classicMovie}
              />
            </section>
          </main>
        </Route>
        <Route path='/tv' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TvScreen
                tvPopular={popularTV}
                tvKrPopukar={krPopularTV}
                tvTopRated={topRatedTV}
                tvKrLatest={tvKrLatest}
              />
            </section>
          </main>
        </Route>
        <Route path='/kids' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <KidsPopular popularKids={popularKids} />
              <KidsLatest kidsLatest={kidsLatest} />
              <KidsKr kidsKr={kidsKr} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/action-adventure' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieActionAdventure
                popular={moviePopActionAdventure}
                kr={movieKrActionAdventure}
              />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/animation' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieAnimation
                popular={moviePopAnimation}
                kr={movieKrAnimation}
              />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/comedy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieComedy popular={moviePopComedy} kr={movieKrComedy} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/crime-thriller' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieCrimeThriller
                popular={moviePopCrimeThriller}
                kr={movieKrCrimeThriller}
              />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/documentary' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieDocumentary
                popular={moviePopDocumentary}
                kr={movieKrDocumentary}
              />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/drama' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieDrama popular={moviePopDrama} kr={movieKrDrama} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/family' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieFamily popular={moviePopFamily} kr={movieKrFamily} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/sf-fantasy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieSfFantasy
                popular={moviePopSfFantasy}
                kr={movieKrSfFantasy}
              />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/history' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieHistory popular={moviePopHistory} kr={movieKrHistory} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/music' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieMusic popular={moviePopMusic} kr={movieKrMusic} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/horror' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieHorror popular={moviePopHorror} kr={movieKrHorror} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/mystery' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieMystery popular={moviePopMystery} kr={movieKrMystery} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/romance' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieRomance popular={moviePopRomance} kr={movieKrRomance} />
            </section>
          </main>
        </Route>
        <Route path='/movie-genre/war' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <MovieWar popular={moviePopWar} kr={movieKrWar} />
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
              <TVActionAdventure
                popular={tvPopActionAdventure}
                kr={tvKrActionAdventure}
              />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/animation' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVAnimation
                popular={tvPopAnimation}
                kr={tvKrAnimation}
                jp={tvJpAnimation}
              />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/comedy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVComedy popular={tvPopComedy} kr={tvKrComedy} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/crime' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVCrime popular={tvPopCrime} kr={tvKrCrime} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/documentary' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVDocumentary popular={tvPopDocumentary} kr={tvKrDocumentary} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/drama' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVDrama popular={tvPopDrama} kr={tvKrDrama} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/family' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVFamily popular={tvPopFamily} kr={tvKrFamily} />
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
              <TVMystery popular={tvPopMystery} kr={tvKrMystery} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/sf-fantasy' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVSfFantasy popular={tvPopSfFantasy} kr={tvKrSfFantasy} />
            </section>
          </main>
        </Route>
        <Route path='/tv-genre/war' exact>
          <main className={styles.main}>
            <section className='contentContainer'>
              <TVWar popular={tvPopWar} kr={tvKrWar} />
            </section>
          </main>
        </Route>
        <Route path='/movie/:id' exact>
          <ContentsDetail contents={contents} commentService={commentService} />
        </Route>
        <Route path='/tv/:id' exact>
          <ContentsDetail contents={contents} commentService={commentService} />
        </Route>
        <Route path='/kids/:id' exact>
          <ContentsDetail contents={contents} commentService={commentService} />
        </Route>
        <Route path='/person/:id' exact>
          <CharacterDetail contents={contents} />
        </Route>
        <Route path='/result/search_query=:result' exact>
          <SearchScreen contents={contents} />
        </Route>
        <Route path='/notice' exact>
          <NoticeScreen />
        </Route>
        <Route path='/chat' exact>
          <ChatScreen chatService={chatService} />
        </Route>
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default withRouter(App);
