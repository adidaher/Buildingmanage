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

const LeftSide = () => {
  return (
    <div className="leftSide-container">
      <div className="leftSide-logo">
        <img src={logo} alt="" />
      </div>

      <div class="sidebar-link" style={{ paddingTop: "25px" }}>
        <HomeOutlinedIcon className="icons" />
        <div>Dashborad</div>
      </div>

      <div class="sidebar-link">
        <ErrorOutlineOutlinedIcon className="icons" />
        <div>Report for issue</div>
      </div>

      <div class="sidebar-link">
        <HowToVoteOutlinedIcon className="icons" />
        <div>Vote</div>
      </div>

      <div class="sidebar-link">
        <InsightsOutlinedIcon className="icons" />
        <div>Statistics</div>
      </div>

      <div class="sidebar-link">
        <MailOutlinedIcon className="icons" />
        <div>Inbox</div>
      </div>

      <div class="sidebar-link">
        <Person2OutlinedIcon className="icons" style={{ color: "#FCBA2D" }} />
        <div>Inbox</div>
      </div>

      <hr className="leftside-HR" />

      <div className="leftside-font">Other</div>

      <div class="sidebar-link">
        <InfoOutlinedIcon className="icons" />
        <div>Help & Support</div>
      </div>
      <div class="sidebar-link">
        <SettingsOutlinedIcon className="icons" />
        <div>Setting</div>
      </div>

      <div class="sidebar-link" style={{ paddingTop: "15px" }}>
        <LogoutOutlinedIcon className="icons" />
        <div>Log Out</div>
      </div>
    </div>
  );
};

export default LeftSide;
