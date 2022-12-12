const express = require("express");
const path = require("path");
const { verifyWorker, getDesign, getQuestions, saveResponse } = require("./utility");

const PORT = process.env.PORT || 8090;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static("public"));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root : __dirname})
});

app.get('/startstudy', (req, res) => {
  res.sendFile('views/startstudy.html', { root : __dirname})
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

app.get('/motivation', (req, res) => {
  res.sendFile('views/motivation.html', { root : __dirname})
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

app.get('/get_questions/:a', (req, res) => {
  res.send(getQuestions(req.params["a"]));
});

app.get('/get_design/:did', (req, res) => {
  res.send(getDesign(req.params["did"]));
});

app.get('/verify_worker/:wid', async (req, res) => {
  res.send(await verifyWorker(req.params["wid"]));
});

app.post('/post_response/:wid', async (req, res) => {
  let stat = await saveResponse(req.params["wid"], req.body);
  res.send({"success": stat});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});