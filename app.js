
"use strict"; // so let will work

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

const ANIMALS = {
  Bear: "Rawr!",
  Bird: "Caw!",
  Cat: "Meow!",
  Chicken: "b'GAWK!",
  Darga: "Flomp!",
  Dog: "Bark!",
  Elephant: "pfhlaROOOOGH!",
  Egret: "mmWAAhhh!",
  Giraffe: "ooh-WAH! ooooh-WAHHHH!",
  Horse: "eeEEEEEhehehehehe!",
  Loren: "Burp!",
  Mouse: "Squeak!"
}

// SERVER

app.listen(PORT_NUM, function() {
  console.log(SERVER_START_MSG);
});

// ROUTES

app.get("/", function(request, response) {
  response.sendFile(INDEX_PATH);
});

app.get("/speak/:animal", function(request, response) {
  const animal = request.params.animal.capitalize();
  const sound = ANIMALS[animal] || "???";
  const result = `The ${animal} says, "${sound}"`;

  response.send(result);
});

app.get("/repeat/:word/:num", function(request, response) {
  const params = request.params;
  const word = params.word;
  const repeatNum = Number(params.num);
  const result = repeatWord(word, repeatNum);

  response.send(result);
});

app.get("*", function(request, response) {
  response.sendFile(INDEX_PATH);
});

// FUNCTIONS

String.prototype.capitalize = function() {
  const first = this[0].toUpperCase();
  const remainder  = this.slice(1).toLowerCase();
  return first + remainder;
}

const repeatWord = (word, wordCount) => {
  let result = "";
  for (let i = 0; i < wordCount; i++) {
    result += word + "  ";
  }

  return result;
};
