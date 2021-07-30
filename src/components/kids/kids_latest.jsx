import React, { memo } from "react";
import styled from "styled-components";
import ContentScreen from "../contents/content_screen";

const UL = styled.ul`
  display: flex;
`;

const KidsLatest = memo(({ kidsLatest: { results } }) => {
  return (
    <UL>
      {results &&
        results.map((kids) => (
          <ContentScreen
            key={kids?.id}
            id={kids?.id}
            poster={kids?.poster_path}
            title={kids?.name}
          />
        ))}
    </UL>
  );
});

export default KidsLatest;
