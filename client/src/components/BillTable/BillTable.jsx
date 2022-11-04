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
            <tr key={item.bill_id}>
              <td>
                <a href="#">{i + 1}</a>
              </td>
              <td>{item.bill_type} </td>
              <td>{item.bill_date}</td>
              <td>
                {item.bill_status == "unpaid" ? (
                  <p className="status status-unpaid">Unpaid</p>
                ) : (
                  <p className="status status-paid">Paid</p>
                )}
              </td>
              <td className="Amount">{item.bill_amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillTable;
