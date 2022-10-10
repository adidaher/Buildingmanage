import React, { useState } from "react";
import "./Chart.css";
import {
  PieChart,Line,
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
  const [data,SetData]=useState([{}]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [selectedMonth, setSelectedMonth] = useState("");
  const [prediction, setPrediction] = useState("");
  const [elecPrediction, setElecPrediction] = useState("");

  const handleFrom = event => {
    setFrom(event.target.value);
    db1=db;
    let start=db.findIndex(obj => obj.name === from);
    /*console.log(start);
    console.log(from);*/

  }
  

  const handleTo = event => {
   
    setTo(event.target.value); 
  }

  const handleSelectedMonth = event => {
   
    setSelectedMonth(event.target.value); 
  }

  const editData = ()=> {
    let start=db.findIndex(obj => obj.name === from);
    let end=db.findIndex(obj => obj.name === to);
    db1=db;
   
    db1=db1.slice(start, end+1);

   SetData(db1);
    
 }
 const handlePrediction = ()=> {
  let monthIndex=db.findIndex(obj => obj.name === selectedMonth);
  setPrediction(`Expected water bill: ${db[monthIndex].Shekel}₪`);
  setElecPrediction(`Expected electricity bill: ${db[monthIndex].Shekel}₪`);

 }


 
  let  db = [
    { name: "2021-10", Shekel: 500 },
    { name: "2021-11", Shekel: 300 },
    { name: "2021-12", Shekel: 600 },
    { name: "2022-01", Shekel: 700 },
    { name: "2022-02", Shekel: 500 },
    { name: "2022-03", Shekel: 500 },
    { name: "2022-04", Shekel: 400 },
    { name: "2022-05", Shekel: 200 },
    { name: "2022-06", Shekel: 200 },
    { name: "2022-07", Shekel: 400 },
    { name: "2022-08", Shekel: 450 },
    { name: "2022-09", Shekel: 570 },
    { name: "2022-10", Shekel: 520 },
    { name: "2022-11", Shekel: 490 },
    { name: "2022-12", Shekel: 510 },




  ];
  let db1=db;
 
  
 /*
<span className="elec">
  {" "}
  <h1>Electricity Bills</h1>
</span>
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
*/
  return (
    <div className="Chart-container">
      <div className="bar">
        <span className="water">
          <h1>Water Bills</h1>
        </span>

        <label>From:</label>
         <input type="month"  onChange={handleFrom}></input>

         <label>To:</label>
         <input type="month"  onChange={handleTo}></input>

        <button onClick={editData}>Calculate</button>

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


        
<LineChart width={1000} height={300} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line dataKey="Shekel" fill="#FF9500" background={{ fill: "#eee" }} />
  </LineChart>


<div className="predict">
        <label>Choose Month:</label>
         <input type="month" onChange={handleSelectedMonth}></input>
        <button onClick={handlePrediction} >Predict Bill</button>
        <h2>{prediction}</h2>
        <h2 className="elec">{elecPrediction}</h2>
</div>

        </div>
        </div>

  );
};

export default Chart;
   