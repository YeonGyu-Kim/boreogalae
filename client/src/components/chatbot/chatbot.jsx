import React, { useEffect } from "react";

const KommunicateChat = () => {
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

  return (
    <iframe
      width='350'
      height='430'
      allow='microphone;'
      src='https://console.dialogflow.com/api-client/demo/embedded/f92a205b-a728-4519-9473-5e5944176255'
    ></iframe>
  );
};

export default KommunicateChat;
