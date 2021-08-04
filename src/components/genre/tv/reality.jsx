import React from "react";
import { memo } from "react";
import styled from "styled-components";
import ContentContainer from "../../contents/content_container";
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
    <>
      <ContentContainer
        title='한국 드라마'
        children={
          kr &&
          kr.map((content) => (
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
        title='미국 드라마'
        children={
          en &&
          en.map((content) => (
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
});

export default TVReality;
