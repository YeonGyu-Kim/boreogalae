import React from "react";
import { memo } from "react";
import ContentContainer from "../../contents/content_container";
import ContentScreen from "../../contents/content_screen";

const MovieRomance = memo(
  ({ popular: { results: popResults }, kr: { results: krResults } }) => {
    return (
      <>
        {popResults && (
          <ContentContainer
            title='인기 콘텐츠'
            children={popResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.title}
                poster={content?.poster_path}
              />
            ))}
          />
        )}
        {krResults && (
          <ContentContainer
            title='한국 영화'
            children={krResults.map((content) => (
              <ContentScreen
                id={content?.id}
                key={content?.id}
                title={content?.title}
                poster={content?.poster_path}
              />
            ))}
          />
        )}
      </>
    );
  }
);

export default MovieRomance;
