// server/index.js

const express = require("express");
const db = require("./database");
const { getProgressPercent } = require("./utility");

const PORT = process.env.PORT || 8090;

const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root : __dirname})
});

app.get('/page1', (req, res) => {
  res.sendFile('views/page1.html', { root : __dirname})
});

app.get('/page2', (req, res) => {
  res.sendFile('views/page2.html', { root : __dirname})
});

app.get('/page3', (req, res) => {
  res.sendFile('views/page3.html', { root : __dirname})
});

app.get('/page4', (req, res) => {
  res.sendFile('views/page4.html', { root : __dirname})
});

app.get('/get_data', (req, res) => {
  db.query("select * from survey1", (err, rows, fields) => {
    if (err) throw err
    res.send(rows);
  });
});

app.get('/get_progress/:a', (req, res) => {
  var progress = getProgressPercent(req.params["a"]);
  res.send({"progress": progress});
})

app.get('/survey_result', (req, res) => {
  res.sendFile('views/survey_result.html', { root : __dirname})
});

app.get('/survey', (req, res) => {
  res.sendFile('views/survey.html', { root : __dirname})
});

app.post('/post_data', (req, res) => {
  db.query("INSERT INTO `design_study`.`survey1` (`q1`, `q2`, `q3`, `q4`, `q5`) VALUES (?)", [req.body], (err, result) => {
    if (err) throw err;
    res.json(result);
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});