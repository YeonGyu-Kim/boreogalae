import React, { useRef, useState } from "react";
import styled from "styled-components";
import { userComment } from "../../contentsApi/kakaoApi";

const CommentContainer = styled.section``;

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

const CommentsEdit = ({ comment }) => {
  const [currentText, setCurrentText] = useState(comment.text);
  const value = useRef(null);

  const onKeyPress = (event) => {
    return event.key;
  };

  const handleEnroll = () => {
    const result = value?.current?.value;
    userComment.updateComment(result).then((r) => console.log(r));
  };

  return <div>{comment.text}</div>;
};

export default CommentsEdit;
