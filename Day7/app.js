const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./postform"));
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json(people);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Submitted");
});

app.listen(5000, () => {
  console.log("Server is listening on Port 5000");
});
