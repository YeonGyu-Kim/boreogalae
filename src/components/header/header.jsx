import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import styles from "./header.module.css";
import { memo, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Category from "../category/category";

const Header = memo(({ onSearch }) => {
  const value = useRef();
  const history = useHistory();
  const location = useLocation();

  const checkedMovie = location.pathname.includes("/movie");
  const checkedTV = location.pathname.includes("/tv");
  const checkedKids = location.pathname.includes("/kids");

  const resetGenre = () => {
    const showGenre = document.querySelector(".genre");
    showGenre?.classList.remove("show");
    const showMovie = document.querySelector(".contentContainer");
    showMovie?.classList.remove("show");
  };

  const handleSearch = () => {
    const result = value.current.value;
    history.push(`/result/search_query=${result}`);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <section className={styles.left}>
        <Link to='/movie' className={styles.home} onClick={resetGenre}>
          보러갈래?
        </Link>
        <Link
          to='/movie'
          className={`${styles.category} ${checkedMovie && styles.checked}`}
          onClick={resetGenre}
        >
          영화
        </Link>
        <Link
          to='/tv'
          className={`${styles.category} ${checkedTV && styles.checked}`}
          onClick={resetGenre}
        >
          TV
        </Link>
        <Link
          to='/kids'
          className={`${styles.category} ${checkedKids && styles.checked}`}
          onClick={resetGenre}
        >
          키즈
        </Link>
        <Category />
      </section>
      <section className={styles.right}>
        <div className={styles.search}>
          <label htmlFor='search'></label>
          <input
            className={styles.search__bar}
            ref={value}
            type='search'
            placeholder='검색어를 입력하세요'
            id='search'
            onKeyPress={onKeyPress}
          />
          <div>
            <FontAwesomeIcon
              className={styles.search__icon}
              icon={faSearch}
              onClick={handleSearch}
            />
          </div>
        </div>
        <div className={styles.login}>로그인</div>
      </section>
    </header>
  );
});

export default Header;
