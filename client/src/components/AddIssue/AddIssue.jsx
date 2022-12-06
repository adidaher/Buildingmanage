import React, { useState } from "react";
import "./AddIssue.css";
import config from "../../config.json";
import CloseIcon from "@mui/icons-material/Close";

const AddIssue = ({ addIssuehandler, setOpenModal }) => {
  const [lan, setlan] = useState(localStorage.getItem("web_language") || "eng");

  let isMobile = window.matchMedia(
    "only screen and (max-width: 760px)"
  ).matches;

  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="AddIssue-Container">
      <div className="card mt-50 mb-50">
        <div className="card-title mx-auto">
          <span>{config[lan].AddIssue}</span>
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

        <div className="Title">{config[lan].IssueCatagory}</div>
        <select id="choice" className="FilterOption">
          <option disabled selected>
            {config[lan].Selectissuecatagory}
          </option>
          <option className="FilterOption">Elevator Issue</option>
          <option className="FilterOption">Electricity Issue</option>
          <option className="FilterOption">Water Issue</option>
          <option className="FilterOption">Lamp Issue</option>
          <option className="FilterOption">Other</option>
        </select>

        <div className="IssueDesc">
          <div>{config[lan].IssueDescription}</div>

          <input
            placeholder={config[lan].PleaseInsertdescription}
            className="IssueDesInput"
            onChange={(event) => {
              setDesc(event.target.value);
            }}
          />

          <div className="expected">
            {config[lan].ExpectedFixDate}
            <input
              type="date"
              placeholder={config[lan].PleaseInsertdate}
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
            <b>{config[lan].ADD}</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddIssue;
