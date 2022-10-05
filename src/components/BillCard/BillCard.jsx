import React from "react";
import "./BillCard.css";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Arrow from "../../imges/arrow.svg";
const BillCard = (props) => {
  return (
    <div className="BillCard-container">
      <div className="Billcard-row1">
        <span className="Card-title">{props.title} Bill</span>
        <div className="Card-Status">
          {props.status ? (
            <CheckCircleOutlineOutlinedIcon className="Card-icon" />
          ) : (
            <InfoOutlinedIcon className="Card-icon" style={{ color: "red" }} />
          )}
        </div>
        <span className="Card-price">{props.price}</span>
      </div>
      <div className="Billcard-row2">
        <InsertInvitationOutlinedIcon className="date-icon" />
        <div className="Billcard-date">{props.date}</div>
        <button className="BillCard-Button">
          For Statics
          <img src={Arrow} className="BillCard-Arrow" />
        </button>
      </div>
    </div>
  );
};

export default BillCard;
