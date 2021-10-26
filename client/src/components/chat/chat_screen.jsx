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
  const [deltedRoomId, setDeletedRoomId] = useState();

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

  const deleteId = (id) => {
    setDeletedRoomId(id);
  };

  useEffect(() => {
    kakaoApi.kakaoMe().then((me) => setUser(me));
  }, []);

  useEffect(() => {
    userRoom.getRoom().then((room) => setRooms(room));
    const stopSyncCreateRoom = chatService.onSyncCreateRoom((room) =>
      onCreatedRoom(room)
    );

    const stopSyncDeleteRoom = chatService.onSyncDeleteRoom((room) =>
      onDeletedRoom(room)
    );

    return () => {
      stopSyncCreateRoom();
      stopSyncDeleteRoom();
    };
  }, [chatService]);

  const onCreatedRoom = (room) => {
    setRooms((rooms) => [room, ...rooms]);
  };

  const onDeletedRoom = (room) => {
    setRooms((rooms) => rooms.filter((result) => result.id == deltedRoomId));
  };

  return (
    <section className={styles.chatContainer}>
      <div className={styles.header}>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
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
          <span onClick={createChatRoom}>채팅방 생성</span>
        </div>
      </div>
      <div className={styles.roomList}>
        <span>채팅방 목록</span>
        <ul className={styles.chat}>
          {rooms &&
            rooms.map((result) => (
              <ChatAll
                room={result}
                user={user}
                deleteId={deleteId}
                chatService={chatService}
              />
            ))}
        </ul>
      </div>
      {create && <ChatCreate setCreate={setCreate} user={user} />}
    </section>
  );
};

export default ChatScreen;
