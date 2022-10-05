import React from "react";
import "./ChartTitle.css";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
const ChartTitle = (props) => {
  return (
    <div className="ChartTitle-Container">
      <div className="ChartTitle-row1">
        <span className="ChartTitle-title">Water Bill</span>
        <div className="ChartTitle-Status">
          {props.status ? (
            <CheckCircleOutlineOutlinedIcon className="ChartTitle-icon" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChartTitle;
