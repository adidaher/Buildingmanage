import React from "react";
import "./Bills.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import BillCard from "../components/BillCard/BillCard";
const Bills = () => {
  return (
    <div className="home-container">
      <LeftSide />
      <Navbar title={"Bills"} desc={"Your Bills"} />
      <RightSide />
      <div className="Bills-content">
        <BillCard
          title={"Water"}
          status={true}
          price={"250$"}
          date={"19 Sep 2022"}
        />
        <BillCard
          title={"Electricity"}
          status={false}
          price={"180$"}
          date={"19 Sep 2022"}
        />
        <BillCard
          title={"Water"}
          status={true}
          price={"300$"}
          date={"19 July 2022"}
        />
        <BillCard
          title={"Electricity"}
          status={true}
          price={"315$"}
          date={"19 July 2022"}
        />
        <BillCard
          title={"Water"}
          status={false}
          price={"180$"}
          date={"19 May 2022"}
        />
        <BillCard
          title={"Water"}
          status={true}
          price={"450$"}
          date={"19 July 2022"}
        />
        <BillCard
          title={"Electricity"}
          status={true}
          price={"600$"}
          date={"19 July 2022"}
        />
        <BillCard
          title={"Water"}
          status={false}
          price={"950$"}
          date={"19 May 2022"}
        />
        <BillCard
          title={"Water"}
          status={true}
          price={"750$"}
          date={"19 May 2022"}
        />
      </div>
    </div>
  );
};

export default Bills;
