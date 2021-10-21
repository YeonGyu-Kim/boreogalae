import React, { useEffect, useState } from "react";
import { userChat, userRoom } from "../../contentsApi/chatApi";
import { kakaoApi } from "../../contentsApi/kakaoApi";
import styles from "./chat_all.module.css";

const ChatAll = ({ room, user, deleteId }) => {
  const [enter, setEnter] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState("");

  const enterChatRoom = () => {
    setEnter(true);
    userChat.getChat(room.id).then((result) => {
      setChat(result);
      console.log(chat);
    });
  };
  const leaveChatRoom = () => {
    setEnter(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    userChat
      .createChat(
        text,
        room.userUserId,
        room.id,
        user.nickname,
        user.url,
        user.userId
      )
      .then(() => setText(""));
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  const removeRoom = () => {
    userRoom.deleteRoom(room.id);
    setEnter(false);
    deleteId(room.id);
  };

  return (
    <div className={styles.roomContainer}>
      <li key={room.id} className={styles.room}>
        <div>{room.title}</div>
        <div className={styles.profile}>
          <img src={room.url} className={styles.image} />
          <div>{room.nickname}</div>
        </div>
        <span onClick={enterChatRoom}>입장</span>
        <span onClick={removeRoom}>삭제</span>
      </li>
      {enter && (
        <dialog open className={styles.dialog}>
          <div className={styles.header}>
            <span>{room.title}</span>
            <span className={styles.leave} onClick={leaveChatRoom}>
              X
            </span>
            <span onClick={removeRoom}>방 나가기</span>
          </div>
          <div className={styles.item}>
            <ul>
              {chat &&
                chat.map((result) => (
                  <li
                    key={result.id}
                    className={`${
                      user.userId === result.userUserId
                        ? styles.chatRight
                        : styles.chatLeft
                    }`}
                  >
                    {room.id === result.roomId ? (
                      <>
                        <div className={styles.chatProfile}>
                          <img className={styles.image} src={result.url} />
                          <span className={styles.chatNickname}>
                            {result.nickname}
                          </span>
                        </div>
                        <div className={styles.chatContent}>
                          <span>{result.chat}</span>
                          <span className={styles.date}>
                            {result.createdAt.split("T")[0]}
                          </span>
                          <span className={styles.time}>
                            {result.createdAt.slice(12, 19)}
                          </span>
                        </div>
                      </>
                    ) : null}
                  </li>
                ))}
            </ul>
            <form onSubmit={onSubmit} className={styles.form}>
              <div className={styles.formItem}>
                <input
                  type='text'
                  placeholder='내용을 입력해주세요'
                  value={text}
                  onChange={onChange}
                  className={styles.input}
                />
                <button className={styles.submitBtn}>보내기</button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ChatAll;
