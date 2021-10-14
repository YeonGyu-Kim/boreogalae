import React, { useEffect, useState } from "react";
import { userChat } from "../../contentsApi/chatApi";
import styles from "./chat_all.module.css";

const ChatAll = ({ room }) => {
  const [enter, setEnter] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState("");

  const enterChatRoom = () => {
    setEnter(true);
    userChat.getChat(room.id).then((result) => setChat(result));
  };
  const leaveChatRoom = () => {
    setEnter(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    userChat
      .createChat(text, room.userUserId, room.id, room.nickname)
      .then(() => setText(""));
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={styles.roomContainer}>
      <li className={styles.room} onClick={enterChatRoom}>
        <div>{room.title}</div>
        <div className={styles.profile}>
          <img src={room.url} className={styles.image} />
          <div>{room.nickname}</div>
        </div>
      </li>
      {enter && (
        <dialog open className={styles.dialog}>
          <div className={styles.header}>
            <span>{room.title}</span>
            <span className={styles.leave} onClick={leaveChatRoom}>
              X
            </span>
          </div>
          <div className={styles.item}>
            <ul>
              {chat &&
                chat.map((result) => (
                  <li className={styles.chat}>
                    <div className={styles.chatProfile}>
                      <img className={styles.image} src={room.url} />
                      <span className={styles.chatNickname}>
                        {room.nickname}
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
