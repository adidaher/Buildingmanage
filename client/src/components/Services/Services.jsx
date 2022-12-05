import React, { useState } from "react";
import "./Services.css";
import clean from "../../imges/clean.png";
import electric from "../../imges/electric.png";
import water from "../../imges/water.png";
import wifi from "../../imges/wifi.png";
import config from "../../config.json";
const Services = () => {
  const [lan, setlan] = useState(localStorage.getItem("web_language") || "eng");
  return (
    <div className="Services-containers">
      <div className="Services-Title">{config[lan].AvailableServices}</div>
      <div className="available-services">
        <div className="service">
          <div
            className="service-background"
            style={{ backgroundColor: "#10BCF2" }}
          >
            <img alt="" src={water} className="service-icon" />
          </div>
          <span>{config[lan].Water}</span>
        </div>
        <div className="service">
          <div
            className="service-background"
            style={{ backgroundColor: "#FEAF4B" }}
          >
            <img alt="" src={electric} className="service-icon" />
          </div>
          <span>{config[lan].Electricity}</span>
        </div>
        <div className="service">
          <div
            className="service-background"
            style={{ backgroundColor: "#2DB1FD" }}
          >
            <img alt="" src={wifi} className="service-icon" />
          </div>
          <span>{config[lan].cleaning}</span>
        </div>
        <div className="service">
          <div
            className="service-background"
            style={{ backgroundColor: "#959FFD" }}
          >
            <img alt="" src={clean} className="service-icon" />
          </div>
          <span>{config[lan].wifi}</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
