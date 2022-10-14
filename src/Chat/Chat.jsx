import React from "react";
import "./Chat.css";

import ChatCard from "../components/ChatCard/ChatCard";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";



export default function Chat() {
  return (
    <div className="home-container">
    <LeftSide />
    <Navbar title={"Chat"} desc={"Check your chat"} />
    <RightSide />
    <div className="Chat-content">
      <ChatCard />
    </div>
    </div>
  
  );
}


