const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "tnmbu7y340mkr2rs",
  host: "ltnya0pnki2ck9w8.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  password: "svtos4dpd0dgmbjb",
  database: "uheo6treuqryu8h7",
});

app.post("/addIssue", (req, res) => {
    const category = req.body.category;
    const desc = req.body.desc;
    const date = req.body.date;

    db.query(
      "INSERT INTO issues(`category`,`desc`, `date`) VALUES (?,?,?)",
      [category,desc,date],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });


  app.get("/getIssues", (req, res) => {
    db.query("SELECT * FROM issues", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });
  