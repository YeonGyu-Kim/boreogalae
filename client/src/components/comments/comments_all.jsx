import React, { useState } from "react";
import styled from "styled-components";
import { userComment } from "../../contentsApi/kakaoApi";
import CommentsEdit from "./comments_edit";

const CommentList = styled.li`
  &:first-child {
    border-top: 1px solid lightgray;
  }
  &:last-child {
    margin-bottom: 3rem;
  }
  width: 100%;
  border-bottom: 1px solid lightgray;
  background-color: #272829;
  padding: 1rem 0;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  margin-right: 0.3rem;
`;

const Text = styled.div`
  margin: 0.8rem 0;
`;

const CommentsAll = ({ comment, user }) => {
  const [editing, setEditing] = useState(false);

  return (
    <CommentList>
      <Profile>
        <ProfileImg
          src={comment.url}
          alt='profile-img'
          width='30px'
          height='30px'
        />
        <span>{comment.nickname}</span>
      </Profile>
      <Text>{comment.text}</Text>
      <div>{comment.createdAt.split("T")[0]}</div>
      <div onClick={() => setEditing(true)}>수정</div>
      {editing && <CommentsEdit comment={comment} />}
    </CommentList>
  );
};

export default CommentsAll;
