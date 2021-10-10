import React, { useEffect, useState } from "react";
import { userChat } from "../../contentsApi/chatApi";
import styles from "./chatRoom_all.module.css";

const ChatRoomAll = ({ room }) => {
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

  console.log(chat);

  return (
    <div>
      <li className={styles.roomContainer} onClick={enterChatRoom}>
        <div>{room.title}</div>
        <div>{room.nickname}</div>
      </li>
      {enter && (
        <div className={styles.dialogContainer}>
          <dialog open className={`${styles.dialog} ${styles.chatDidalog}`}>
            <div className={styles.title}></div>
            <div className={styles.button}>
              <span className={styles.leave} onClick={leaveChatRoom}>
                X
              </span>
            </div>
            <form onSubmit={onSubmit}>
              <input
                type='text'
                placeholder='내용을 입력해주세요'
                value={text}
                onChange={onChange}
              />
              <button>보내기</button>
            </form>
            <span>{chat.chat}</span>
            <span>{chat.createdAt}</span>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default ChatRoomAll;
