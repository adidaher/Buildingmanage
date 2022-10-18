import React from "react";
import "./VoteCard.css";

const VoteCard = (props) => {
  const voteToFirst = () => {
    console.log("hi");
    document.getElementById(props.id + "1").style.backgroundColor = "#009578";
    document.getElementById(props.id + "2").style.fontWeight = "bold";
  };

  const voteToSec = () => {
    console.log("hi");
    document.getElementById(props.id + "3").style.backgroundColor = "#009578";
    document.getElementById(props.id + "4").style.fontWeight = "bold";
  };
  return (
    <div className="poll">
      <div className="poll__title">{props.question}</div>
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
          <span className="poll__percentage">{props.optionOneEvg}%</span>
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
          <span className="poll__percentage">{props.optionTwoEvg}%</span>
        </div>
      </div>
    </div>
  );
};

export default VoteCard;
