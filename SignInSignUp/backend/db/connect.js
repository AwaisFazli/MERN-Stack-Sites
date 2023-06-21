const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("Connected to the DB...");
  return mongoose.connect(url);
};

module.exports = connectDB;
