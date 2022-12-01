const express = require("express");
const app = express();
const logger = require("./middlewares/logger");

// Middleware act as the middle man between the Request and Response you get the Request
// you apply some funcationalities on it and then send the response accordingly
app.use(logger);

// app.get("/",logger, (req, res) => {
app.get("/", (req, res) => {
  res.send("<h1>HomePage</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
