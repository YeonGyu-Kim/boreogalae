import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./chat_screen.module.css";

const ChatScreen = () => {
  const value = useRef();
  const text = value;

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    console.log(value.current.value);
  };

  return (
    <section className={styles.chatContainer}>
      <div className={styles.searchContainer}>
        <input
          type='text'
          placeholder='검색어를 입력하세요'
          ref={value}
          onKeyPress={onKeyPress}
        />
      </div>
      <div>
        <FontAwesomeIcon
          className={styles.searchIcon}
          icon={faSearch}
          onClick={handleSearch}
        />
      </div>
    </section>
  );
};

export default ChatScreen;
