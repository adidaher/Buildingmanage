import React from "react";
import "./AddIssue.css";
import StarIcon from "@mui/icons-material/Star";
const AddIssue= () => {
  return (
    <div className="AddIssue-Container">
      <div className="card mt-50 mb-50">
        <div className="card-title mx-auto">Add Issue</div>

        <div className="Title">Issue Catagory</div>
        <select className="FilterOption">
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
        <div>
       Issue Description 
        </div>

        <input
          placeholder="Please insert description"
          className="IssueDesInput"
        />

        <div className="IssueHandler">
          

    
          Expected Fix Date 
        
        <input type="date"
          placeholder="Please insert date"
          className="IssueDateInput"
        
        />
        </div>
   </div>
    
          <button className="btn d-flex mx-auto">
            <b>ADD</b>
          </button>
       
      </div>
    </div>
  );
};

export default AddIssue;
