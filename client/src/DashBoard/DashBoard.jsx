import React from "react";
import "./DashBoard.css";
import LeftSide from "../components/LeftSide/LeftSide.jsx";
import RightSide from "../components/rightSide/RightSide.jsx";
import Navbar from "../components/Navbar/Navbar";
import Chart from "react-apexcharts";
import BillTable from "../components/BillTable/BillTable";

const DashBoard = () => {
  let sum = 0;
  /* const users = [
    {
      Apatment_number: "5B Floor No 4",
      User: "Adi Daher",
      Postal_code: "2490",
      Location: "NAZARETH",
      serial_number: "CYO21091270421",
      Payment_Method: "VISA 4567",
    },
    {
      Apatment_number: "2A Floor No 1",
      User: "Michael Diab",
      Postal_code: "2490",
      Location: "HAIFA",
      serial_number: "CYO21091270421",
      Payment_Method: "VISA 2591",
    },
  ];*/
  const data = [
    {
      number: 3,
      company: "Electric",
      Date: "1 / 5 / 2021",
      status: true,
      amount: 420,
    },
    {
      number: 3,
      company: "Water",
      Date: "1 / 5 / 2021",
      status: false,
      amount: 120,
    },
    {
      number: 3,
      company: "Building commette",
      Date: "1 / 5 / 2021",
      status: true,
      amount: 320,
    },
  ];
  data.forEach((item) => {
    sum += item.amount;
  });
  const series = [];
  const label = [];
  var i;
  for (i = 0; i < data.length; i++) {
    series[i] = data[i].amount;
    label[i] = data[i].company;
  }
  const options = {
    series: [2, 4, 2],
    labels: label,
    colors: ["#0D98FF", "#0450C2", "#00226C", "#C80000"],
    plotOptions: {
      pie: {
        expandOnclick: false,
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
      <LeftSide />
      <Navbar title={"DashBoard"} desc={"Building Updates"} />
      <RightSide />
      <div className="DashBoard-content">
        <div className="updates-card">
          <div className="DashBoardMessage">
            <span>You have {data.length} Bills for pay</span>
            <span>total {sum}</span>
          </div>
          <Chart
            className="donutchart"
            options={options}
            series={series}
            type="donut"
            width="100%"
            height={300}
          />
        </div>
        <BillTable tableData={data} />
      </div>
    </div>
  );
};

export default DashBoard;
