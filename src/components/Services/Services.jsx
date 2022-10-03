import React from "react";
import "./Services.css";
import clean from "../../imges/clean.png";
import electric from "../../imges/electric.png";
import water from "../../imges/water.png";
import wifi from "../../imges/wifi.png";
const Services = () => {
  return (
    <div className="Services-containers">
      <div className="Services-Title">Available Services</div>
      <div className="available-services">
        <div className="service">
          <div
            className="service-background"
            style={{ backgroundColor: "#10BCF2" }}
          >
            <img alt="" src={water} className="service-icon" />
          </div>
          <span>Water</span>
        </div>
        <div className="service">
          <div
            className="service-background"
            style={{ backgroundColor: "#FEAF4B" }}
          >
            <img alt="" src={electric} className="service-icon" />
          </div>
          <span>Electric</span>
        </div>
        <div className="service">
          <div
            className="service-background"
            style={{ backgroundColor: "#2DB1FD" }}
          >
            <img alt="" src={wifi} className="service-icon" />
          </div>
          <span>Wi-Fi</span>
        </div>
        <div className="service">
          <div
            className="service-background"
            style={{ backgroundColor: "#959FFD" }}
          >
            <img alt="" src={clean} className="service-icon" />
          </div>
          <span>Cleaning</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
