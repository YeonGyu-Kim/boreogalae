import { Link, useLocation } from "react-router-dom";
import styles from "./content_screen.module.css";

interface IContentScreenProps {
  id: number;
  title: string;
  poster: string;
}

const ContentScreen = ({ id, title, poster }: IContentScreenProps) => {
  const { pathname } = useLocation();
  return (
    <li key={id} className={styles.content}>
      <Link
        to={
          pathname === "/movie" || pathname.includes("/movie-genre")
            ? `/movie/${id}`
            : pathname === "/tv" || pathname.includes("/tv-genre")
            ? `/tv/${id}`
            : pathname === "/kids"
            ? `/kids/${id}`
            : ""
        }
      >
        <img
          className={styles.image}
          src={
            poster
              ? `https://image.tmdb.org/t/p/w300${poster}`
              : "/images/poster.png"
          }
          alt='movie-poster'
        />
        <div className={styles.title}>
          {title.length > 13 ? `${title.substring(0, 13)}...` : title}
        </div>
      </Link>
    </li>
  );
};

export default ContentScreen;
