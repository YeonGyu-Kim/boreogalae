import { Link } from "react-router-dom";
import styles from "./content_screen.module.css";

const ContentScreen = ({ id, key, title, poster }) => {
  return (
    <Link to={`/contents/${id}`}>
      <li className={styles.content}>
        <img
          className={styles.image}
          src={`https://image.tmdb.org/t/p/w300${poster}`}
          alt='movie-poster'
        />
        <div>{title}</div>
      </li>
    </Link>
  );
};

export default ContentScreen;
