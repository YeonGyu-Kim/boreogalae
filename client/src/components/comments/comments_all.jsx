import React, { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { userComment } from "../../contentsApi/kakaoApi";
import CommentsEnroll from "./comments_enroll";
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

const Button = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Revise = styled.div`
  margin: 0 0.8rem;
`;

const CommentsAll = ({ comment, user }) => {
  const [editing, setEditing] = useState(false);
  const [reply, setReply] = useState(false);
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const handleRevise = () => {
    setEditing(true);
    const currentComment = document.getElementById(`comment-${comment.id}`);
    currentComment && currentComment.classList.toggle("hiddenComment");

    const update = document.getElementById(`update-${comment.id}`);
    update && update.classList.toggle("hiddenUpdate");
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제 하시겠습니까?") === true) {
      userComment.deleteComment(comment.id);
    } else {
      return;
    }
  };

  const handleReply = () => {
    setReply(true);
  };

  const handleLike = () => {
    setCount(count + 1);
    userComment.voteComment(comment.id, count);
    return count;
  };

  return (
    <div>
      {id == comment.contentsId ? (
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
          <Button>
            <div onClick={handleReply}>답글</div>
            <Revise onClick={handleRevise}>수정</Revise>
            <div onClick={handleDelete}>삭제</div>
            <div onClick={handleLike}>{`좋아요 ${comment.voteCount}`}</div>
          </Button>
        </CommentList>
      ) : null}

      {editing && <CommentsUpdate comment={comment} />}
      {reply && <CommentsEnroll user={user} />}
    </div>
  );
};

export default CommentsAll;
