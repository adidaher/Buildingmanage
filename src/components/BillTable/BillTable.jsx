import React from "react";
import "./BillTable.css";
const BillTable = (props) => {
  return (
    <div className="BillTable-container">
      <table>
        <thead>
          <th>Invoice</th>
          <th>Company</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Amount</th>
        </thead>
        <tbody>
          {props.tableData.map((item, i) => (
            <tr key={i}>
              <td>
                <a href="#">{i + 1}</a>
              </td>
              <td>{item.company} </td>
              <td>{item.Date}</td>
              <td>
                {item.status == false ? (
                  <p className="status status-unpaid">Unpaid</p>
                ) : (
                  <p className="status status-paid">Paid</p>
                )}
              </td>
              <td className="Amount">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillTable;
