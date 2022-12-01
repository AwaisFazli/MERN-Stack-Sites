const express = require("express");

const app = express();

// Middleware act as the middle man between the Request and Response you get the Request
// you apply some funcationalities on it and then send the response accordingly

const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const date = new Date().getFullYear();
  console.log(url, method, date);
  //   res.send() => this would send its own data as an response an would overwrite the app.get response
  //   next() => is used to transfer the flow to any other middle ware or back to app.get
  //   If you dont do any of the above mentioned actions the Page will keep on loading
};

app.get("/", logger, (req, res) => {
  res.send("<h1>HomePage</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
