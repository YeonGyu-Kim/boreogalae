import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./chat_screen.module.css";

const ChatScreen = () => {
  const value = useRef();
  const [create, setCreate] = useState(false);
  const [enter, setEnter] = useState(false);

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    console.log(value.current.value);
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

  return (
    <section className={styles.chatContainer}>
      <div className={styles.searchContainer}>
        <input
          type='text'
          placeholder='채팅방 이름 검색'
          ref={value}
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
        <div className={styles.chat} onClick={enterChatRoom}>
          <span>원티트</span>
        </div>
      </div>
      {create && (
        <div className={styles.dialogContainer}>
          <dialog open className={styles.dialog}>
            <div className={styles.title}>채팅방 설정</div>
            <input
              className={styles.inputTitle}
              type='text'
              placeholder='제목을 입력하세요.'
            />
            <div className={styles.button}>
              <span className={styles.enroll}>확인</span>
              <span onClick={cancelChatRoom}>취소</span>
            </div>
          </dialog>
        </div>
      )}
      {enter && (
        <div className={styles.dialogContainer}>
          <dialog open className={`${styles.dialog} ${styles.chatDidalog}`}>
            <div className={styles.title}>원티드 채팅방</div>
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
