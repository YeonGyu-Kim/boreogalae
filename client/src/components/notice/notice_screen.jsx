import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import styles from "./notice_screen.module.css";

const NoticeScreen = () => {
  const value = useRef();
  const history = useHistory();

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
      <Link to='/notice/board'>글쓰기</Link>
    </section>
  );
};

export default NoticeScreen;
