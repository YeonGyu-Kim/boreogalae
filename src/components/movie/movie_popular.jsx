import React, { memo } from "react";
import ContentScreen from "../contents/content_screen";
import styled from "styled-components";

const UL = styled.ul`
  display: flex;
`;

const MoviePopular = memo(({ moviesPopular: { results }, onClickContents }) => {
  return (
    <UL>
      {results &&
        results.map((content) => (
          <ContentScreen
            id={content?.id}
            key={content?.id}
            title={content?.title}
            poster={content?.poster_path}
            onClickContents={onClickContents}
          />
        ))}
    </UL>
  );
});

export default MoviePopular;
