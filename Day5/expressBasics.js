const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public")); // To load any static asset required for the website

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./homePage.html")); // Path name must be absolute
});

//Setting up 404 for the invalid requests
app.all("*", (req, res) => {
  res.status(404).send("404: Not Found");
});

app.listen(5000, () => {
  console.log("Server is listening on Port 5000");
});
