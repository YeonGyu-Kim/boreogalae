import React, { memo } from "react";
import ContentScreen from "../contents/content_screen";
import ContentContainer from "../contents/content_container";

const MovieTopRated = memo(({ topRated: { results } }) => {
  return (
    <ContentContainer
      title='평점순'
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

export default MovieTopRated;
