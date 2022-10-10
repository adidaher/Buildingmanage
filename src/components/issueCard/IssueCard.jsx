import React from "react";
import "./IssueCard.css";
import StarIcon from "@mui/icons-material/Star";
const IssueCard = () => {
  return (
    <div className="issue-card">
      <div className="card-title">Discribe the issue:</div>
      <div className="issue-catagory">
        <div className="filterTitle">Issue Catagory</div>
        <select className="FilterOption">
          <option disabled selected>
            Select issue catagory
          </option>
          <option className="FilterOption">option1</option>
          <option className="FilterOption">option2</option>
          <option className="FilterOption">option3</option>
          <option className="FilterOption">option4</option>
          <option className="FilterOption">option5</option>
        </select>
      </div>

      <div className="IssueDesc">
        <div className="desc">
          Issue Describe <StarIcon style={{ color: "red", fontSize: "14px" }} />
        </div>
        <input
          placeholder="Please insert description"
          className="IssueDesInput"
        />
      </div>

      <div className="IssueDetails">
        <div className="AppatmentNum">
          <div className="DetailsTitle">
            Apartment Number
            <StarIcon style={{ color: "red", fontSize: "14px" }} />
          </div>
          <input placeholder="Apartment Number" className="AppatmentNumInput" />
        </div>

        <div className="ZipCode">
          <div className="DetailsTitle">
            Zip Code
            <StarIcon style={{ color: "red", fontSize: "14px" }} />
          </div>
          <input placeholder="ZipCode" className="ZipCodeInput" />
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
