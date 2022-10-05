import React from "react";
import Chart from "../components/Chart/Chart";
import "./Statistics.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import ChartTitle from "../components/ChartTitle/ChartTitle";

const Statistics = () => {
  return (
    <div className="home-container">
      <LeftSide />
      <Navbar title={"Statistics"} desc={"Check Your Statistic"} />
      <RightSide />
      <div className="Statistics-content">
        <ChartTitle status={true} />
        <Chart />
      </div>
    </div>
  );
};

export default Statistics;
