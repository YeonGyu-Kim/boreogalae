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
      <ul className='genre'>
        <Link to='/sf'>
          <li className='genre-detail'>SF</li>
        </Link>
        <Link to='/sf'>
          <li className='genre-detail'>SF</li>
        </Link>
        <Link to='/sf'>
          <li className='genre-detail'>SF</li>
        </Link>
        <Link to='/sf'>
          <li className='genre-detail'>SF</li>
        </Link>
        <Link to='/sf'>
          <li className='genre-detail'>SF</li>
        </Link>
        <Link to='/sf'>
          <li className='genre-detail'>SF</li>
        </Link>
        <Link to='/sf'>
          <li className='genre-detail'>SF</li>
        </Link>
        <Link to='/sf'>
          <li className='genre-detail'>SF</li>
        </Link>
      </ul>
    </section>
  );
};

export default withRouter(Genre);
