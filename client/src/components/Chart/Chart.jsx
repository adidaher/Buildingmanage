import React, { useEffect, useState } from "react";
import "./Chart.css";
import {
  Line,
  Cell,
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
  const [to, setTo] = useState("");
  const [average, setAverage] = useState("");
  const [deviation, setDeviation] = useState("");
  const [probability, setProbability] = useState("");
  const [probabilityNUM, setProbabilityNUM] = useState(0);
  const [probability1, setProbability1] = useState("");

  const [predictionn, setPredictionn] = useState(0);

  const [type, setType] = useState("Water");
  const [color, setColor] = useState("#347AE2");
  const [waterData, SetWaterData] = useState([{}]);
  const [elecData, SetElecData] = useState([{}]);
  const [lan, setlan] = useState(localStorage.getItem("web_language") || "eng");
  let width = window.innerWidth;
  const [data, SetData] = useState([]);
  const [nextmonth, setnextmonth] = useState();

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
    if (event.target.value < "2021-10")
      window.alert("please choose month bigger than 2021-10");
    else {
      setFrom(event.target.value);
      db1 = db;
    }
  };

  const handleTo = (event) => {
    if (event.target.value > "2023-01")
      window.alert("please choose month less than 2023-02");
    else {
      setTo(event.target.value);
    }
  };

  function handleChange(e) {
    setType(e.target.value);
  }

  const editData = async () => {
    if (type === "Electricity") {
      const result = await Axios.get(config.server_uri + "/getElecBills").then(
        (response) => {
          db = response.data;
          setColor("#FF9500");
        }
      );
    } else {
      const result = await Axios.get(config.server_uri + "/getWaterBills").then(
        (response) => {
          db = response.data;
          setColor("#347AE2");
        }
      );
    }
    let start = 0;
    for (let i = 0; i < db.length; i++) {
      if (db[i].date >= from) {
        start = i;
        break;
      }
    }
    let end = 0;
    for (let i = db.length - 1; i >= 0; i--) {
      if (db[i].date <= to) {
        end = i;
        break;
      }
    }

    db1 = db;

    db1 = db1.slice(start, end + 1);

    SetData(db1);
    console.log("bbbb");
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

  useEffect(() => {
    let avg = 0;
    let standard = 0;
    let count = 0;

    Axios.get(config.server_uri + "/getWaterBills").then((response) => {
      const waterbills = response.data;
      setTo(waterbills[waterbills.length - 1].date);
      let current = waterbills[waterbills.length - 1].date.split("-")[1];
      let nextd = 0;
      let nextdate = parseFloat(current);
      if (nextdate < 9) {
        nextdate += 2;
        nextd = "2023-0" + nextdate;
        setnextmonth(nextd);
      } else if (nextdate === 12) {
        nextdate = 2;
        nextd = "2023-0" + nextdate;
        setnextmonth(nextd);
      } else {
        nextdate += 2;

        nextd = "2023-" + nextdate;
        setnextmonth(nextd);
      }
      const waterData1 = response.data;
      console.log(waterData1 + "responseee");
      while (count < waterData1.length) {
        avg += waterData1[count].amount;
        count++;
      }
      console.log(count);

      avg = Math.round(avg / count);
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
        [300, 320],
        [400, 420],
      ];
      let regressionModel = regression.linear(linearPoints);
      let predictx = regressionModel.predict(avg)[1];
      console.log(predictx + "preddd");
      predictx = Math.round(predictx);
      setPredictionn(predictx);

      let normDist = new NormalDistribution(avg, standard);

      let prob =
        2 *
        Math.min(
          normDist.cdf(waterData1[waterData1.length - 1].amount),
          1 - normDist.cdf(waterData1[waterData1.length - 1].amount)
        );
      setProbabilityNUM(prob);
      console.log(prob + "prob");
      setProbability(`Probability: ${prob.toFixed(4)}`);
      prob = 2 * Math.min(normDist.cdf(predictx), 1 - normDist.cdf(predictx));
      setProbability1(`Probability: ${prob.toFixed(4)}`);
      console.log(prob + "prob");

      SetData([...response.data, { date: nextd + "(pred)", amount: predictx }]);
    });
  }, []);

  let db;
  let db1;

  // handlePrediction();
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
          <label>{config[lan].From}:</label>
          <input
            id="from"
            type="month"
            defaultValue={"2021-10"}
            onChange={handleFrom}
          ></input>
        </div>
        <div className="to">
          <label>{config[lan].To}:</label>
          <input
            id="to"
            type="month"
            defaultValue={"2023-02"}
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
            <Bar dataKey="amount" fill={color} background={{ fill: "#eee" }}>
              {data.map((entry, index) => (
                <Cell
                  fill={entry.date.includes("pred") ? "#FF9500" : color}
                  // for this, we make the hovered colour #2B5CE7, else its opacity decreases to 20%
                />
              ))}
            </Bar>
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
            <Bar dataKey="amount" fill={color} background={{ fill: "#eee" }}>
              {data.map((entry, index) => (
                <Cell
                  fill={entry.date.includes("pred") ? "#FF9500" : color}
                  // for this, we make the hovered colour #2B5CE7, else its opacity decreases to 20%
                />
              ))}
            </Bar>
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
        {probabilityNUM >= 0.02 ? (
          <h2>{to + " Calculations:(good bill)"}</h2>
        ) : (
          <h2>{to + " Calculations:(suspension bill)"}</h2>
        )}
        <h2>{average}</h2>
        <h2>{deviation}</h2>
        <h2>{probability}</h2>
        <br></br>

        <h2>{nextmonth + " Calculations:"}</h2>
        <h2>{"Our prediction:" + predictionn + "₪"}</h2>
        <h2>{probability1}</h2>
      </div>
    </div>
  );
};
//suspension bill
export default Chart;
