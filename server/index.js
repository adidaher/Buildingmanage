const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "ltnya0pnki2ck9w8.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  user: "tnmbu7y340mkr2rs",
  password: "svtos4dpd0dgmbjb",
  database: "uheo6treuqryu8h7",
});

app.get("/retrieveAllVotes", (req, res) => {
  db.query("SELECT * FROM votes", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/addPoll", (req, res) => {
  const vote_num = req.body.vote_num;
  const vote_question = req.body.vote_question;
  const vote_option_one = req.body.vote_option_one;
  const vote_optionone_number = req.body.vote_optionone_number;
  const vote_option_two = req.body.vote_option_two;
  const vote_optiontwo_number = req.body.vote_optiontwo_number;
  db.query(
    "INSERT INTO votes (vote_num, vote_question, vote_option_one, vote_optionone_number, vote_option_two, vote_optiontwo_number) VALUES (?,?,?,?,?,?)",
    [
      vote_num,
      vote_question,
      vote_option_one,
      vote_optionone_number,
      vote_option_two,
      vote_optiontwo_number,
    ],
    (err, result) => {
      if (err) {
        console.log("error");
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/updateoptionone", (req, res) => {
  const count = req.body.count;
  const vote_num = req.body.voteNum;
  db.query(
    "UPDATE votes SET vote_optionone_number = ? WHERE vote_num = ?",
    [count, vote_num],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/updateoptiontwo", (req, res) => {
  const count = req.body.count;
  const vote_num = req.body.voteNum;
  db.query(
    "UPDATE votes SET vote_optiontwo_number = ? WHERE vote_num = ?",
    [count, vote_num],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

connection.connect((err) => {
  if (err) console.log("Enable to Connected to MySQL Server!");
  console.log("Connected to MySQL Server!");
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
