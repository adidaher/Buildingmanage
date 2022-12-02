import React, { useEffect, useState } from "react";
import "./LeftSide.css";
import logo from "../../imges/logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import HowToVoteOutlinedIcon from "@mui/icons-material/HowToVoteOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";

const LeftSide = (props) => {
  const navigate = useNavigate();
  const [lan, setLan] = useState("eng");

  const handleLanguage = (value) => {
    localStorage.setItem("web_language", value);
    setLan(value);

    //console.log(config[lan].dashboard);
  };

  useEffect(() => {
    setLan(localStorage.getItem("web_language"));
  }, [lan]);

  return (
    <div className="leftSide-container">
      <div className="leftSide-logo">
        <img src={logo} alt="" />
      </div>

      <div
        className="sidebar-link"
        style={{ paddingTop: "25px" }}
        onClick={() => navigate("/DashBoard")}
      >
        <HomeOutlinedIcon className="icons" />
        <div className="sidebar-link title">{config[lan].dashboard}</div>
      </div>

      <div className="sidebar-link" onClick={() => navigate("/Issues")}>
        <ErrorOutlineOutlinedIcon className="icons" />
        <div>{config[lan].Issue}</div>
      </div>

      <div className="sidebar-link" onClick={() => navigate("/Polls")}>
        <HowToVoteOutlinedIcon className="icons" />
        <div className="sidebar-link title">{config[lan].Vote}</div>
      </div>

      <div className="sidebar-link" onClick={() => navigate("/statistics")}>
        <InsightsOutlinedIcon className="icons" />
        <div>{config[lan].Statistics}</div>
      </div>

      <div className="sidebar-link" onClick={() => navigate("/chat")}>
        <MailOutlinedIcon className="icons" />
        <div>{config[lan].Chat}</div>
      </div>

      <div className="sidebar-link" onClick={() => navigate("/profile")}>
        <Person2OutlinedIcon />
        <div>{config[lan].Profile}</div>
      </div>

      <hr className="leftside-HR" />

      <div className="leftside-font">{config[lan].Other}</div>

      <div className="sidebar-link" onClick={() => navigate("/addBill")}>
        <InfoOutlinedIcon className="icons" />
        <div>{config[lan].AddBill}</div>
      </div>
      <div className="sidebar-link">
        <SettingsOutlinedIcon className="icons" />
        <div>{config[lan].Setting}</div>
      </div>

      <div className="sidebar-link" style={{ paddingTop: "15px" }}>
        <LogoutOutlinedIcon className="icons" />
        <div>{config[lan].LogOut}</div>
      </div>
      <div className="language" style={{ paddingTop: "15px" }}>
        <button className="lan" onClick={() => handleLanguage("heb")}>
          עברית
        </button>
        <button className="lan" onClick={() => handleLanguage("eng")}>
          English
        </button>
        <button className="lan" onClick={() => handleLanguage("ar")}>
          العربيه
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
