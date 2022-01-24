import React, { memo } from "react";
import ContentContainer from "../contents/content_container";
import ContentScreen from "../contents/content_screen";

interface IKidsLatest {
  kidsLatest: {
    results: [
      {
        backdrop_path: string;
        first_air_date: string;
        genre_ids: number[];
        id: number;
        name: string;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        vote_average: number;
        vote_count: number;
      }
    ];
  };
}

const KidsLatest = memo(({ kidsLatest: { results } }: IKidsLatest) => {
  console.log(results);
  return (
    <ContentContainer
      title='최근 프로그램'
      children={
        results &&
        results.map((content) => (
          <ContentScreen
            id={content?.id}
            key={content?.id}
            title={content?.name}
            poster={content?.poster_path}
          />
        ))
      }
    />
  );
});

export default KidsLatest;
