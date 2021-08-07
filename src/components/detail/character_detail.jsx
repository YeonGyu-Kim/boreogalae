import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  console.log(personCredit);

  return (
    <div className={styles.container}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${personDetail?.profile_path}`}
          alt='profile'
        />
        <span>{personDetail?.name}</span>
        <span>{personDetail?.birthday}</span>
      </div>
      <span>
        {personCredit &&
          personCredit?.cast
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 10)
            .map((content) => (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w300${content?.poster_path}`}
                  alt='poster'
                />
                <span>{content?.title || content?.name}</span>
              </div>
            ))}
      </span>
    </div>
  );
});

export default CharacterDetail;
