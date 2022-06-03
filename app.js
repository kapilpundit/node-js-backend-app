const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send("Hi There");
});

app.get('/home', function(req, res) {
  res.send("Welcome to node-js-backend-app");
});

const port = 3030;

app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});