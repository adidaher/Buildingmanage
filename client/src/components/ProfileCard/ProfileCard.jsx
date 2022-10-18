import React from "react";
import "./ProfileCard.css";
import profile from "../../imges/profile.png";
const ProfileCard = () => {
  return (
    <div className="ProfileCard-container">
      <div className="CardLeftSide">
        <p>My Profile</p>
        <img src={profile} alt="" className="pofile-pic" />
        <span>Adi Daher</span>
      </div>

      <div className="CardRightside">
        <div className="ProfileCard-row">
          <div className="ProfileCard-sec1">
            <p>Email</p>
            <span>Adedaher5@gmail.com</span>
          </div>

          <div className="ProfileCard-sec1">
            <p>Postal Code</p>
            <span>1608914</span>
          </div>
        </div>

        <div className="ProfileCard-row">
          <div className="ProfileCard-sec1">
            <p>Phone</p>
            <span>0546683995</span>
          </div>

          <div className="ProfileCard-sec1">
            <p>Serial number</p>
            <span>CY0213216409217</span>
          </div>
        </div>

        <div className="ProfileCard-row">
          <div className="ProfileCard-sec1">
            <p>Family Members</p>
            <span>5</span>
          </div>

          <div className="ProfileCard-sec1">
            <p>Monethley Repayments</p>
            <span>2500$</span>
          </div>
        </div>

        <div className="ProfileCard-row">
          <div className="ProfileCard-sec1">
            <p>Aparment Number</p>
            <span>5B Floor No 4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
