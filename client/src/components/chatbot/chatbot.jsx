import React, { useEffect, useState } from "react";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Icon = styled.div`
  position: fixed;
  z-index: 4;
  bottom: 2rem;
  right: 2rem;
  color: white;
  cursor: pointer;
  border: 1px solid inherit;
  background-color: #bd42f5;
  border-radius: 50%;
  padding: 1rem;
  -webkit-box-shadow: 6px 10px 5px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 10px 5px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 10px 5px 1px rgba(0, 0, 0, 0.75);

  &:hover {
    background-color: #a82ae2;
  }
`;

const Chatbot = () => {
  const [clicked, setClicked] = useState(false);

  const onClickChatbot = () => {
    setClicked(true);
  };

  const onClickCancel = () => {
    setClicked(false);
  };
  /*
  useEffect(() => {
    (function (d, m) {
      let kommunicateSettings = {
        appId: "2de166b4d51171dd8bf18bc55d9781d62",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      let s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      let h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);
 */
  /*
  return (
   
    );
    */ return (
    <div>
      {clicked ? (
        <div
          style={{
            position: "fixed",
            zIndex: "4",
            bottom: "2rem",
            right: "2rem",
          }}
        >
          <iframe
            width='400'
            height='600'
            allow='microphone;'
            src='https://console.dialogflow.com/api-client/demo/embedded/f92a205b-a728-4519-9473-5e5944176255'
          ></iframe>
          <div
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={onClickCancel}
          >
            x
          </div>
        </div>
      ) : (
        <Icon>
          <FontAwesomeIcon
            icon={faComment}
            size='2x'
            onClick={onClickChatbot}
          />
        </Icon>
      )}
    </div>
  );
};

export default Chatbot;
