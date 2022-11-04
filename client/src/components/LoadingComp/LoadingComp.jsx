import React from "react";
import "./LoadingComp.css";
import Loading from "../../imges/loading.gif";
const LoadingComp = () => {
  return (
    <div className="loading-wrapper">
      <img className="loading-gif" src={Loading} alt="" />
    </div>
  );
};

export default LoadingComp;
