import React from "react";
import "./Bills.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import BillCard from "../components/BillCard/BillCard";
import Chart from "../components/Chart/Chart";
import ChartTitle from "../components/ChartTitle/ChartTitle";
import BillTable from "../components/BillTable/BillTable";
const Bills = () => {
  return (
    <div className="home-container">
      <LeftSide />
      <Navbar title={"Bills"} desc={"Your Bills"} />
      <RightSide />
      <div className="Bills-content">
        <ChartTitle status={true} />
        <Chart />
        <BillTable />
      </div>
    </div>
  );
};

export default Bills;
