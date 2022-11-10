import React, { useState, useEffect } from "react";
import "./Navbar.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Popover, Typography } from "@mui/material";
import Axios from "axios";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [anchor, setAnchor] = useState(null);
  const [notificationList, setnotification] = useState([]);
  const [notificationCount, setCount] = useState(0);
  const navigate = useNavigate();
  const openPopover = (event) => {
    setAnchor(event.currentTarget);
  };

  async function closePopover(event) {
    console.log("hi" + notificationCount);
    setAnchor(false);
    await Axios.post("http://localhost:3001/readnotification").then(() => {
      console.log("notification count " + notificationCount);
      setAnchor(false);
      setnotification([]);
      setCount(0);
    });
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/getnotification").then((response) => {
      setnotification(response.data);
      setCount(notificationList.length);
    });
  }, [notificationList, notificationCount]);

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
          <input className="search-input" placeholder="Search" />
          <SearchIcon style={{ color: "gray", fontSize: "30px" }} />
          <div class="tooltip">Search</div>
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
            {notificationList.length == 0 && (
              <Typography variant="h6" style={{ margin: "5px" }}>
                No notification found
              </Typography>
            )}
          </Popover>
        </div>
        <button class="openMenu" onClick={openMenu}>
          <MenuOutlinedIcon />
        </button>
        <ul className="mainMenu" id="mainMenu">
          <li>
            <a href="#" onClick={() => navigate("/DashBoard")}>
              DashBoard
            </a>
          </li>
          <li>
            <a href="#" onClick={() => navigate("/statistics")}>
              statistics
            </a>
          </li>
          <li>
            <a href="#" onClick={() => navigate("/Polls")}>
              Polls
            </a>
          </li>

          <li>
            <a href="#" onClick={() => navigate("/Issues")}>
              Issues
            </a>
          </li>

          <li>
            <a href="#" onClick={() => navigate("/chat")}>
              chat
            </a>
          </li>

          <li>
            <a href="#" onClick={() => navigate("/profile")}>
              profile
            </a>
          </li>
        </ul>

        <button class="closeMenu" id="closeMenu" onClick={closeM}>
          <CloseOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
