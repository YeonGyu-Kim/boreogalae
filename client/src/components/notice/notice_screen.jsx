import React, { useRef } from "react";
import styles from "./notice_screen.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NoticeScreen = () => {
  const value = useRef();

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    console.log(value.current.value);
  };

  return (
    <section className={styles.noticeContainer}>
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

export default NoticeScreen;
