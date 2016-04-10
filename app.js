
// DEPENDENCIES

const express = require("express");
const app = express();
const path = require("path");

// PATHS

app.use(express.static('public')); //serve static files

// CONSTANTS

const PORT_NUM = 3000;
const SERVER_START_MSG = "Serving Express Routes Test on port " + PORT_NUM;
const INDEX_PATH = path.join(__dirname, "/public/index.html");

// SERVER

app.listen(PORT_NUM, function() {
  console.log(SERVER_START_MSG);
});

// ROUTES

app.get("/", function(request, response) {
  response.sendFile(INDEX_PATH);
});
