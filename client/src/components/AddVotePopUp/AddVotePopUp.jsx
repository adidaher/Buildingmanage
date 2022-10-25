import React from "react";
import "./AddVotePopUp.css";

const AddVotePopUp = ({ setOpenModal, onClick }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = e.target.subject.value;
    const option_one = e.target.option_one.value;
    const option_two = e.target.option_two.value;
    onClick(subject, option_one, option_two);
    setOpenModal(false);
  };

  return (
    <div className="modalBackground">
      <form onSubmit={onSubmit}>
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              type="button"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <input
              name="subject"
              placeholder="Enter poll subject please"
              required
            ></input>
          </div>
          <div className="body">
            <input name="option_one" placeholder="Option 1" required />
            <input name="option_two" placeholder="Option 2" required />
          </div>
          <div className="footer">
            <button
              type="button"
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddVotePopUp;
