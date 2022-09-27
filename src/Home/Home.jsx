import React from "react";
import "./Home.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import ProfileCard from "../components/ProfileCard/ProfileCard";

const home = () => {
  return (
    <div className="home-container">
      <LeftSide />
      <Navbar title={"Manage Your Apartment"} desc={"Manage Your Account"} />
      <RightSide />
      <div className="Home-content">
        <ProfileCard />
      </div>
    </div>
  );
};

export default home;
