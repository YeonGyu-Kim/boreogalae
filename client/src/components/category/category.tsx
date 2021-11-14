import { Link, useLocation } from "react-router-dom";
import styles from "./category.module.css";
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
  const location = useLocation();

  const checkedTalk = location.pathname.includes("/talk");
  const checkedChat = location.pathname.includes("/chat");
  const checkedNotice = location.pathname.includes("/notice");

  return (
    <CG>
      <Link to='/chat'>
        <Button className={`${checkedChat && styles.checked}`}>채팅방</Button>
      </Link>
      <Link to='/notice'>
        <Button className={`${checkedNotice && styles.checked}`}>게시판</Button>
      </Link>
    </CG>
  );
};

export default Category;
