import React from "react";
import "./ReportIssue.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import IssueCard from "../components/IssueCard/IssueCard.jsx";
import AttatchFile from "../components/AttatchFile/AttatchFile";

const ReportIssue = () => {
  return (
    <div className="ReportIssue-container">
      <div className="stam">
        <LeftSide />
        <Navbar
          title={"Report For Issue"}
          desc={"Please chose the issue catagory"}
        />
        <RightSide />
        <div className="ReportIssue-content">
          <IssueCard />
          <AttatchFile />
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;
