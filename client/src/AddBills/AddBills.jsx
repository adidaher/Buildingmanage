import React, { Component } from "react";
import "./AddBills.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import InsertPageBreakOutlinedIcon from "@mui/icons-material/InsertPageBreakOutlined";
import Axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import config from "../config.json";
class AddBills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      lan: localStorage.getItem("web_language") || "eng",
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    console.log(document.getElementById("BillAmount").value);
    e.preventDefault();
    this.setState({ loading: true });
    var ee = document.getElementById("options");
    var text = e.options[ee.selectedIndex].text;
    const selecteddate = new Date(
      document.getElementById("selectedMonth").value
    );
    console.log(document.getElementById("BillAmount").value);
    Axios.post(config.server_uri + "/addbill", {
      bill_id: document.getElementById("billID").value,
      bill_type: text,
      bill_date: selecteddate.getFullYear() + "-" + selecteddate.getMonth(),
      bill_status: "unpaid",
      bill_amount: document.getElementById("BillAmount").value,
    }).then(() => {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    });
  }

  render() {
    const toDay = new Date().toISOString().substring(0, 10);
    return (
      <div className="AddBills-container">
        <LeftSide />
        <Navbar
          title={config[this.state.lan].ADDBILL}
          desc={config[this.state.lan].PleaseFillInbilldetails}
        />
        <RightSide />
        <div className="AddBills-content">
          <div className="AddBill-component">
            <div className="AddBill-Create">
              <span>Created By Adi Daher</span>
              <span>
                {config[this.state.lan].Openedat} {toDay}
              </span>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="AddBillDetails">
                <span>{config[this.state.lan].BillID}</span>
                <input placeholder="#IV24984" id="billID" required />
              </div>
              <div className="AddBillDetails">
                <span>{config[this.state.lan].BillName}</span>
                <select className="options" id="options" required>
                  <option disabled selected defaultValue>
                    {config[this.state.lan].Select}
                  </option>
                  <option>Water</option>
                  <option>Electricity</option>
                  <option>Committe</option>
                </select>
              </div>

              <div className="AddBillDetails">
                <span>{config[this.state.lan].DueDate}</span>
                <input
                  type="date"
                  style={{ width: "219px" }}
                  defaultValue={toDay}
                  id="selectedMonth"
                  required
                />
              </div>
              <hr className="AddBillHR" />
              <div className="AddBillDetails billamount">
                <span>{config[this.state.lan].BillAmount}</span>
                <input placeholder="320$" id="BillAmount" required />
              </div>
              <div className="addfile">
                {config[this.state.lan].PleasescanBillBarcode}
                <button>
                  <InsertPageBreakOutlinedIcon style={{ color: "black" }} />
                </button>
              </div>

              <div className="Submit-btn">
                {!this.state.loading && (
                  <button className="sbtn" type="submit">
                    <span id="submitbtn">{config[this.state.lan].Submit}</span>
                  </button>
                )}
                {this.state.loading && <CircularProgress />}
              </div>
            </form>
          </div>

          <p className="noteMessage">
            <div>{config[this.state.lan].Notes}:</div>
            {config[this.state.lan].Notes2}
          </p>
        </div>
      </div>
    );
  }
}

export default AddBills;
