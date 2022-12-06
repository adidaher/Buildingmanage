import React from "react";
import "./VoteCard.css";
import Axios from "axios";
import config from "../../config.json";
const VoteCard = (props) => {
  const voteToFirst = () => {
    document.getElementById(props.id + "1").style.backgroundColor = "#009578";
    document.getElementById(props.id + "2").style.fontWeight = "bold";
    Axios.post(config.server_uri + "/updateoptionone", {
      count: props.optionOneEvg + 1,
      voteNum: props.id,
    });
    props.votinghandler();
  };

  async function voteToSec() {
    await Axios.post(config.server_uri + "/updateoptiontwo", {
      count: props.optionTwoEvg + 1,
      voteNum: props.id,
    });
    await props.votinghandler();

    document.getElementById(props.id + "3").style.backgroundColor = "#009578";
    document.getElementById(props.id + "4").style.fontWeight = "bold";
  }
  const DeletePoll = () => {
    Axios.post(config.server_uri + "/deletePoll", {
      voteNum: props.id,
    }).then(() => props.votinghandler());
  };
  return (
    <div className="poll">
      <div className="poll__title">
        {props.question}
        <button className="DeletePollBtn" onClick={DeletePoll}>
          X
        </button>
      </div>

      <div className="poll__option">
        <div
          className="poll__option-fill"
          id={props.id + "1"}
          style={{ width: props.optionOneEvg + "%" }}
        ></div>
        <div className="poll__option-info" id={props.id + "2"}>
          <span className="poll__label" onClick={voteToFirst}>
            {props.optionOne}
          </span>
          <span className="poll__percentage">{props.optionOneEvg}</span>
        </div>
      </div>

      <div className="poll__option">
        <div
          className="poll__option-fill"
          id={props.id + "3"}
          style={{ width: props.optionTwoEvg + "%" }}
        ></div>
        <div className="poll__option-info" id={props.id + "4"}>
          <span className="poll__label" onClick={voteToSec}>
            {props.optionTwo}
          </span>
          <span className="poll__percentage">{props.optionTwoEvg}</span>
        </div>
      </div>
    </div>
  );
};

export default VoteCard;
