import React, { useState } from "react";
import "./AddBills.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import InsertPageBreakOutlinedIcon from "@mui/icons-material/InsertPageBreakOutlined";

const AddBills = () => {
  return (
    <div className="AddBills-container">
      <LeftSide name={"Profile"} />
      <Navbar title={"ADD BILL"} desc={"Please Fill In bill details"} />
      <RightSide />
      <div className="AddBills-content">
        <div className="AddBill-component">
          <BoltOutlinedIcon className="companyIcon" />
          <div className="AddBill-Create">
            <span>Created By Adi Daher</span>
            <span>Opened at 18/10/2022</span>
          </div>
          <div className="AddBillDetails">
            <span>Bill ID</span>
            <input placeholder="#IV24984" />
          </div>
          <div className="AddBillDetails">
            <span>Bill Name</span>
            <select className="options">
              <option disabled selected>
                Select
              </option>
              <option>Water</option>
              <option>Electricity</option>
              <option>Committe</option>
            </select>
          </div>

          <div className="AddBillDetails">
            <span>Due Date</span>
            <input type="month" style={{ width: "219px" }} />
          </div>
          <hr className="AddBillHR" />
          <div className="AddBillDetails billamount">
            <span>Bill Amount</span>
            <input placeholder="320$" />
          </div>
          <div className="addfile">
            Please scan your bill
            <button>
              <InsertPageBreakOutlinedIcon />
            </button>
          </div>
        </div>

        <p className="noteMessage">
          <div>Notes:</div>
          Please Make Sure all the data that has been filled matching the
          orginal Bill
        </p>
      </div>
    </div>
  );
};

export default AddBills;
