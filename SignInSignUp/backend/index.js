const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

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

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
