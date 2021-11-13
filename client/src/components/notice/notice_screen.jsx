import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import styles from "./notice_screen.module.css";
import { userNotice } from "../../contentsApi/noticeApi";

const NoticeScreen = () => {
  const [list, setList] = useState();
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

  useEffect(() => {
    userNotice.getNotice().then((result) => setList(result));
  }, []);

  console.log(list);

  return (
    <section className={styles.noticeContainer}>
      <div>
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
      </div>

      {list &&
        list.map((result) => (
          <table className={styles.tableContainer}>
            <thead>
              <tr>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
              <tr>
                <Link to={`/notice/detail/${result.id}`}>
                  <th>{result.title}</th>
                </Link>
                <th>{result.nickname}</th>
                <th>{result.createdAt.split("T")[0]}</th>
              </tr>
            </thead>
          </table>
        ))}

      <Link to='/notice/board'>글쓰기</Link>
    </section>
  );
};

export default NoticeScreen;
