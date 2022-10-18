import React from "react";
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

const LeftSide = (props) => {
  // document.getElementById(props.name).style.backgroundColor = "#FCBA2D";
  /* console.log(props.name);
  console.log(props.name + "2");
  document.getElementById(props.name).style.color = "#FCBA2D";
  document.getElementById(props.name + "2").style.color = "#FCBA2D";*/
  const navigate = useNavigate();
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
        <div>Dashborad</div>
      </div>

      <div className="sidebar-link" onClick={() => navigate("/Issues")}>
        <ErrorOutlineOutlinedIcon className="icons" />
        <div>Issue</div>
      </div>

      <div className="sidebar-link" onClick={() => navigate("/Polls")}>
        <HowToVoteOutlinedIcon className="icons" />
        <div>Vote</div>
      </div>

      <div className="sidebar-link" onClick={() => navigate("/statistics")}>
        <InsightsOutlinedIcon className="icons" />
        <div>Statistics</div>
      </div>

      <div className="sidebar-link" onClick={() => navigate("/chat")}>
        <MailOutlinedIcon className="icons" />
        <div>Chat</div>
      </div>

      <div className="sidebar-link" onClick={() => navigate("/profile")}>
        <Person2OutlinedIcon />
        <div>Profile</div>
      </div>

      <hr className="leftside-HR" />

      <div className="leftside-font">Other</div>

      <div className="sidebar-link" onClick={() => navigate("/addBill")}>
        <InfoOutlinedIcon className="icons" />
        <div>Add Bill</div>
      </div>
      <div className="sidebar-link">
        <SettingsOutlinedIcon className="icons" />
        <div>Setting</div>
      </div>

      <div className="sidebar-link" style={{ paddingTop: "15px" }}>
        <LogoutOutlinedIcon className="icons" />
        <div>Log Out</div>
      </div>
    </div>
  );
};

export default LeftSide;
