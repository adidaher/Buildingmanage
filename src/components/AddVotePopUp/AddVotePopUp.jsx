import React from "react";
import "./AddVotePopUp.css";

const AddVotePopUp = ({ setOpenModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <input placeholder="Enter poll subject please"></input>
        </div>
        <div className="body">
          <input placeholder="Option 1" />
          <input placeholder="Option 2" />
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddVotePopUp;
