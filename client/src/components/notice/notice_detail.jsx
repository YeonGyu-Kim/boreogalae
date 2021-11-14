import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { userNotice } from "../../contentsApi/noticeApi";

const NoticeDetail = () => {
  const [contents, setContents] = useState([]);
  const noticeId = useParams();

  useEffect(() => {
    userNotice.getNotice().then((result) => setContents(result));
  }, [userNotice]);

  console.log(noticeId.id);

  return (
    <div
      style={{
        position: "absolute",
        top: "5rem",
        width: "100%",
      }}
    >
      {contents.map((content) =>
        content.id == noticeId.id ? (
          <div
            style={{
              margin: "3rem",
            }}
          >
            <div
              style={{
                padding: "1rem",
                borderBottom: "1px solid gray",
                marginBottom: "2rem",
              }}
            >
              <div style={{ fontSize: "2rem" }}>{content.title}</div>

              <div
                style={{
                  fontSize: "0.8rem",
                  lineHeight: "1rem",
                  marginTop: "1rem",
                  display: "flex",
                }}
              >
                <img
                  src={content.url}
                  width='30px'
                  style={{ borderRadius: "50%", marginRight: "0.5rem" }}
                />
                <div>
                  <div>{content.nickname}</div>
                  <div>{content.createdAt.split("T")[0]}</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <img
                src={`/images/${content.image.split("images\\")[1]}`}
                width='300px'
              />
              <div
                style={{ marginLeft: "1rem" }}
                dangerouslySetInnerHTML={{
                  __html: content.content,
                }}
              ></div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default NoticeDetail;
