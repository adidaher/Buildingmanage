import React, { useState } from "react";
import "./BillTable.css";
import config from "../../config.json";
const BillTable = (props) => {
  const [lan, setlan] = useState(localStorage.getItem("web_language") || "eng");

  return (
    <div className="BillTable-container">
      <table className="tablee">
        <thead>
          <th>{config[lan].Invoice}</th>
          <th>{config[lan].Billtype}</th>
          <th>{config[lan].DueDate}</th>
          <th>{config[lan].Status}</th>
          <th>{config[lan].Amount}</th>
        </thead>
        <tbody>
          {props.tableData.map((item, i) => (
            <tr key={i}>
              <td className="rownum">
                <a className="aaa">{i + 1}</a>
              </td>
              {item.type === "Cleaning" && <td>{config[lan].Cleaninig} </td>}
              {item.type === "Electricity" && (
                <td>{config[lan].Electricity} </td>
              )}
              {item.type === "Water" && <td>{config[lan].Water} </td>}

              <td>{item.date}</td>
              <td>
                {item.status === "unpaid" ? (
                  <p className="status status-unpaid">{config[lan].Unpaid}</p>
                ) : (
                  <p className="status status-paid">{config[lan].Paid}</p>
                )}
              </td>
              <td className="Amount">{item.amount}₪</td>
              <td>
                {item.status === "unpaid" ? (
                  <button className="paynowBtn">{config[lan].PayNow}</button>
                ) : (
                  <button style={{ display: "none" }}></button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillTable;
