const express = require('express');
const cors = require("cors");
require("dotenv").config();

const port = process.env.NODE_DOCKER_PORT || 3030;

const app = express();

var corsOptions = {
  origin: `http://localhost:${port}`
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get('/', function (req, res) {
  res.json({
    message: "Hi There"
  });
});

app.get('/home', function (req, res) {
  res.json({
    message: "Welcome to node-js-backend-app"
  });
});

require("./routes/tutorial.routes")(app);

app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});