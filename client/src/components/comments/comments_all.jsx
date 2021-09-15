import React, { useState } from "react";
import styled from "styled-components";
import { userComment } from "../../contentsApi/kakaoApi";
import CommentsUpdate from "./comments_update";

const CommentList = styled.li`
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

  const handleRevise = () => {
    setEditing(true);
    const currentComment = document.getElementById(`comment-${comment.id}`);
    currentComment && currentComment.classList.toggle("hiddenComment");

    const update = document.getElementById(`update-${comment.id}`);
    update && update.classList.toggle("hiddenUpdate");
  };

  return (
    <div>
      <CommentList id={`comment-${comment.id}`}>
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
        <div onClick={handleRevise}>수정</div>
      </CommentList>

      {editing && <CommentsUpdate comment={comment} />}
    </div>
  );
};

export default CommentsAll;
