import React from "react";
import "./AddIssue.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const AddIssue = ({ addIssuehandler, setOpenModal }) => {
  let isMobile = window.matchMedia(
    "only screen and (max-width: 760px)"
  ).matches;

  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="AddIssue-Container">
      <div className="card mt-50 mb-50">
        <div className="card-title mx-auto">
          <span>Add Issue</span>
          {isMobile && (
            <div className="close-viewer">
              <CloseIcon
                className="close-button"
                onClick={() => {
                  setOpenModal(false);
                }}
              />
            </div>
          )}
        </div>

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
        <div className="buttonSub">
          <button
            className="btn d-flex mx-auto"
            onClick={() => {
              addIssuehandler(
                document.getElementById("choice").value,
                desc,
                date
              );
              setOpenModal(false);
            }}
          >
            <b>ADD</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddIssue;
