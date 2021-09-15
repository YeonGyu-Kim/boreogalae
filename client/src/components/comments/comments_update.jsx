import React, { useRef, useState } from "react";
import styled from "styled-components";
import "./comments_update.css";
import { userComment } from "../../contentsApi/kakaoApi";

const CommentsContainer = styled.section``;

const Comments = styled.div`
  background-color: #272829;
  display: flex;
  flex-direction: column;
  border: 1px solid gainsboro;
  padding: 1rem;
  margin-top: 1rem;
`;

const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 0.3rem;
`;

const Cancel = styled.div`
  position: relative;
  bottom: 6.55rem;
  left: 10rem;
`;

const Input = styled.input`
  height: 5rem;
  border: none;
  outline: none;
  background-color: #272829;
  color: white;
  opacity: 0.8;
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

const CommentsUpdate = ({ comment }) => {
  const [currentText, setCurrentText] = useState(comment.text);

  const onChange = (event) => {
    setCurrentText(event?.target?.value);
  };

  const handleEnroll = () => {
    userComment.updateComment(comment.id, currentText);

    const hidden = document.getElementById(`update-${comment.id}`);
    hidden.classList.add("hiddenUpdate");
  };

  const handleCancel = () => {
    const add = document.getElementById(`comment-${comment.id}`);
    add.classList.toggle("hiddenComment");

    const hidden = document.getElementById(`update-${comment.id}`);
    hidden.classList.toggle("hiddenUpdate");
  };

  return (
    <CommentsContainer id={`update-${comment.id}`}>
      <Comments>
        <Profile>
          <ProfileImg src={comment ? comment?.url : ""} />
          <span>{comment ? comment?.nickname : null}</span>
        </Profile>
        <Input
          id='inputText'
          type='text'
          placeholder='내용을 입력하세요.'
          value={currentText}
          autoFocus
          onChange={onChange}
        ></Input>
        <Cancel onClick={handleCancel}>취소</Cancel>
      </Comments>
      <Enroll>
        <Button onClick={handleEnroll}>등록</Button>
      </Enroll>
    </CommentsContainer>
  );
};

export default CommentsUpdate;
