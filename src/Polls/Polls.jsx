import React from "react";
import "./Polls.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import VoteCard from "../components/Voting/VoteCard";

const Polls = () => {
  return (
    <div className="Polls-container">
      <LeftSide name={"Profile"} />
      <Navbar title={"Vote"} desc={"Please Vote what you preffer"} />
      <RightSide />
      <div className="Polls-content">
        <VoteCard
          id={"1"}
          question={"Which do you prefer"}
          optionOne={"javaScript"}
          optionOneEvg={45}
          optionTwo={"TypeScript"}
          optionTwoEvg={35}
        />
        <VoteCard
          id={"2"}
          question={"Which do you prefer"}
          optionOne={"javaScript"}
          optionOneEvg={40}
          optionTwo={"TypeScript"}
          optionTwoEvg={60}
        />
        <VoteCard
          id={"3"}
          question={"Which do you prefer"}
          optionOne={"javaScript"}
          optionOneEvg={25}
          optionTwo={"TypeScript"}
          optionTwoEvg={75}
        />
      </div>
    </div>
  );
};

export default Polls;
