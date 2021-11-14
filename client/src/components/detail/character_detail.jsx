import React, { memo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./character_detail.module.css";

const CharacterDetail = memo(({ contents }) => {
  const [personCredit, setPersonCredit] = useState(undefined);
  const [personDetail, setPersonDetail] = useState(undefined);

  const { id } = useParams();

  useEffect(() => {
    contents.personCredit(id).then((content) => setPersonCredit(content));
  }, [contents, id]);

  useEffect(() => {
    contents.personDetail(id).then((content) => setPersonDetail(content));
  }, [contents, id]);

  return (
    <section className={styles.container}>
      <div className={styles.profile}>
        <img
          className={styles.profilePoster}
          src={`https://image.tmdb.org/t/p/w300${personDetail?.profile_path}`}
          alt='profile'
        />
        <div className={styles.profileDetail}>
          <span className={styles.name}>{personDetail?.name}</span>
          <span className={styles.birthday}>{personDetail?.birthday}</span>
        </div>
      </div>
      <div className={styles.filmContainer}>
        {personCredit &&
          personCredit?.cast
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 10)
            .map((content) => (
              <Link
                to={
                  content.media_type === "movie"
                    ? `/movie/${content.id}`
                    : `/tv/${content.id}`
                }
              >
                <div className={styles.filmDetail}>
                  <img
                    className={styles.filmPoster}
                    src={`https://image.tmdb.org/t/p/w300${content?.poster_path}`}
                    alt='poster'
                  />
                  <div>
                    <div className={styles.filmTitle}>
                      {content?.title || content?.name}
                    </div>
                    <div className={styles.filmDate}>
                      {content?.release_date ||
                        content?.last_air_date ||
                        content?.first_air_date}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </section>
  );
});

export default CharacterDetail;
