import React, { useRef, useState } from "react";
import { userNotice } from "../../contentsApi/noticeApi";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";

const Board = styled.div`
  position: absolute;
  margin-top: 6rem;
  width: 100%;
  color: black;
`;

const TitleForm = styled.form`
  background-color: white;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  height: 2rem;
  padding-left: 0.5rem;
`;

const NoticeEnroll = () => {
  const value = useRef();
  const [content, setContent] = useState();
  const [title, setTitle] = useState();
  const API_URL = "http://localhost:8080";
  const UPLOAD_ENDPOINT = "notice/upload";

  const onClick = (event) => {
    userNotice.createNotice(content, title).then(() => {
      console.log(title);
      setContent("");
    });
  };

  const onKeyPress = () => {
    setTitle(value.current.value);
  };

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("files", file);
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              body: body,
            })
              .then((res) => {
                res.json();
                console.log(res.json());
              })
              .then((res) => {
                resolve({
                  default: `${API_URL}/${res.filename}`,
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <Board>
      <TitleForm>
        <Input
          type='text'
          placeholder='제목을 입력하세요.'
          ref={value}
          onKeyPress={onKeyPress}
        />
      </TitleForm>
      <CKEditor
        config={{
          extraPlugins: [uploadPlugin],
          autoParagraph: false,
          enterMode: 2,
        }}
        editor={ClassicEditor}
        data=''
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
        onBlur={(editor) => {}}
        onFocus={(editor) => {}}
      />
      <form onClick={onClick} style={{ color: "white" }}>
        등록
      </form>
    </Board>
  );
};

export default NoticeEnroll;
