import React, { useEffect, useState, useRef } from "react";
import { userRoom } from "../../contentsApi/chatApi";
import styles from "./chat_create.module.css";

const ChatCreate = ({ setCreate, user }) => {
  const [roomId, setRoomId] = useState();
  const [title, setTitle] = useState("");
  const componentMounted = useRef(true);

  const onSubmit = (event) => {
    event.preventDefault();
    userRoom
      .createRoom(title, user.nickname, user.url)
      .then(() => setTitle(""));
    setCreate(false);
  };

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  const cancelChatRoom = () => {
    setCreate(false);
  };

  useEffect(() => {
    componentMounted.current = false;
  }, []);

  return (
    <div className={styles.dialogContainer}>
      <dialog open className={styles.dialog}>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.title}>채팅방 설정</div>
          <input
            className={styles.inputTitle}
            type='text'
            placeholder='제목을 입력하세요.'
            value={title}
            onChange={onChange}
          />
          <div className={styles.button}>
            <button className={styles.enroll} type='submit'>
              확인
            </button>
            <span onClick={cancelChatRoom}>취소</span>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ChatCreate;
