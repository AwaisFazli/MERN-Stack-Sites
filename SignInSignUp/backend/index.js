const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
require("dotenv").config();

const app = express();
const port = 8000;
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
const routes = require("./routes/authorization");

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
