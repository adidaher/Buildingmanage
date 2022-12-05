import React, { useState } from "react";
import "./RightSide.css";
import config from "../../config.json";

const RightSide = () => {
  const [lan, setlan] = useState(localStorage.getItem("web_language") || "eng");

  return (
    <div className="RightSide-container">
      <div className="RightSide-sidebar">
        {config[lan].YOURAPARTMENTDETAILS}
      </div>
      <div className="RightSide-sidebar" style={{ color: "#FCBA2D" }}>
        {config[lan].Details}
      </div>
      <div className="row">
        <div className="sec1">
          <p>{config[lan].Apatmentnumber}</p>
          <span>{config[lan].location}</span>
        </div>
        <div className="sec1">
          <p>{config[lan].OwnerName}</p>
          <span>Adi Daher</span>
        </div>
      </div>

      <div className="row">
        <div className="sec1">
          <p>{config[lan].Postalcode}</p>
          <span>2490</span>
        </div>
        <div className="sec1">
          <p>{config[lan].Location}</p>
          <span>{config[lan].NAZARETH}</span>
        </div>
      </div>

      <div className="row">
        <div className="sec1">
          <p>{config[lan].SerialNumber}</p>
          <span>CYO21091270421</span>
        </div>
        <div className="sec1">
          <p>{config[lan].PaymentMethod}</p>
          <span>VISA 4567</span>
        </div>
      </div>

      <div className="row">
        <div className="sec1">
          <p>{config[lan].MonthleyRepayments}</p>
          <span>2500$</span>
        </div>
        <div className="sec1">
          <p>{config[lan].TotalRepayments}</p>
          <span>74658$</span>
        </div>
      </div>

      <div className="row">
        <div className="sec1">
          <p>{config[lan].OverDueLimit}</p>
          <span>10$</span>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
