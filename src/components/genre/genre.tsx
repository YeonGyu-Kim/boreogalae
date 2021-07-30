import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import "./genre.css";

const Genre = ({ location }: RouteComponentProps) => {
  const movieGenre = location.pathname.includes("/movie-genre");
  const tvGenre = location.pathname.includes("/tv-genre");

  const showGenre = () => {
    const showGenre = document.querySelector(".genre");
    showGenre?.classList.toggle("show");
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
          <div className='genre-btn' onClick={showGenre}>
            장르
          </div>
        </div>
      ) : null}
      {location.pathname === "/movie" || movieGenre ? (
        <ul className='genre'>
          <Link to='/movie-genre/action-adventure'>
            <li className='genre-detail'>액션/모험</li>
          </Link>
          <Link to='/movie-genre/animation'>
            <li className='genre-detail'>애니메이션</li>
          </Link>
          <Link to='/movie-genre/comedy'>
            <li className='genre-detail'>코미디</li>
          </Link>
          <Link to='/movie-genre/crime-thriller'>
            <li className='genre-detail'>범죄/스릴러</li>
          </Link>
          <Link to='/movie-genre/documentary'>
            <li className='genre-detail'>다큐멘터리</li>
          </Link>
          <Link to='/movie-genre/drama'>
            <li className='genre-detail'>드라마</li>
          </Link>
          <Link to='/movie-genre/family'>
            <li className='genre-detail'>가족</li>
          </Link>
          <Link to='/movie-genre/sf-fantasy'>
            <li className='genre-detail'>SF/판타지</li>
          </Link>
          <Link to='/movie-genre/history'>
            <li className='genre-detail'>역사</li>
          </Link>
          <Link to='/movie-genre/horror'>
            <li className='genre-detail'>공포</li>
          </Link>
          <Link to='/movie-genre/music'>
            <li className='genre-detail'>음악</li>
          </Link>
          <Link to='/movie-genre/mystery'>
            <li className='genre-detail'>미스터리</li>
          </Link>
          <Link to='/movie-genre/romance'>
            <li className='genre-detail'>로맨스</li>
          </Link>
          <Link to='/movie-genre/war'>
            <li className='genre-detail'>전쟁</li>
          </Link>
          <Link to='/movie-genre/western'>
            <li className='genre-detail'>서부</li>
          </Link>
        </ul>
      ) : location.pathname === "/tv" || tvGenre ? (
        <ul className='genre'>
          <Link to='tv-genre/action-adventure'>
            <li className='genre-detail'>액션/어드벤쳐</li>
          </Link>
          <Link to='tv-genre/animation'>
            <li className='genre-detail'>애니메이션</li>
          </Link>
          <Link to='tv-genre/comedy'>
            <li className='genre-detail'>코미디</li>
          </Link>
          <Link to='tv-genre/crime'>
            <li className='genre-detail'>범죄</li>
          </Link>
          <Link to='tv-genre/documentary'>
            <li className='genre-detail'>다큐멘터리</li>
          </Link>
          <Link to='tv-genre/drama'>
            <li className='genre-detail'>드라마</li>
          </Link>
          <Link to='tv-genre/family'>
            <li className='genre-detail'>가족</li>
          </Link>
          <Link to='tv-genre/mystery'>
            <li className='genre-detail'>미스터리</li>
          </Link>
          <Link to='tv-genre/sf-fantasy'>
            <li className='genre-detail'>SF/판타지</li>
          </Link>
          <Link to='tv-genre/war'>
            <li className='genre-detail'>전쟁</li>
          </Link>
          <Link to='tv-genre/western'>
            <li className='genre-detail'>서부</li>
          </Link>
        </ul>
      ) : null}
    </section>
  );
};

export default withRouter(Genre);
