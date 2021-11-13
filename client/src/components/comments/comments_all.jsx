import React, { useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { userComment } from "../../contentsApi/commentApi";
import CommentsReply from "./comments_reply";
import CommentsUpdate from "./comments_update";

const CommentList = styled.li`
  width: 100%;
  border-bottom: 1px solid lightgray;
  background-color: #272829;
  padding: 1rem 0;
`;

const Reply = styled.span`
  margin: 0 0.5rem;
  padding: 0.5rem;
  height: 0.05rem;
  width: 0.05rem;
  border-left: 1px solid;
  border-bottom: 1px solid;
`;

const Content = styled.div``;

const ContentContainer = styled.div`
  display: flex;
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
  cursor: pointer;
`;

const Revise = styled.div`
  margin: 0 0.8rem;
`;

const Like = styled.div`
  margin: 0 0.8rem;
`;

const CommentsAll = ({ comment, user, replies }) => {
  const [editing, setEditing] = useState(false);
  const [reply, setReply] = useState(false);
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const handleRevise = () => {
    setEditing(true);
    const update = document.getElementById(`update-${comment.id}`);
    update && update.classList.toggle("hiddenUpdate");
  };

  console.log(user);

  const handleDelete = () => {
    if (window.confirm("정말 삭제 하시겠습니까?") === true) {
      userComment.deleteComment(comment.id);
    } else {
      return;
    }
  };

  const handleReply = () => {
    setReply(true);
    const currentComment = document.getElementById(`reply-${comment.id}`);
    currentComment && currentComment.classList.toggle("hiddenReply");
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
          <ContentContainer>
            {comment.p_id && <Reply />}
            <Content>
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
                {user && user.nickname == comment.nickname ? (
                  <div onClick={handleDelete}>삭제</div>
                ) : (
                  ""
                )}
                <Like
                  onClick={handleLike}
                >{`좋아요 ${comment.voteCount}`}</Like>
              </Button>
            </Content>
          </ContentContainer>
          {reply && <CommentsReply user={user} parentId={comment.id} />}
        </CommentList>
      ) : null}

      {editing && <CommentsUpdate comment={comment} />}
    </div>
  );
};

export default CommentsAll;
