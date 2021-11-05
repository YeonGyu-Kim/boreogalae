import React, { Component } from "react";

class Chatbot extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
  }

  render() {
    return <div></div>;
  }
}

export default Chatbot;
