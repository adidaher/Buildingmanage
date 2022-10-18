import React, { useState } from "react";
import "./Issues.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import IssuesCard from "../components/IssuesCard/IssuesCard";
import AddIssue from "../components/AddIssue/AddIssue";
const Issues = () => {
  return (
    <div className="home-container">
      <LeftSide />
      <Navbar title={"Issues"} desc={"All Issues"} />
      <RightSide />
      <div className="IssuesCard-content">
        <div className="AllIssues">
          <IssuesCard
            title={"Elevator Issue"}
            desc={"Elevator door is stuck"}
            handler={"Michel"}
            date={"19 Oct 2022"}
          />

          <IssuesCard
            title={"Lamp Issue"}
            desc={"Lamp in the 3rd floor isn't working"}
            handler={"Michel"}
            date={"19 Oct 2022"}
          />

          <IssuesCard
            title={"Electricity Issue"}
            desc={"No electricity in the building"}
            handler={"Michel"}
            date={"25 Sep 2022"}
          />

          <IssuesCard
            title={"Water Issue"}
            desc={"No water in the building"}
            handler={"Michel"}
            date={"05 Sep 2022"}
          />
        </div>

        <AddIssue />
      </div>
    </div>
  );
};

export default Issues;
