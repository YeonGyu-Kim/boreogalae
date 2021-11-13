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
    <div style={{ position: "absolute", top: "10rem" }}>
      {contents.map((content) =>
        content.id == noticeId.id ? (
          <div>
            <img
              src={`/images/${content.image.split("images\\")[1]}`}
              width='300px'
            />
            <div
              dangerouslySetInnerHTML={{
                __html: content.content,
              }}
            ></div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default NoticeDetail;
