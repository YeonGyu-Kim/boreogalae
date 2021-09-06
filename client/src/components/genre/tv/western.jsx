import React from "react";
import { memo } from "react";
import ContentContainer from "../../contents/content_container";
import ContentScreen from "../../contents/content_screen";

const TVWestern = memo(
  ({ popular: { results: popResults }, kr: { results: krResults } }) => {
    return (
      <>
        <ContentContainer
          title='인기 콘텐츠'
          children={
            popResults &&
            popResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.name}
                poster={content?.poster_path}
              />
            ))
          }
        />
        <ContentContainer
          title='한국 콘텐츠'
          children={
            krResults &&
            krResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.name}
                poster={content?.poster_path}
              />
            ))
          }
        />
      </>
    );
  }
);

export default TVWestern;
