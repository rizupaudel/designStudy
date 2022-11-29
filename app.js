// server/index.js

const express = require("express");
// const db = require("./database");
const { getProgressPercent, getQuestions, saveResponse } = require("./utility");

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

app.get('/page5', (req, res) => {
  res.sendFile('views/page5.html', { root : __dirname})
});

app.get('/page6', (req, res) => {
  res.sendFile('views/page6.html', { root : __dirname})
});

app.get('/get_quests/:a', (req, res) => {
    getQuestions(req.params["a"]).then(function (result) {
        res.send({"questions": result});
    });
});

app.get('/get_progress/:a', (req, res) => {
  var progress = getProgressPercent(req.params["a"]);
  res.send({"progress": progress});
})

app.post('/post_survey_response', (req, res) => {
  saveResponse(req.body);
  res.send({"success": false});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});