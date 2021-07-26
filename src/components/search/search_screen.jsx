import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { memo } from "react";
import styles from "./search_screen.module.css";

const SearchScreen = memo(({ onSearch, contents }) => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchTV, setSearchTV] = useState(null);
  const { result } = useParams();

  useEffect(() => {
    contents.movieSearch(result).then((movie) => setSearchMovie(movie));
  }, [contents, result]);

  useEffect(() => {
    contents.tvSearch(result).then((tv) => setSearchTV(tv));
  }, [contents, result]);

  console.log(searchTV);

  return (
    <section className={styles.searchContainer}>
      <span className={styles.header}>영화</span>
      <ul className={styles.movieContainer}>
        {searchMovie &&
          searchMovie.results.map((content) => (
            <li key={content?.id}>
              <Link to={`/movie/${content.id}`}>
                <div className={styles.list}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${content?.poster_path}`}
                    alt='image'
                    width='100px'
                    height='100px'
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
                    src={`https://image.tmdb.org/t/p/w300${content?.poster_path}`}
                    alt='image'
                    width='100px'
                    height='100px'
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
