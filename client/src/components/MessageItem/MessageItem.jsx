import React from "react";
import "./MessageItem.css";
import senderImg from "../../imges/senderImg.png";
const MessageItem = () => {
  return (
    <div className="MessageItem-container">
      <div className="message-info">
        <div className="message-senderProf">
          <img src={senderImg} alt="" className="senderProf-pic" />
        </div>
      </div>
      <div className="message-content">
        <p className="message-title"> THW - New message </p>
        <span className="sender-name">Adi Daher</span>
      </div>
    </div>
  );
};

export default MessageItem;
