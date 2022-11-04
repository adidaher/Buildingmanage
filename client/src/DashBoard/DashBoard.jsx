import React, { Component } from "react";
import "./DashBoard.scss";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import Chart from "react-apexcharts";
import BillTable from "../components/BillTable/BillTable";

import Axios from "axios";
import LoadingComp from "../components/LoadingComp/LoadingComp";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      label: [],
      series: [],
      unPaidBillsAmount: 0,
      unPaidBills: 0,
      loading: true,
    };
    this.setBills = this.setBills.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.setunPaidBillsAmount = this.setunPaidBillsAmount.bind(this);
    this.setunPaidBills = this.setunPaidBills.bind(this);
  }
  setBills(data) {
    this.setState({ bills: data });
  }
  setunPaidBillsAmount(amount) {
    this.setState({ unPaidBillsAmount: amount });
  }
  setunPaidBills(conut) {
    this.setState({ unPaidBills: conut });
  }

  getAllVotes = () => {
    Axios.get("http://localhost:3001/retrieveAllBills").then((response) => {
      this.setState({ bills: response.data });
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    Axios.get("http://localhost:3001/retrieveAllBills").then((response) => {
      this.setState({ bills: response.data }, () => {
        var i;
        var j = 0;
        const labels = [];
        const seriess = [];
        let unPaidAmount = 0;
        let unPaidBill = 0;
        for (i = 0; i < this.state.bills.length; i++) {
          if (this.state.bills[i].bill_status === "unpaid") {
            seriess[j] = this.state.bills[i].bill_amount;
            labels[j] = this.state.bills[i].bill_type;
            unPaidBill++;
            unPaidAmount += this.state.bills[i].bill_amount;
            j++;
          }
        }

        this.setState({ unPaidBillsAmount: unPaidAmount });
        this.setState({ unPaidBills: unPaidBill });
        this.setState({ label: labels });
        this.setState({ series: seriess });
        this.setunPaidBillsAmount(unPaidAmount);

        setTimeout(() => {
          this.setState({ loading: false });
        }, 500);
      });
    });
  }

  render() {
    const options = {
      series: [2, 4, 2],
      labels: this.state.label,
      colors: ["#0D98FF", "#0450C2", "#00226C", "#C80000"],
      plotOptions: {
        pie: {
          expandOnclick: true,
          donut: {
            size: "60px",
            labels: {
              show: true,
              showAlways: true,
              fontSize: "34px",
              color: "#2787AB",
            },
          },
        },
      },
    };
    return (
      <div className="Inbox-container">
        {this.state.loading && <LoadingComp />}
        <LeftSide />
        <Navbar title={"DashBoard"} desc={"Building Updates"} />
        <RightSide />
        <div className="DashBoard-content">
          <div className="updates-card">
            {this.state.series.length > 0 && (
              <>
                <div className="DashBoardMessage">
                  <span>You have {this.state.unPaidBills} Bills for pay</span>
                  <span>total {this.state.unPaidBillsAmount}</span>
                </div>
                <Chart
                  className="donutchart"
                  options={options}
                  series={this.state.series}
                  type="donut"
                  width="100%"
                  height={300}
                />
              </>
            )}
          </div>
          <BillTable tableData={this.state.bills} />
        </div>
      </div>
    );
  }
}

export default DashBoard;
