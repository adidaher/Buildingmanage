import React from "react";
import "./InboxList.css";
import MessageItem from "../MessageItem/MessageItem";

const InboxList = () => {
  return (
    <div className="InboxList-container">
      <div className="InboxList-Title">
        <span className="List-Title">Inbox - Message</span>
      </div>
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
    </div>
  );
};

export default InboxList;
