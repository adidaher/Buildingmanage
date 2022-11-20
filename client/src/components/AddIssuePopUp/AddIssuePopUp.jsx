import React from "react";
import AddIssue from "../AddIssue/AddIssue";
import "./AddIssuePopUp.css";
const AddIssuePopUp = ({ addIssuehandler, setOpenModal }) => {
  return (
    <div className="addIssuePop-container">
      <AddIssue addIssuehandler={addIssuehandler} setOpenModal={setOpenModal} />
    </div>
  );
};

export default AddIssuePopUp;
