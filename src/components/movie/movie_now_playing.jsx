import React, { memo } from "react";
import ContentContainer from "../contents/content_container";
import ContentScreen from "../contents/content_screen";

const MovieNowPlaying = memo(({ nowPlaying: { results } }) => {
  return (
    <ContentContainer
      title='현재 상영 영화'
      children={
        results &&
        results.map((content) => (
          <ContentScreen
            id={content?.id}
            key={content?.id}
            title={content?.title}
            poster={content?.poster_path}
          />
        ))
      }
    />
  );
});

export default MovieNowPlaying;
