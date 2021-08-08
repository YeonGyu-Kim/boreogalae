import React, { memo, useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
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
              <div className={styles.filmDetail}>
                <img
                  className={styles.filmPoster}
                  src={`https://image.tmdb.org/t/p/w300${content?.poster_path}`}
                  alt='poster'
                />
                <span className={styles.filmTitle}>
                  {content?.title || content?.name}
                </span>
              </div>
            ))}
      </div>
    </section>
  );
});

export default CharacterDetail;
