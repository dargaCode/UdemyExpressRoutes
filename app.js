
// DEPENDENCIES

const express = require("express");
const app = express();

// CONSTANTS

const PORT_NUM = 3000;
const SERVER_START_MSG = "Serving Express Routes Test on port " + PORT_NUM;

// SERVER

app.listen(PORT_NUM, function() {
  console.log(SERVER_START_MSG);
});

// ROUTES

app.get("/", function(request, response) {
  response.send("hello world!");
});
