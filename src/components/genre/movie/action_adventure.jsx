import React from "react";
import { memo } from "react";
import ContentContainer from "../../contents/content_container";
import ContentScreen from "../../contents/content_screen";

const MovieActionAdventure = memo(({ popular: { results } }) => {
  return (
    <ContentContainer
      title='인기 콘텐츠'
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

export default MovieActionAdventure;
