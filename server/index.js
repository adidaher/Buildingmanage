const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "admin",
  host: "database-buildingproject.ccnnq8gjj4co.ap-northeast-1.rds.amazonaws.com",
  password: "buildingproject",
  database: "sys",
});

app.post("/addIssue", (req, res) => {
  const category = req.body.category;
  const desc = req.body.desc;
  const date = req.body.date;

  db.query(
    "INSERT INTO issues(`category`,`desc`, `date`) VALUES (?,?,?)",
    [category, desc, date],
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
  db.query("SELECT * FROM issues Order BY date DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getWaterBills", (req, res) => {
  db.query("SELECT * FROM bills WHERE type = ? ", ["Water"], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
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
app.get("/getElecBills", (req, res) => {
  db.query(
    "SELECT * FROM bills WHERE type = ? ",
    ["Electricity"],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/retrieveAllBills", (req, res) => {
  db.query("SELECT * FROM bills ORDER BY date DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getnotification", (req, res) => {
  db.query(
    "SELECT * FROM notification HAVING status = 'unread'",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/readnotification", (req, res) => {
  db.query("UPDATE notification SET status = 'read'", (err, result) => {
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

app.post("/addbill", (req, res) => {
  const bill_type = req.body.bill_type;
  const bill_date = req.body.bill_date;
  const bill_status = req.body.bill_status;
  const bill_amount = req.body.bill_amount;
  db.query(
    "INSERT INTO bills (type, date, status,amount) VALUES (?,?,?,?)",
    [bill_type, bill_date, bill_status, bill_amount],
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

app.post("/deletePoll", (req, res) => {
  const vote_num = req.body.voteNum;
  db.query(
    "Delete from votes where vote_num = ?",
    [vote_num],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

db.connect((err) => {
  if (err) console.log("Enable to Connected to MySQL Server!");
  console.log("Connected to MySQL Server!");
});
app.listen(process.env.PORT || 3001, () => {
  console.log("Yey, your server is running on port 3001");
});
