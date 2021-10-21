import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { userChat, userRoom } from "../../contentsApi/chatApi";
import styles from "./chat_screen.module.css";
import ChatAll from "./chat_all";
import ChatCreate from "./chat_create";
import { kakaoApi } from "../../contentsApi/kakaoApi";

const ChatScreen = ({ chatService }) => {
  const search = useRef();
  const [rooms, setRooms] = useState();
  const [roomId, setRoomId] = useState();
  const [create, setCreate] = useState(false);
  const [user, setUser] = useState([]);

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

  useEffect(() => {
    userRoom.getRoom().then((room) => setRooms(room));
    const stopSyncCreateRoom = chatService.onSyncCreateRoom((room) =>
      onCreatedRoom(room)
    );

    return () => {
      stopSyncCreateRoom();
    };
  }, [chatService, userRoom]);

  const onCreatedRoom = (room) => {
    setRooms((rooms) => {
      setRooms([...rooms, room]);
    });
  };

  useEffect(() => {
    kakaoApi.kakaoMe().then((me) => setUser(me));
  }, []);

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
        <div className={styles.create}>
          <span onClick={createChatRoom}>채팅방 생성</span>
        </div>
      </div>
      <div className={styles.roomList}>
        <span>채팅방 목록</span>
        <ul className={styles.chat}>
          {rooms &&
            rooms.map((result) => <ChatAll room={result} user={user} />)}
        </ul>
      </div>
      {create && <ChatCreate setCreate={setCreate} user={user} />}
    </section>
  );
};

export default ChatScreen;
