import React from "react";
import "./IssuesCard.css";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import Arrow from "../../imges/arrow.svg";

const IssuesCard = (props) => {
  return (
    <div className="IssuesCard-container">
      <div className="IssuesCard-row1">
        <span className="IssuesCard-title">{props.category}</span>

        <span className="IssuesCard-desc">{props.desc}</span>
      </div>

      <div className="IssuesCard-row2">
        <InsertInvitationOutlinedIcon className="IssuesCarddate-icon" />
        <div className="IssuesCard-date">Expected fix date : {props.date}</div>
        <button
          className="IssuesCard-Button"
          onClick={() => props.onclickHandler(props.price)}
        >
          Fixed
          <img src={Arrow} className="IssuesCard-Arrow" />
        </button>
      </div>
    </div>
  );
};

export default IssuesCard;
