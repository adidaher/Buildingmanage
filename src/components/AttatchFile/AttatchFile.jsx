import React from "react";
import "./AttatchFile.css";
import camera from "../../imges/camera.png";
import attatch from "../../imges/attach.png";
const AttatchFile = () => {
  return (
    <div className="attatchfile-container">
      <div className="attatchfile-title">Upload File or Photo</div>
      <div className="attatchfile-iconContianer">
        <button className="addphotoButton">
          <img src={camera} className="attatchfile-icon" />
        </button>
        <button className="editButton">
          <img src={attatch} className="attatchfile-icon" />
        </button>
      </div>
      <div className="ReportButtonContainer">
        <button className="ReportButton">Report</button>
      </div>
    </div>
  );
};

export default AttatchFile;
