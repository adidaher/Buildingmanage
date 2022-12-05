import React, { useState } from "react";
import "./ProfileCard.css";
import profile from "../../imges/profile.png";
import config from "../../config.json";

const ProfileCard = () => {
  const [lan, setlan] = useState(localStorage.getItem("web_language") || "eng");
  return (
    <div className="ProfileCard-container">
      <div className="CardLeftSide">
        <p>{config[lan].MyProfile}</p>
        <img src={profile} alt="" className="pofile-pic" />
        <span>Adi Daher</span>
      </div>

      <div className="CardRightside">
        <div className="ProfileCard-row">
          <div className="ProfileCard-sec1">
            <p>{config[lan].Email}</p>
            <span>Adedaher5@gmail.com</span>
          </div>

          <div className="ProfileCard-sec1">
            <p>{config[lan].Postalcode}</p>
            <span>1608914</span>
          </div>
        </div>

        <div className="ProfileCard-row">
          <div className="ProfileCard-sec1">
            <p>{config[lan].Phone}</p>
            <span>0546683995</span>
          </div>

          <div className="ProfileCard-sec1">
            <p>{config[lan].SerialNumber}</p>
            <span>CY0213216409217</span>
          </div>
        </div>

        <div className="ProfileCard-row">
          <div className="ProfileCard-sec1">
            <p>{config[lan].FamilyMembers}</p>
            <span>5</span>
          </div>

          <div className="ProfileCard-sec1">
            <p>{config[lan].MonthleyRepayments}</p>
            <span>2500$</span>
          </div>
        </div>

        <div className="ProfileCard-row">
          <div className="ProfileCard-sec1">
            <p>{config[lan].Apatmentnumber}</p>
            <span>{config[lan].location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
