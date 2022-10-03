import React from "react";
import "./Inbox.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import InboxList from "../components/InboxList/InboxList";

const Inbox = () => {
  return (
    <div className="Inbox-container">
      <LeftSide />
      <Navbar title={"INBOX"} desc={"Building Support"} />
      <RightSide />
      <div className="inbox-content">
        <InboxList />
      </div>
    </div>
  );
};

export default Inbox;
