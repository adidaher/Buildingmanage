import React from "react";
import "./Bills.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import Chart from "../components/Chart/Chart";
const Bills = () => {
  return (
    <div className="home-container">
      <LeftSide />
      <Navbar title={"Bills"} desc={"Your Bills"} />
      <RightSide />
      <div className="Bills-content">
        <Chart />
      </div>
    </div>
  );
};

export default Bills;
