import React, { useState } from "react";
import "./Issues.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import IssuesCard from "../components/IssuesCard/IssuesCard";
import AddIssue from "../components/AddIssue/AddIssue";
import Axios from "axios";


const Issues = () => {

  const [issueList, setIssueList] = useState([]);
  const getIssues = () => {
    Axios.get("http://localhost:3001/getIssues").then((response) => {  
      setIssueList(response.data);
    });
  };


  return (
    <div className="home-container">
      <LeftSide />
      <Navbar title={"Issues"} desc={"All Issues"} />
      <RightSide />
      <div className="IssuesCard-content">
        <div className="AllIssues">
        {getIssues()}

        {issueList.map((data,id)=>{
      return <IssuesCard
      category={data.category}
      desc={data.desc}
      date={data.date}
    />
        })}
 
        </div>

    <AddIssue />
      </div>
    </div>
  );
};

export default Issues;
