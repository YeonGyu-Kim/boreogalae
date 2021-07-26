import { memo } from "react";
import styled from "styled-components";
import ContentScreen from "../contents/content_screen";

const UL = styled.ul`
  display: flex;
`;

const TvPopular = memo(({ tvPopular: { results } }) => {
  return (
    <UL>
      {results &&
        results.map((content) => (
          <ContentScreen
            key={content?.id}
            id={content?.id}
            poster={content?.poster_path}
            title={content?.name}
          />
        ))}
    </UL>
  );
});

export default TvPopular;
