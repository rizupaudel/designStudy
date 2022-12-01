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

app.get('/fpass', (req, res) => {
  res.sendFile('views/fpass.html', { root : __dirname})
});

app.get('/fcog', (req, res) => {
  res.sendFile('views/fcog.html', { root : __dirname})
});

app.get('/fpasssurvey', (req, res) => {
  res.sendFile('views/fpasssurvey.html', { root : __dirname})
});

app.get('/fpassrecall', (req, res) => {
  res.sendFile('views/fpassrecall.html', { root : __dirname})
});

app.get('/pagegif', (req, res) => {
  res.sendFile('views/pagegif.html', { root : __dirname})
});

app.get('/designint', (req, res) => {
  res.sendFile('views/designint.html', { root : __dirname})
});

app.get('/quest', (req, res) => {
  res.sendFile('views/quest.html', { root : __dirname})
});

app.get('/csquest', (req, res) => {
  res.sendFile('views/csquest.html', { root : __dirname})
});

app.get('/spass', (req, res) => {
  res.sendFile('views/spass.html', { root : __dirname})
});

app.get('/scog', (req, res) => {
  res.sendFile('views/scog.html', { root : __dirname})
});

app.get('/spasssurvey', (req, res) => {
  res.sendFile('views/spasssurvey.html', { root : __dirname})
});

app.get('/spassrecall', (req, res) => {
  res.sendFile('views/spassrecall.html', { root : __dirname})
});

app.get('/demo', (req, res) => {
  res.sendFile('views/demo.html', { root : __dirname})
});

app.get('/thanks', (req, res) => {
  res.sendFile('views/thanks.html', { root : __dirname})
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