import React from "react";
import "./BillTable.css";
const BillTable = () => {
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
          <tr>
            <td>
              <a href="#">INV__1001</a>
            </td>
            <td>Paragon</td>
            <td>1/5/2021</td>
            <td>
              <p className="status status-unpaid">Unpaid</p>
            </td>
            <td className="Amount">$520.18</td>
          </tr>
          <tr>
            <td>
              <a href="#">INV__1001</a>
            </td>
            <td>Paragon</td>
            <td>1/5/2021</td>
            <td>
              <p className="status status-pending">pending</p>
            </td>
            <td className="Amount">$520.18</td>
          </tr>
          <tr>
            <td>
              <a href="#">INV__1001</a>
            </td>
            <td>Paragon</td>
            <td>1/5/2021</td>
            <td>
              <p className="status status-paid">Paid</p>
            </td>
            <td className="Amount">$520.18</td>
          </tr>
          <tr>
            <td>
              <a href="#">INV__1001</a>
            </td>
            <td>Paragon</td>
            <td>1/5/2021</td>
            <td>
              <p className="status status-paid">Paid</p>
            </td>
            <td className="Amount">$520.18</td>
          </tr>

          <tr>
            <td>
              <a href="#">INV__1001</a>
            </td>
            <td>Paragon</td>
            <td>1/5/2021</td>
            <td>
              <p className="status status-paid">Paid</p>
            </td>
            <td className="Amount">$520.18</td>
          </tr>

          <tr>
            <td>
              <a href="#">INV__1001</a>
            </td>
            <td>Paragon</td>
            <td>1/5/2021</td>
            <td>
              <p className="status status-paid">Paid</p>
            </td>
            <td className="Amount">$520.18</td>
          </tr>

          <tr>
            <td>
              <a href="#">INV__1001</a>
            </td>
            <td>Paragon</td>
            <td>1/5/2021</td>
            <td>
              <p className="status status-paid">Paid</p>
            </td>
            <td className="Amount">$520.18</td>
          </tr>

          <tr>
            <td>
              <a href="#">INV__1001</a>
            </td>
            <td>Paragon</td>
            <td>1/5/2021</td>
            <td>
              <p className="status status-paid">Paid</p>
            </td>
            <td className="Amount">$520.18</td>
          </tr>

          <tr>
            <td>
              <a href="#">INV__1001</a>
            </td>
            <td>Paragon</td>
            <td>1/5/2021</td>
            <td>
              <p className="status status-paid">Paid</p>
            </td>
            <td className="Amount">$520.18</td>
          </tr>

          <tr>
            <td>
              <a href="#">INV__1001</a>
            </td>
            <td>Paragon</td>
            <td>1/5/2021</td>
            <td>
              <p className="status status-paid">Paid</p>
            </td>
            <td className="Amount">$520.18</td>
          </tr>

          <tr>
            <td>
              <a href="#">INV__1001</a>
            </td>
            <td>Paragon</td>
            <td>1/5/2021</td>
            <td>
              <p className="status status-paid">Paid</p>
            </td>
            <td className="Amount">$520.18</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillTable;
