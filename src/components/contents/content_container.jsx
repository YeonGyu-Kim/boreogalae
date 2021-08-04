import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  display: flex;
  margin-top: 1rem;
`;

const Contents = styled.div`
  margin: 1rem 0 4rem 0;
`;

const Title = styled.span`
  font-size: 1.7rem;
  margin-left: 2rem;
`;

const ContentContainer = ({ title, children }) => {
  return (
    <Contents>
      <Title>{title}</Title>
      <UL>{children}</UL>
    </Contents>
  );
};

export default ContentContainer;
