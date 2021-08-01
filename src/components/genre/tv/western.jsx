import React from "react";
import { memo } from "react";
import styled from "styled-components";
import ContentScreen from "../../contents/content_screen";

const UL = styled.ul`
  display: flex;
`;

const TVWestern = memo(({ popular: { results } }) => {
  return (
    <UL>
      {results &&
        results.map((content) => (
          <ContentScreen
            id={content?.id}
            key={content?.id}
            title={content?.name}
            poster={content?.poster_path}
          />
        ))}
    </UL>
  );
});

export default TVWestern;
