const express = require("express");
const cors = require("cors");
const connectDB = require("./database/connect");
const all = require("./routes/all");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/", all);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(5000, console.log("Server is listening on Port 5000"));
  } catch (error) {
    console.log(error);
  }
};

start();
