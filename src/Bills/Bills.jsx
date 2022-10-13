import React from "react";
import "./Bills.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import Chart from "../components/Chart/Chart";
import BillTable from "../components/BillTable/BillTable";
const Bills = () => {
  return (
    <div className="home-container">
      <LeftSide />
      <Navbar title={"Bills"} desc={"Your Bills"} />
      <RightSide />
      <div className="Bills-content">
        <Chart />
        <BillTable />
      </div>
    </div>
  );
};

export default Bills;
