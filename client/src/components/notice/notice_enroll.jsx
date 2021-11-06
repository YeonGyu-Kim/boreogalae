import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";
import { userNotice } from "../../contentsApi/noticeApi";

const Board = styled.div`
  position: absolute;
  margin-top: 6rem;
  width: 100%;
  color: black;
`;

const NoticeEnroll = () => {
  const [value, setValue] = useState();
  const onClick = (event) => {
    userNotice.createNotice(value).then(() => {
      setValue("");
    });
  };
  return (
    <Board>
      <form>제목을 입력하세요</form>
      <CKEditor
        editor={ClassicEditor}
        data=''
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setValue(data);
        }}
        onBlur={(editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(editor) => {
          console.log("Focus.", editor);
        }}
      />
      <form onClick={onClick} style={{ color: "white" }}>
        등록
      </form>
    </Board>
  );
};

export default NoticeEnroll;
