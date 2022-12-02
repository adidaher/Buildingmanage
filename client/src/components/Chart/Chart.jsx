import React, { useState, useEffect } from "react";
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
import config from "../../config.json";
import NormalDistribution from "normal-distribution";
const Chart = () => {
  const [from, setFrom] = useState("2021-10");
  const [to, setTo] = useState("2022-01");
  const [average, setAverage] = useState("");
  const [deviation, setDeviation] = useState("");
  const [probability, setProbability] = useState("");

  const [type, setType] = useState("Water");
  const [color, setColor] = useState("#347AE2");
  const [waterData, SetWaterData] = useState([{}]);
  const [elecData, SetElecData] = useState([{}]);
  const [data, SetData] = useState([
    { date: "2021-10", amount: 400 },
    { date: "2021-11", amount: 500 },
    { date: "2021-12", amount: 450 },
    { date: "2022-01", amount: 500 },
  ]);

  let isMobile = window.matchMedia(
    "only screen and (max-width: 760px)"
  ).matches;

  const getWaterBills = () => {
    Axios.get(config.server_uri + "/getWaterBills").then((response) => {
      SetWaterData(response.data);
    });
  };

  const getElecBills = () => {
    Axios.get(config.server_uri + "/getElecBills").then((response) => {
      SetElecData(response.data);
    });
  };

  const handleFrom = (event) => {
    setFrom(event.target.value);
    db1 = db;
  };

  const handleTo = (event) => {
    setTo(event.target.value);
  };



  function handleChange(e) {
    setType(e.target.value);
  }

  const editData = () => {
    getWaterBills();
    getElecBills();
    if (type === "Electricity") {
      console.log(elecData);
      db = elecData;
      setColor("#FF9500");
    } else {
      console.log(waterData);
      db = waterData;
      setColor("#347AE2");
    }

    let start = db.findIndex((obj) => obj.date === from);

    let end = db.findIndex((obj) => obj.date === to);
    db1 = db;

    db1 = db1.slice(start, end + 1);

    SetData(db1);
  };

  const getStandardDeviation = (arr, usePopulation = true) => {
    const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    return Math.sqrt(
      arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
        (arr.length - (usePopulation ? 0 : 1))
    );
  };



  const handlePrediction = () => {
    let avg=0;
    let standard=0;
    getWaterBills();
    for(let i=0;i<waterData.length;i++)
    {
      avg+=waterData[i].amount;
      console.log(waterData);
    }
avg=Math.round(avg/waterData.length);
    setAverage(`Average: ${avg}₪`);
    let amount=[];
    for(let i=0;i<waterData.length;i++)
    {
      amount[i]=waterData[i].amount;
    }
    standard=getStandardDeviation(amount);
    standard=Math.round(standard);
    setDeviation(`Standard Deviation: ${standard}₪`)
 
   
    let normDist =  new NormalDistribution(avg,standard);
    let prob= 2*(Math.min(normDist.cdf(700),1-normDist.cdf(700)));

    setProbability(`Probability: ${prob.toFixed(4)}`)
  };

  let db;
  let db1;

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
          <input
            id="from"
            type="month"
            defaultValue={"2021-10"}
            onChange={handleFrom}
          ></input>
        </div>
        <div className="to">
          <label>To:</label>
          <input
            id="to"
            type="month"
            defaultValue={"2022-01"}
            onChange={handleTo}
          ></input>
        </div>
        <button id="calc" onClick={editData} className="calco">
          Calculate
        </button>
      </div>
      <div className="charts">
        {isMobile && (
          <BarChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 15,
              left: 0,
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
        )}

        {!isMobile && (
          <BarChart
            width={1000}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 15,
              left: 0,
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
        )}

        {isMobile && (
          <LineChart width={400} height={200} data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line dataKey="amount" fill={color} background={{ fill: "#eee" }} />
          </LineChart>
        )}
        {!isMobile && (
          <LineChart width={1000} height={300} data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line dataKey="amount" fill={color} background={{ fill: "#eee" }} />
          </LineChart>
        )}
      </div>
      <div className="predict">
        <button id="pred" onClick={handlePrediction}>
          Predict next bill
        </button>
        <h2>{average}</h2>
        <h2>{deviation}</h2>
        <h2>{probability}</h2>
 
      </div>
    </div>
  );
};

export default Chart;
