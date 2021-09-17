import React, { useRef } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { userComment } from "../../contentsApi/kakaoApi";

const CommentContainer = styled.section`
  padding-bottom: 1rem;
  border-bottom: 1px solid gainsboro;
`;

const Title = styled.span`
  font-size: 1.3rem;
`;

const Comments = styled.div`
  background-color: #272829;
  display: flex;
  flex-direction: column;
  border: 1px solid gainsboro;
  padding: 1rem;
  margin-top: 1rem;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 0.3rem;
`;

const Input = styled.input`
  height: 5rem;
  border: none;
  outline: none;
  background-color: #272829;
  color: white;
`;

const Enroll = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.div`
  padding: 0.7rem;
  cursor: pointer;
  background-color: #bd42f5;
`;

const CommentsEnroll = ({ user }) => {
  const value = useRef(null);
  const { id } = useParams();
  const contentsId = id;

  const onKeyPress = (event) => {
    return event.key;
  };

  const handleEnroll = () => {
    const result = value?.current?.value;
    userComment.createComment(result, contentsId);
  };

  return (
    <CommentContainer>
      <Title>코멘트</Title>
      <Comments>
        <Profile>
          <ProfileImg src={user ? user?.url : ""} />
          <span>{user ? user?.nickname : null}</span>
        </Profile>
        <Input
          id='inputText'
          type='text'
          placeholder='내용을 입력하세요.'
          ref={value}
          onKeyPress={onKeyPress}
        ></Input>
      </Comments>
      <Enroll>
        <Button onClick={handleEnroll}>등록</Button>
      </Enroll>
    </CommentContainer>
  );
};

export default CommentsEnroll;
