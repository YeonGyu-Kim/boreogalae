import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./chat_screen.module.css";
import { userChat, userRoom } from "../../contentsApi/chatApi";

const ChatScreen = () => {
  const search = useRef();
  const [room, setRoom] = useState();
  const [create, setCreate] = useState(false);
  const [enter, setEnter] = useState(false);
  const [title, setTitle] = useState("");

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    console.log(search.current.value);
  };

  const createChatRoom = () => {
    setCreate(true);
  };

  const cancelChatRoom = () => {
    setCreate(false);
  };

  const enterChatRoom = () => {
    setEnter(true);
  };

  const leaveChatRoom = () => {
    setEnter(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    userRoom.createRoom(title).then(() => setTitle(""));
    setCreate(false);
  };

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    userRoom.getRoom().then((room) => setRoom(room));
  }, [userRoom]);

  return (
    <section className={styles.chatContainer}>
      <div className={styles.searchContainer}>
        <input
          type='text'
          placeholder='채팅방 이름 검색'
          ref={search}
          onKeyPress={onKeyPress}
        />
        <div>
          <FontAwesomeIcon
            className={styles.searchIcon}
            icon={faSearch}
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className={styles.create}>
        <span>채팅방 생성</span>
        <div onClick={createChatRoom}>+</div>
      </div>
      <div>
        <span>채팅방 목록</span>
        <ul className={styles.chat} onClick={enterChatRoom}>
          {room &&
            room.map((result) => (
              <li className={styles.roomContainer}>
                <div>{result.title}</div>
                <div>{result.nickname}</div>
              </li>
            ))}
        </ul>
      </div>
      {create && (
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
      )}
      {enter && (
        <div className={styles.dialogContainer}>
          <dialog open className={`${styles.dialog} ${styles.chatDidalog}`}>
            <div className={styles.title}></div>
            <div className={styles.button}>
              <span className={styles.leave} onClick={leaveChatRoom}>
                X
              </span>
            </div>
          </dialog>
        </div>
      )}
    </section>
  );
};

export default ChatScreen;
