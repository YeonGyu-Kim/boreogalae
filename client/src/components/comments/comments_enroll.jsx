import React, { useRef, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { userComment } from "../../contentsApi/kakaoApi";

const CommentContainer = styled.form`
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

/*const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 0.3rem;
`;*/

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

const Button = styled.button`
  padding: 0.7rem;
  cursor: pointer;
  background-color: #bd42f5;
`;

const CommentsEnroll = ({ user }) => {
  const { id } = useParams();
  const contentsId = id;

  const [comment, setComment] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (localStorage.length === 1) {
      alert("로그인 하신 후 이용해 주시기 바랍니다");
      setComment("");
    } else {
      userComment.createComment(comment, contentsId).then((created) => {
        setComment("");
      });
    }
  };

  const onChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <CommentContainer onSubmit={onSubmit}>
      <Title>코멘트</Title>
      <Comments>
        <Profile>
          <span>
            {localStorage.length === 2
              ? user?.nickname
              : "로그인 하신 후 이용해 주시기 바랍니다."}
          </span>
        </Profile>
        <Input
          id='inputText'
          type='text'
          placeholder='내용을 입력하세요.'
          value={comment}
          onChange={onChange}
        ></Input>
      </Comments>
      <Enroll>
        <Button type='submit'>등록</Button>
      </Enroll>
    </CommentContainer>
  );
};

export default CommentsEnroll;
