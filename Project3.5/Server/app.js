const express = require("express");
const cors = require("cors");
const all = require("./routes/all");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", all);

app.listen(5000, () => {
  console.log("Server is listening on Port 5000");
});
