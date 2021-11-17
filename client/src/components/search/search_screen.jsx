import { useParams, Link, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { memo } from "react";
import styles from "./search_screen.module.css";

const SearchScreen = memo(({ contents }) => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchTV, setSearchTV] = useState(null);
  const { result } = useParams();
  const param = useRouteMatch();

  useEffect(() => {
    contents.movieSearch(result).then((movie) => setSearchMovie(movie));
  }, [contents, result]);

  useEffect(() => {
    contents.tvSearch(result).then((tv) => setSearchTV(tv));
  }, [contents, result]);

  return (
    <section className={styles.searchContainer}>
      <div className={styles.result}>{`"${result}" 검색 결과`}</div>
      <span className={styles.header}>영화</span>
      <ul className={styles.movieContainer}>
        {searchMovie &&
          searchMovie.results.map((content) => (
            <li key={content?.id}>
              <Link to={`/movie/${content.id}`}>
                <div className={styles.list}>
                  <img
                    className={styles.poster}
                    src={
                      content.poster_path
                        ? `https://image.tmdb.org/t/p/w300${content?.poster_path}`
                        : "/images/poster.png"
                    }
                    alt='img'
                    width='120rem'
                    height='150px'
                  />
                  <div className={styles.text}>
                    <span className={styles.title}>{content?.title}</span>
                    <span className={styles.date}>{content?.release_date}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>

      <span className={styles.header}>TV프로그램</span>
      <ul className={styles.tvContainer}>
        {searchTV &&
          searchTV.results.map((content) => (
            <li key={content?.id}>
              <Link to={`/tv/${content.id}`}>
                <div className={styles.list}>
                  <img
                    className={styles.poster}
                    src={
                      content.poster_path
                        ? `https://image.tmdb.org/t/p/w300${content?.poster_path}`
                        : "/images/poster.png"
                    }
                    alt='img'
                    width='120rem'
                    height='150px'
                  />
                  <div className={styles.text}>
                    <span className={styles.title}>{content?.name}</span>
                    <span className={styles.date}>
                      {content?.first_air_date}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
});

export default SearchScreen;
