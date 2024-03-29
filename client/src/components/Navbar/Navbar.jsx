import React, { useState, useEffect } from "react";
import "./Navbar.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Popover, Typography } from "@mui/material";
import Axios from "axios";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";

const Navbar = (props) => {
  const [anchor, setAnchor] = useState(null);
  const [notificationList, setnotification] = useState([]);
  const [notificationCount, setCount] = useState(0);
  const [lan, setlan] = useState(localStorage.getItem("web_language") || "eng");
  const navigate = useNavigate();
  const openPopover = (event) => {
    setAnchor(event.currentTarget);
  };

  async function closePopover(event) {
    console.log("hi" + notificationCount);
    setAnchor(false);
    await Axios.post(config.server_uri + "/readnotification").then(() => {
      console.log("notification count " + notificationCount);
      setAnchor(false);
      setnotification([]);
      setCount(0);
    });
  }

  const handleLanguage = (value) => {
    localStorage.setItem("web_language", value);
    setlan(value);
    window.location.reload();
  };
  /* useEffect(() => {
    Axios.get("http://localhost:3001/getnotification").then((response) => {
      setnotification(response.data);
      setCount(notificationList.length);
    });
  }, [notificationList, notificationCount]);*/

  /* async function getnotification() {
    await Axios.get("http://localhost:3001/getnotification").then(
      (response) => {
        setnotification(response.data);
        setCount(notificationList.length);
      }
    );
  }*/
  //getnotification();

  const openMenu = () => {
    document.getElementById("mainMenu").style.display = "flex";
    document.getElementById("closeMenu").style.display = "block";
    document.getElementById("mainMenu").style.top = "0";
  };
  const closeM = () => {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("closeMenu").style.display = "none";
  };

  return (
    <div className="Navbar-container">
      <div className="navbar-leftSection">
        <p>{props.title}</p>
        <span>{props.desc}</span>
      </div>
      <div className="navbar-rightSection">
        <div className="search-container">
          <input className="search-input" placeholder={config[lan].search} />
          <SearchIcon style={{ color: "gray", fontSize: "30px" }} />
          <div className="tooltip">{config[lan].search}</div>
        </div>

        <div className="navbar-notification">
          <div className="notifications-count">{notificationCount}</div>
          <button
            onClick={openPopover}
            style={{ background: "transparent", border: "none" }}
          >
            <NotificationsNoneOutlinedIcon className="notification-icon" />
          </button>

          <Popover
            open={Boolean(anchor)}
            anchorEl={anchor}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "left", horizontal: "bottom" }}
            onClose={closePopover}
          >
            {notificationList.length > 0 &&
              notificationList.map((item, id) => {
                return (
                  <Typography variant="h6" style={{ margin: "5px" }} key={id}>
                    {item.notification_message}
                  </Typography>
                );
              })}
            {notificationList.length === 0 && (
              <Typography variant="h6" style={{ margin: "5px" }}>
                No notification found
              </Typography>
            )}
          </Popover>
        </div>
        <button className="openMenu" onClick={openMenu}>
          <MenuOutlinedIcon />
        </button>
        <ul className="mainMenu" id="mainMenu">
          <li>
            <a href="#" onClick={() => navigate("/DashBoard")}>
              {config[lan].dashboard}
            </a>
          </li>
          <li>
            <a href="#" onClick={() => navigate("/statistics")}>
              {config[lan].Statistics}
            </a>
          </li>
          <li>
            <a href="#" onClick={() => navigate("/Polls")}>
              {config[lan].Polls}
            </a>
          </li>

          <li>
            <a href="#" onClick={() => navigate("/Issues")}>
              {config[lan].Issue}
            </a>
          </li>

          <li>
            <a href="#" onClick={() => navigate("/chat")}>
              {config[lan].Chat}
            </a>
          </li>

          <li>
            <a href="#" onClick={() => navigate("/profile")}>
              {config[lan].Profile}
            </a>
          </li>

          <li>
            <a href="#" onClick={() => navigate("/addbill")}>
              {config[lan].AddBill}
            </a>
          </li>

          <li>
            <a href="#" onClick={() => handleLanguage("heb")}>
              עברית
            </a>
          </li>

          <li>
            <a href="#" onClick={() => handleLanguage("eng")}>
              English
            </a>
          </li>

          <li>
            <a href="#" onClick={() => handleLanguage("ar")}>
              العربيه
            </a>
          </li>
        </ul>

        <button className="closeMenu" id="closeMenu" onClick={closeM}>
          <CloseOutlinedIcon style={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
