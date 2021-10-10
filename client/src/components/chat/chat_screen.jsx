import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { userChat, userRoom } from "../../contentsApi/chatApi";
import styles from "./chat_screen.module.css";
import ChatRoomAll from "./chatRoom_all";

const ChatScreen = () => {
  const search = useRef();
  const [room, setRoom] = useState();
  const [create, setCreate] = useState(false);

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

  useEffect(() => {
    userChat.getChat();
  });

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
        <ul className={styles.chat}>
          {room && room.map((result) => <ChatRoomAll room={result} />)}
        </ul>
      </div>
      {create && (
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
      )}
    </section>
  );
};

export default ChatScreen;
