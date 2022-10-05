import React from "react";
import "./Chart.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  LineChart,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "May", Shekel: 500 },
    { name: "July", Shekel: 400 },
    { name: "Sep", Shekel: 200 },
  ];
  return (
    <div className="Chart-container">
      <div className="bar">
        <span className="water">
          <h1>Water Bills</h1>
        </span>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Shekel" fill="#347AE2" background={{ fill: "#eee" }} />
        </BarChart>

        <span className="elec">
          {" "}
          <h1>Electricity Bills</h1>
        </span>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Shekel" fill="#FF9500" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default Chart;
