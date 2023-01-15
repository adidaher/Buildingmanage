import React, { useState } from "react";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import config from "../config.json";
import Reply from "../components/Reply/Reply";
import Comments from "../components/Comments/Comments";
import "./Newchat.css";
import data from "../config.json";
import { useEffect } from "react";
function Newchat() {
  const [lan, setlan] = useState(localStorage.getItem("web_language") || "eng");
  const [comments, setComment] = useState(data.comments);

  useEffect(() => {}, [comments]);
  return (
    <div>
      <LeftSide />
      <Navbar title={config[lan].Chat} desc={config[lan].Checkyourchat} />
      <RightSide />
      <div className="Newchat-content" id="Newchat-content">
        {comments.map((element, i) => (
          <Comments
            key={i}
            username={element.user.username}
            createdAt={element.createdAt}
            content={element.content}
            imagess={element.user.image}
          />
        ))}

        <Reply commentss={comments} handleComments={setComment} />
      </div>
      {window.scrollTo(0, 100000)}
    </div>
  );
} //**// */

export default Newchat;
