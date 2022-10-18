import React, { useState } from "react";
import "./Polls.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import VoteCard from "../components/Voting/VoteCard";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import AddVotePopUp from "../components/AddVotePopUp/AddVotePopUp";

const Polls = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="Polls-container">
      <LeftSide name={"Profile"} />
      <Navbar title={"Vote"} desc={"Please Vote what you preffer"} />
      <RightSide />
      <div className="Polls-content">
        <div className="addPolls">
          <button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            <LibraryAddOutlinedIcon />
          </button>
        </div>
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

        {modalOpen && <AddVotePopUp setOpenModal={setModalOpen} />}
      </div>
    </div>
  );
};

export default Polls;
