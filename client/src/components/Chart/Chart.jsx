import React, { useState,useEffect } from "react";
import "./Chart.css";
import {
  PieChart,
  Line,
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
import Axios from "axios";

const Chart = () => {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [prediction, setPrediction] = useState("");
  const [elecPrediction, setElecPrediction] = useState("");
  const [type, setType] = useState("Water");
  const [color, setColor] = useState("#347AE2");
    const [waterData, SetWaterData] = useState([{}]);
    const [elecData, SetElecData] = useState([{}]);
    const [data, SetData] = useState([{}])
  
    const getWaterBills = () => {
      Axios.get("http://localhost:3001/getWaterBills").then((response) => {     
        SetWaterData(response.data);
      });
    };
    useEffect(() => {
      Axios.get("http://localhost:3001/getWaterBills").then((response) => {
        SetWaterData(response.data);
      });
    }, []);

    const getElecBills = () => {
      Axios.get("http://localhost:3001/getElecBills").then((response) => {
        SetElecData(response.data);
      });
    };
    useEffect(() => {
      Axios.get("http://localhost:3001/getElecBills").then((response) => {
        SetElecData(response.data);
      });
    }, []);

  const handleFrom = (event) => {
    setFrom(event.target.value);
    db1 = db;
 
  };

  const handleTo = (event) => {
    setTo(event.target.value);
  };

  const handleSelectedMonth = (event) => {
    setSelectedMonth(event.target.value);
  };

  function handleChange(e) {
    setType(e.target.value);
  }

  const editData = () => {
    if (type === "Electricity") {
console.log(elecData);
      db = elecData;
      setColor("#FF9500");
    }
     else {
      console.log(waterData);
      db = waterData;
      setColor("#347AE2");
    }
    
    let start = db.findIndex((obj) => obj.date === from);

    let end = db.findIndex((obj) => obj.date  === to);
    db1 = db;

    db1 = db1.slice(start, end + 1);

    SetData(db1);
  };
  const handlePrediction = () => {
    let monthIndex = db.findIndex((obj) => obj.name === selectedMonth);
    setPrediction(`Expected water bill: ${db[monthIndex].Shekel}₪`);
    setElecPrediction(`Expected electricity bill: ${db[monthIndex].Shekel}₪`);
  };

 
  let waterdb = [
    { name: "2021-10", Shekel: 500 },

  ];

  let db = getWaterBills();
  let db1=getElecBills();
 db1 = db;

  return (
    <div className="Chart-container">
      <span className="water">
        <h1>{type} Bills</h1>
      </span>
      <div className="BillFilter">
        <div className="billType">
          <label>Bill Type</label>
          <select className="options" onChange={handleChange}>
            <option>Water</option>
            <option>Electricity</option>
          </select>
        </div>
        <div className="from">
          <label>From:</label>
          <input id="from" type="month" onChange={handleFrom}></input>
        </div>
        <div className="to">
          <label>To:</label>
          <input id="to" type="month" onChange={handleTo}></input>
        </div>
        <button id="calc" onClick={editData} className="calco">
          Calculate
        </button>
      </div>
      <div className="charts">
        <BarChart
          width={1000}
          height={500}
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
            dataKey="date"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="amount" fill={color} background={{ fill: "#eee" }} />
        </BarChart>

        <LineChart width={1000} height={300} data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line dataKey="amount" fill={color} background={{ fill: "#eee" }} />
        </LineChart>
      </div>
      <div className="predict">
        <label className="monthChoose">Choose Month:</label>
        <input
          id="predictMonth"
          type="month"
          onChange={handleSelectedMonth}
        ></input>
        <button id="pred" onClick={handlePrediction}>
          Predict Bill
        </button>
        <h2>{prediction}</h2>
        <h2 className="elec">{elecPrediction}</h2>
      </div>
    </div>
  );
};

export default Chart;
