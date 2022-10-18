import React from "react";
import "./RightSide.css";
import logo from "../../imges/logo.png";

const RightSide = () => {
  return (
    <div className="RightSide-container">
      <div className="RightSide-sidebar">YOUR APARTMENT DETAILS</div>
      <div className="RightSide-sidebar" style={{ color: "#FCBA2D" }}>
        Details
      </div>
      <div className="row">
        <div className="sec1">
          <p>Apatment number</p>
          <span>5B Floor No 4</span>
        </div>
        <div className="sec1">
          <p>Owner name</p>
          <span>Adi Daher</span>
        </div>
      </div>

      <div className="row">
        <div className="sec1">
          <p>Postal code</p>
          <span>2490</span>
        </div>
        <div className="sec1">
          <p>Location</p>
          <span>NAZARETH</span>
        </div>
      </div>

      <div className="row">
        <div className="sec1">
          <p>Serial Number</p>
          <span>CYO21091270421</span>
        </div>
        <div className="sec1">
          <p>Payment Method</p>
          <span>VISA 4567</span>
        </div>
      </div>

      <div className="row">
        <div className="sec1">
          <p>Monthley Repayments</p>
          <span>2500$</span>
        </div>
        <div className="sec1">
          <p>Total Repayments</p>
          <span>74658$</span>
        </div>
      </div>

      <div className="row">
        <div className="sec1">
          <p>OverDue Limit</p>
          <span>10$</span>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
