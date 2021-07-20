import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Category from "./../category/category";

const Header = () => {
  const resetGenre = () => {
    const showGenre = document.querySelector(".genre");
    showGenre?.classList.remove("show");
    const showMovie = document.querySelector(".contentContainer");
    showMovie?.classList.remove("show");
  };
  return (
    <header className={styles.header}>
      <section className={styles.left}>
        <Link to='/movie' className={styles.home} onClick={resetGenre}>
          보러갈래?
        </Link>
        <Link to='/movie' className={styles.category} onClick={resetGenre}>
          Movie
        </Link>
        <Link to='/tv' className={styles.category} onClick={resetGenre}>
          TV
        </Link>
        <Link to='kids' className={styles.category} onClick={resetGenre}>
          Kids
        </Link>
      </section>
      <Category />
      <section className={styles.right}>
        <div className={styles.search}>
          <label htmlFor='search'></label>
          <input
            className={styles.search__bar}
            type='search'
            placeholder='검색어를 입력하세요'
            id='search'
          />
          <div>
            <FontAwesomeIcon className={styles.search__icon} icon={faSearch} />
          </div>
        </div>
        <div className={styles.login}>로그인</div>
      </section>
    </header>
  );
};

export default Header;
