import React from "react";
import { memo } from "react";
import styled from "styled-components";
import ContentScreen from "../contents/content_screen";

const UL = styled.ul`
  display: flex;
`;

const KidsPopular = memo(({ popularKids: { results } }) => {
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

export default KidsPopular;
