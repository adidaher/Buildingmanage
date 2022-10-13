const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  user: "tnmbu7y340mkr2rs",
  host: "ltnya0pnki2ck9w8.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  password: "svtos4dpd0dgmbjb",
  database: "uheo6treuqryu8h7",
});

app.listen(3001, () => {
  db.query("SELECT * FROM bills", (err, result) => {
    console.log(result);
  });
  console.log("Yey, your server is running on port 3001");
});
