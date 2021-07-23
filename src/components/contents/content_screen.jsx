import { Link, useLocation } from "react-router-dom";
import styles from "./content_screen.module.css";

const ContentScreen = ({ id, key, title, poster }) => {
  const { pathname } = useLocation();
  return (
    <li className={styles.content}>
      <Link
        to={
          pathname === "/movie"
            ? `/movie/${id}`
            : pathname === "/tv"
            ? `/tv/${id}`
            : null
        }
      >
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/w300${poster}`}
          alt='movie-poster'
        />
        <div>{title}</div>
      </Link>
    </li>
  );
};

export default ContentScreen;
