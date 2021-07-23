import { memo } from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import ContentScreen from "../contents/content_screen";

const UL = styled.ul`
  display: flex;
`;

const TvPopular = memo(({ tvPopular: { results } }) => {
  const match = useRouteMatch();
  console.log(match);
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
