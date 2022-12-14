import React, { useState } from "react";
import "./Chart.css";
import {
  Line,
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
import regression from "regression";
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
  const [lan, setlan] = useState(localStorage.getItem("web_language") || "eng");
  let width = window.innerWidth;
  const [data, SetData] = useState([
    { date: "2021-10", amount: 400 },
    { date: "2021-11", amount: 500 },
    { date: "2021-12", amount: 450 },
    { date: "2022-01", amount: 500 },
    { date: "2022-02(pred)", amount: 478 },
  ]);

  let isMobile = window.matchMedia(
    "only screen and (max-width: 768px)"
  ).matches;

  const getWaterBills = async () => {
    const result = await Axios.get(config.server_uri + "/getWaterBills").then(
      (response) => {
        SetWaterData(response.data);
      }
    );
    return result;
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

  const editData = async () => {
    if (type === "Electricity") {
      const result = await Axios.get(
        config.server_uri + "/getElectricityBills"
      ).then((response) => {
        db = response.data;
        setColor("#FF9500");
      });
    } else {
      const result = await Axios.get(config.server_uri + "/getWaterBills").then(
        (response) => {
          db = response.data;
          setColor("#347AE2");
        }
      );
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
      arr
        .reduce((acc, val) => acc.concat((val - mean) ** 2), [])
        .reduce((acc, val) => acc + val, 0) /
        (arr.length - (usePopulation ? 0 : 1))
    );
  };

  const handlePrediction = async () => {
    let avg = 0;
    let standard = 0;
    Axios.get(config.server_uri + "/getWaterBills").then((response) => {
      const waterData1 = response.data;
      for (let i = 0; i < waterData1.length; i++) {
        avg += waterData1[i].amount;
        console.log(waterData1);
      }
      avg = Math.round(avg / waterData1.length);
      console.log("average:" + avg);
      setAverage(`Average: ${avg}₪`);
      let amount = [];
      for (let i = 0; i < waterData1.length; i++) {
        amount[i] = waterData1[i].amount;
      }
      standard = getStandardDeviation(amount);
      standard = Math.round(standard);
      setDeviation(`Standard Deviation: ${standard}₪`);

      let linearPoints = [
        [300, 350],
        [400, 420],
      ];
      let regressionModel = regression.linear(linearPoints);
      let predictx = regressionModel.predict(avg)[1];
      predictx = Math.round(predictx);
      console.log(predictx);

      let normDist = new NormalDistribution(avg, standard);

      let prob =
        2 * Math.min(normDist.cdf(predictx), 1 - normDist.cdf(predictx));
      console.log(prob);

      setProbability(`Probability: ${prob.toFixed(4)}`);
    });
  };

  let db;
  let db1;

  return (
    <div className="Chart-container">
      <span className="water">
        <h1>{config[lan].Bills}</h1>
      </span>
      <div className="BillFilter">
        <div className="billType">
          <label>{config[lan].Billtype}</label>
          <select className="optionssss" id="opt" onChange={handleChange}>
            <option disabled>Water</option>
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
          <div>
            <button id="calc" onClick={editData} className="calco">
              {config[lan].Calculate}
            </button>
          </div>
        </div>
      </div>

      <div className="charts">
        {isMobile && (
          <BarChart
            width={width * 0.8}
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
            width={width * 0.5}
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
          <LineChart width={width * 0.8} height={300} data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line dataKey="amount" fill={color} background={{ fill: "#eee" }} />
          </LineChart>
        )}
        {!isMobile && (
          <LineChart width={width * 0.5} height={300} data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line dataKey="amount" fill={color} background={{ fill: "#eee" }} />
          </LineChart>
        )}
      </div>
      <div className="predict">
        <button id="pred" onClick={handlePrediction}>
          {config[lan].GetPredictionDetails}
        </button>
        <h2>{average}</h2>
        <h2>{deviation}</h2>
        <h2>{probability}</h2>
      </div>
    </div>
  );
};

export default Chart;
