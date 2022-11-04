import React, { useState, useEffect } from "react";
import "./Polls.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import VoteCard from "../components/Voting/VoteCard";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import AddVotePopUp from "../components/AddVotePopUp/AddVotePopUp";
import Axios from "axios";

const Polls = () => {
  const [cards, setCards] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/retrieveAllVotes").then((response) => {
      setCards(response.data);
    });
  }, []);
  const getAllVotes = () => {
    Axios.get("http://localhost:3001/retrieveAllVotes").then((response) => {
      setCards(response.data);
    });
  };
  const onAddNewVoteHandle = (subject, option_one, option_two) => {
    Axios.post("http://localhost:3001/addPoll", {
      vote_num: cards.length + 1,
      vote_question: subject,
      vote_option_one: option_one,
      vote_optionone_number: 0,
      vote_option_two: option_two,
      vote_optiontwo_number: 0,
    });
    getAllVotes();
  };
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
        {cards.map((card, i) => (
          <VoteCard
            key={i}
            id={card.vote_num}
            question={card.vote_question}
            optionOne={card.vote_option_one}
            optionOneEvg={card.vote_optionone_number}
            optionTwo={card.vote_option_two}
            optionTwoEvg={card.vote_optiontwo_number}
            votinghandler={getAllVotes}
          />
        ))}

        {modalOpen && (
          <AddVotePopUp
            setOpenModal={setModalOpen}
            onClick={onAddNewVoteHandle}
          />
        )}
      </div>
    </div>
  );
};

export default Polls;
