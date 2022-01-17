import React, { memo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./character_detail.module.css";

interface IParams {
  id: string;
}

interface ICredit {
  cast: [
    {
      adult?: boolean;
      backdrop_path?: string;
      character?: string;
      credit_id?: string;
      id?: number;
      media_type?: string;
      order?: number;
      original_language?: string;
      original_title?: string;
      overview?: string;
      popularity?: number;
      poster_path?: string;
      release_date?: string;
      last_air_date?: string;
      first_air_date: string;
      title?: string;
      name?: string;
      video?: false;
      vote_average?: number;
      vote_count?: number;
    }
  ];
}

interface IDetail {
  adult: boolean;
  biography: string;
  birthday: string;
  deathday: null;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

const CharacterDetail = memo(({ contents }: any) => {
  const [personCredit, setPersonCredit] = useState<ICredit>();
  const [personDetail, setPersonDetail] = useState<IDetail>();
  const { id } = useParams<IParams>();

  console.log(personDetail);

  useEffect(() => {
    contents
      .personCredit(id)
      .then((content: ICredit) => setPersonCredit(content));
  }, [contents, id]);

  useEffect(() => {
    contents
      .personDetail(id)
      .then((content: IDetail) => setPersonDetail(content));
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
            .sort((a: any, b: any) => b.popularity - a.popularity)
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
