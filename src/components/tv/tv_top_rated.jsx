import React from "react";
import ContentContainer from "../contents/content_container";
import ContentScreen from "../contents/content_screen";

const TvTopRated = ({ tvTopRated: { results } }) => {
  return (
    <ContentContainer
      title='평점순'
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
};

export default TvTopRated;
