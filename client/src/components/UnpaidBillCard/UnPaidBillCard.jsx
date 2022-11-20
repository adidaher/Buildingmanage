import React from "react";
import "./UnPaidBillCard.css";port
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import InsertInvitationOutlinedIcon from "@mui/icons-material/InsertInvitationOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Arrow from "../../imges/arrow.svg";
import { useNavigate } from "react-router-dom";
const UnPaidBillCard = (props) => {
  const navigate = useNavigate();

  return (
    <div className="UnPaidBillCard-container">
      <div className="UnPaidBillCard-row1">
        <span className="UnPaidBillCard-title">{props.title} Bill</span>
        <div className="UnPaidBillCard-Status">
          {props.status ? (
            <CheckCircleOutlineOutlinedIcon className="UnPaidBillCard-icon" />
          ) : (
            <InfoOutlinedIcon
              className="UnPaidBillCard-icon"
              style={{ color: "red" }}
            />
          )}
        </div>
        <span className="UnPaidBillCard-price">{props.price}$</span>
      </div>

      <div className="UnPaidBillCard-row2">
        <InsertInvitationOutlinedIcon className="UnPaidBillCarddate-icon" />
        <div className="UnPaidBillCard-date">{props.date}</div>
        <button
          className="UnPaidBillCard-Button"
          onClick={() => props.onclickHandler(props.price)}
        >
          Pay Now
          <img src={Arrow} className="UnPaidBillCard-Arrow" />
        </button>
      </div>
    </div>
  );
};

export default UnPaidBillCard;
