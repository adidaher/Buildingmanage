import React, { useState } from "react";
import "./Chat.css";
import ChatCard from "../components/ChatCard/ChatCard";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import config from "../config.json";

export default function Chat() {
  const [lan, setlan] = useState(localStorage.getItem("web_language") || "eng");

  return (
    <div className="home-container">
      <LeftSide />
      <Navbar title={config[lan].Chat} desc={config[lan].Checkyourchat} />
      <RightSide />
      <div className="Chat-content">
        <ChatCard />
      </div>
    </div>
  );
}
