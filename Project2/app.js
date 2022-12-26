require("dotenv").config();
require("express-async-errors");
// async errors

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/not-found");

// Routes

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    '<h1>Store Api</h1><a href = "/api/v1/products">products routes</a>'
  );
});

app.use("/api/v1/products", productsRouter);

// Products routes

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on Port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
