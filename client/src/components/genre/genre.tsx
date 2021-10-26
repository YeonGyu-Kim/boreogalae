import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import "./genre.css";
import styles from "./genre.module.css";

const Genre = ({ location }: RouteComponentProps) => {
  const movieGenre = location.pathname.includes("/movie-genre");
  const tvGenre = location.pathname.includes("/tv-genre");

  const checkedActionAdventure =
    location.pathname.includes("/action-adventure");
  const checkedAnimation = location.pathname.includes("/animation");
  const checkedComedy = location.pathname.includes("/comedy");
  const checkedCrimThriller = location.pathname.includes("/crime");
  const checkedDocumentary = location.pathname.includes("/documentary");
  const checkedDrama = location.pathname.includes("/drama");
  const checkedFamily = location.pathname.includes("/family");
  const checkedSfFantasy = location.pathname.includes("/sf-fantasy");
  const checkedHistory = location.pathname.includes("/history");
  const checkedHorror = location.pathname.includes("/horror");
  const checkedMusic = location.pathname.includes("/music");
  const checkedMystery = location.pathname.includes("/mystery");
  const checkedRomance = location.pathname.includes("/romance");
  const checkedWar = location.pathname.includes("/war");
  const checkedWestern = location.pathname.includes("/western");
  const checkedReality = location.pathname.includes("/reality");

  const showGenre = () => {
    const showGenre = document.querySelector(".genre");
    showGenre?.classList.toggle("show");
    const genreColor = document.querySelector(".genre-btn");
    genreColor?.classList.toggle("show");
    const showMovie = document.querySelector(".contentContainer");
    showMovie?.classList.toggle("show");
  };

  return (
    <section className='genre-container'>
      {location.pathname === "/movie" || movieGenre ? (
        <div className='genre-bar'>
          <span className='genre-title'>영화</span>
          <div className='genre-btn' onClick={showGenre}>
            장르
          </div>
        </div>
      ) : location.pathname === "/tv" || tvGenre ? (
        <div className='genre-bar'>
          <span className='genre-title'>TV프로그램</span>
          <div className='genre-btn' onClick={showGenre}>
            장르
          </div>
        </div>
      ) : location.pathname === "/kids" ? (
        <div className='genre-bar'>
          <span className='genre-title'>키즈</span>
        </div>
      ) : null}
      {(location.pathname === "/movie" || movieGenre) && (
        <ul className='genre'>
          <Link to='/movie-genre/action-adventure'>
            <li
              className={`${styles.genre_detail} ${
                checkedActionAdventure && styles.checked
              }`}
            >
              액션/모험
            </li>
          </Link>
          <Link to='/movie-genre/animation'>
            <li
              className={`${styles.genre_detail} ${
                checkedAnimation && styles.checked
              }`}
            >
              애니메이션
            </li>
          </Link>
          <Link to='/movie-genre/comedy'>
            <li
              className={`${styles.genre_detail} ${
                checkedComedy && styles.checked
              }`}
            >
              코미디
            </li>
          </Link>
          <Link to='/movie-genre/crime-thriller'>
            <li
              className={`${styles.genre_detail} ${
                checkedCrimThriller && styles.checked
              }`}
            >
              범죄/스릴러
            </li>
          </Link>
          <Link to='/movie-genre/documentary'>
            <li
              className={`${styles.genre_detail} ${
                checkedDocumentary && styles.checked
              }`}
            >
              다큐멘터리
            </li>
          </Link>
          <Link to='/movie-genre/drama'>
            <li
              className={`${styles.genre_detail} ${
                checkedDrama && styles.checked
              }`}
            >
              드라마
            </li>
          </Link>
          <Link to='/movie-genre/family'>
            <li
              className={`${styles.genre_detail} ${
                checkedFamily && styles.checked
              }`}
            >
              가족
            </li>
          </Link>
          <Link to='/movie-genre/sf-fantasy'>
            <li
              className={`${styles.genre_detail} ${
                checkedSfFantasy && styles.checked
              }`}
            >
              SF/판타지
            </li>
          </Link>
          <Link to='/movie-genre/history'>
            <li
              className={`${styles.genre_detail} ${
                checkedHistory && styles.checked
              }`}
            >
              역사
            </li>
          </Link>
          <Link to='/movie-genre/horror'>
            <li
              className={`${styles.genre_detail} ${
                checkedHorror && styles.checked
              }`}
            >
              공포
            </li>
          </Link>
          <Link to='/movie-genre/music'>
            <li
              className={`${styles.genre_detail} ${
                checkedMusic && styles.checked
              }`}
            >
              음악
            </li>
          </Link>
          <Link to='/movie-genre/mystery'>
            <li
              className={`${styles.genre_detail} ${
                checkedMystery && styles.checked
              }`}
            >
              미스터리
            </li>
          </Link>
          <Link to='/movie-genre/romance'>
            <li
              className={`${styles.genre_detail} ${
                checkedRomance && styles.checked
              }`}
            >
              로맨스
            </li>
          </Link>
          <Link to='/movie-genre/war'>
            <li
              className={`${styles.genre_detail} ${
                checkedWar && styles.checked
              }`}
            >
              전쟁
            </li>
          </Link>
          <Link to='/movie-genre/western'>
            <li
              className={`${styles.genre_detail} ${
                checkedWestern && styles.checked
              }`}
            >
              서부
            </li>
          </Link>
        </ul>
      )}
      {(location.pathname === "/tv" || tvGenre) && (
        <ul className='genre'>
          <Link to='/tv-genre/action-adventure'>
            <li
              className={`${styles.genre_detail} ${
                checkedActionAdventure && styles.checked
              }`}
            >
              액션/어드벤쳐
            </li>
          </Link>
          <Link to='/tv-genre/animation'>
            <li
              className={`${styles.genre_detail} ${
                checkedAnimation && styles.checked
              }`}
            >
              애니메이션
            </li>
          </Link>
          <Link to='/tv-genre/comedy'>
            <li
              className={`${styles.genre_detail} ${
                checkedComedy && styles.checked
              }`}
            >
              코미디
            </li>
          </Link>
          <Link to='/tv-genre/crime'>
            <li
              className={`${styles.genre_detail} ${
                checkedCrimThriller && styles.checked
              }`}
            >
              범죄
            </li>
          </Link>
          <Link to='/tv-genre/documentary'>
            <li
              className={`${styles.genre_detail} ${
                checkedDocumentary && styles.checked
              }`}
            >
              다큐멘터리
            </li>
          </Link>
          <Link to='/tv-genre/drama'>
            <li
              className={`${styles.genre_detail} ${
                checkedDrama && styles.checked
              }`}
            >
              드라마
            </li>
          </Link>
          <Link to='/tv-genre/family'>
            <li
              className={`${styles.genre_detail} ${
                checkedFamily && styles.checked
              }`}
            >
              가족
            </li>
          </Link>
          <Link to='/tv-genre/reality'>
            <li
              className={`${styles.genre_detail} ${
                checkedReality && styles.checked
              }`}
            >
              예능
            </li>
          </Link>
          <Link to='/tv-genre/mystery'>
            <li
              className={`${styles.genre_detail} ${
                checkedMystery && styles.checked
              }`}
            >
              미스터리
            </li>
          </Link>
          <Link to='/tv-genre/sf-fantasy'>
            <li
              className={`${styles.genre_detail} ${
                checkedSfFantasy && styles.checked
              }`}
            >
              SF/판타지
            </li>
          </Link>
          <Link to='/tv-genre/war'>
            <li
              className={`${styles.genre_detail} ${
                checkedWar && styles.checked
              }`}
            >
              전쟁
            </li>
          </Link>
        </ul>
      )}
    </section>
  );
};

export default withRouter(Genre);
