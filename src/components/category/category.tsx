import { Link } from "react-router-dom";
import styled from "styled-components";

const CG = styled.section`
  display: flex;
  margin-left: 4rem;
`;

const Button = styled.div`
  margin-right: 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0;

  &:hover {
    cursor: pointer;
  }
`;

const Category = () => {
  return (
    <CG>
      <Link to='/talk'>
        <Button>톡톡</Button>
      </Link>
      <Link to='/voice'>
        <Button>음성</Button>
      </Link>
      <Link to='/chat'>
        <Button>채팅방</Button>
      </Link>
      <Link to='/notice'>
        <Button>게시판</Button>
      </Link>
    </CG>
  );
};

export default Category;
