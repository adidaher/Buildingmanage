import React, { useState } from "react";
import "./Home.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Services from "../components/Services/Services";
import config from "../config.json";
const Home = () => {
  const [lan, setlan] = useState(localStorage.getItem("web_language") || "eng");
  return (
    <div className="home-container">
      <LeftSide />
      <Navbar
        title={config[lan].ManageYourApartment}
        desc={config[lan].ManageYourAccount}
      />
      <RightSide />
      <div className="Home-content">
        <ProfileCard />
        <Services />
      </div>
    </div>
  );
};

export default Home;
