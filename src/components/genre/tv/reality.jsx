import React from "react";
import { memo } from "react";
import styled from "styled-components";
import ContentScreen from "../../contents/content_screen";

const Container = styled.section`
  display: block;
`;

const UL = styled.ul`
  display: flex;
`;

const Title = styled.div`
  display: block;
`;

const Item = styled.div`
  display: block;
`;

const TVReality = memo(({ kr: { results: kr }, en: { results: en } }) => {
  return (
    <Container>
      <Title>한국</Title>
      <UL>
        {kr &&
          kr.map((content) => (
            <ContentScreen
              id={content?.id}
              key={content?.id}
              title={content?.name}
              poster={content?.poster_path}
            />
          ))}
      </UL>
      <div>미국</div>
      <UL>
        {en &&
          en.map((content) => (
            <ContentScreen
              id={content?.id}
              key={content?.id}
              title={content?.name}
              poster={content?.poster_path}
            />
          ))}
      </UL>
    </Container>
  );
});

export default TVReality;
