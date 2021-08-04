import React from "react";
import ContentContainer from "../contents/content_container";
import ContentScreen from "../contents/content_screen";

const TvKrPoular = ({ tvKrPopukar: { results } }) => {
  return (
    <ContentContainer
      title='한국 인기 프로그램'
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

export default TvKrPoular;
