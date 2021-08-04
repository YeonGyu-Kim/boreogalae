import React, { memo } from "react";
import ContentScreen from "../contents/content_screen";
import ContentContainer from "../contents/content_container";

const MovieUpComing = memo(({ upComing: { results } }) => {
  return (
    <ContentContainer
      title='개봉예정 영화'
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

export default MovieUpComing;
