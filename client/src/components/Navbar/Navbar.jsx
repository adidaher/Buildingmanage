import React from "react";
import "./Navbar.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = (props) => {
  return (
    <div className="Navbar-container">
      <div className="navbar-leftSection">
        <p>{props.title}</p>
        <span>{props.desc}</span>
      </div>
      <div className="navbar-rightSection">
        <div className="search-container">
          <input className="search-input" placeholder="Search" />
          <SearchIcon style={{ color: "gray", fontSize: "30px" }} />
        </div>

        <div className="navbar-notification">
          <div className="notifications-count">3</div>
          <NotificationsNoneOutlinedIcon className="notification-icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
