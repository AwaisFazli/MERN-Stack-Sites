const express = require("express");
const all = require("./routes/all");
const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Working");
});

app.use("/", all);

// app.post("/api/signup", (req, res) => {
//   console.log(req.body);
// });

app.listen(5000, () => {
  console.log("Server is listening on Port 5000");
});
