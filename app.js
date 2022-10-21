// server/index.js

const express = require("express");

const PORT = process.env.PORT || 8090;

const app = express();
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root : __dirname})
});

app.get('/page1', (req, res) => {
  res.sendFile('views/page1.html', { root : __dirname})
});

app.get('/page2', (req, res) => {
  res.sendFile('views/page2.html', { root : __dirname})
});

app.get('/page21', (req, res) => {
  res.sendFile('views/page21.html', { root : __dirname})
});

app.get('/page22', (req, res) => {
  res.sendFile('views/page22.html', { root : __dirname})
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});