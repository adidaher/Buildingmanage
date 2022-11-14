import React from "react";
import "./AddIssue.css";
import Axios from "axios";
import { useState } from "react";

const AddIssue = ({ addIssuehandler }) => {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="AddIssue-Container">
      <div className="card mt-50 mb-50">
        <div className="card-title mx-auto">Add Issue</div>

        <div className="Title">Issue Catagory</div>
        <select id="choice" className="FilterOption">
          <option disabled selected>
            Select issue catagory
          </option>
          <option className="FilterOption">Elevator Issue</option>
          <option className="FilterOption">Electricity Issue</option>
          <option className="FilterOption">Water Issue</option>
          <option className="FilterOption">Lamp Issue</option>
          <option className="FilterOption">Other</option>
        </select>

        <div className="IssueDesc">
          <div>Issue Description</div>

          <input
            placeholder="Please insert description"
            className="IssueDesInput"
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          />

          <div className="expected">
            Expected Fix Date
            <input
              type="date"
              placeholder="Please insert date"
              className="IssueDateInput"
              onChange={(event) => {
                setDate(event.target.value);
              }}
            />
          </div>
        </div>

        <button
          className="btn d-flex mx-auto"
          onClick={() => {
            addIssuehandler(
              document.getElementById("choice").value,
              desc,
              date
            );
          }}
        >
          <b>ADD</b>
        </button>
      </div>
    </div>
  );
};

export default AddIssue;
