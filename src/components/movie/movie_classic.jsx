import React, { memo } from "react";
import ContentContainer from "../contents/content_container";
import ContentScreen from "../contents/content_screen";

const MovieClassic = memo(({ classic: { results } }) => {
  return (
    <ContentContainer
      title='추억의 영화'
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

export default MovieClassic;
