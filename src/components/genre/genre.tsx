import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import "./genre.css";

const Genre = ({ location }: RouteComponentProps) => {
  const showGenre = () => {
    const showGenre = document.querySelector(".genre");
    showGenre?.classList.toggle("show");
    const showMovie = document.querySelector(".contentContainer");
    showMovie?.classList.toggle("show");
  };
  return (
    <section className='genre-container'>
      {location.pathname === "/movie" ? (
        <div className='genre-bar'>
          <span className='genre-title'>영화</span>
          <div className='genre-btn' onClick={showGenre}>
            장르
          </div>
        </div>
      ) : location.pathname === "/tv" ? (
        <div className='genre-bar'>
          <span className='genre-title'>TV프로그램</span>
          <div className='genre-btn' onClick={showGenre}>
            장르
          </div>
        </div>
      ) : location.pathname === "kids" ? (
        <div className='genre-bar'>
          <span className='genre-title'>키즈</span>
          <div className='genre-btn' onClick={showGenre}>
            장르
          </div>
        </div>
      ) : null}
      {location.pathname === "/movie" ? (
        <ul className='genre'>
          <Link to='/sf'>
            <li className='genre-detail'>액션</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>모험</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>애니메이션</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>코미디</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>범죄</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>다큐멘터리</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>드라마</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>가족</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>판타지</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>역사</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>공포</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>음악</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>미스터리</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>로맨스</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>SF</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>TV 영화</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>스릴러</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>전쟁</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>서부</li>
          </Link>
        </ul>
      ) : location.pathname === "/tv" ? (
        <ul className='genre'>
          <Link to='/sf'>
            <li className='genre-detail'>액션/어드벤쳐</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>애니메이션</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>코미디</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>범죄</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>다큐멘터리</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>드라마</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>가족</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>키즈</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>미스터리</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>뉴스</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>리얼리티</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>SF/판타지</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>토크</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>전쟁</li>
          </Link>
          <Link to='/sf'>
            <li className='genre-detail'>서부</li>
          </Link>
        </ul>
      ) : null}
    </section>
  );
};

export default withRouter(Genre);
