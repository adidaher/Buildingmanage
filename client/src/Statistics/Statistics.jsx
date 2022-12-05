import React, { useState } from "react";
import Chart from "../components/Chart/Chart";
import "./Statistics.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import config from "../config.json";

const Statistics = () => {
  const [lan, setlan] = useState(localStorage.getItem("web_language") || "eng");

  return (
    <div className="home-container">
      <LeftSide />
      <Navbar
        title={config[lan].Statistics}
        desc={config[lan].CheckYourStatistic}
      />
      <RightSide />
      <div className="Statistics-content">
        <Chart />
      </div>
    </div>
  );
};

export default Statistics;
