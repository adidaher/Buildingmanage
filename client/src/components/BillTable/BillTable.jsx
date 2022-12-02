import React from "react";
import "./BillTable.css";
const BillTable = (props) => {
  return (
    <div className="BillTable-container">
      <table className="tablee">
        <thead>
          <th>Invoice</th>
          <th>Bill type</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Amount</th>
        </thead>
        <tbody>
          {props.tableData.map((item, i) => (
            <tr key={i}>
              <td className="rownum">
                <a className="aaa">{i + 1}</a>
              </td>
              <td>{item.type} </td>
              <td>{item.date}</td>
              <td>
                {item.status === "unpaid" ? (
                  <p className="status status-unpaid">Unpaid</p>
                ) : (
                  <p className="status status-paid">Paid</p>
                )}
              </td>
              <td className="Amount">{item.amount}₪</td>
              <td>
                {item.status === "unpaid" ? (
                  <button className="paynowBtn">Pay Now</button>
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
