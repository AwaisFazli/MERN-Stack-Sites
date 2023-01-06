const UserSchema = require("../models/Schema");

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const user = await UserSchema.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  console.log(req.body);
  res.status(200).send("Server Working");
};

const homepage = async (req, res) => {
  res.status(200).send("Server Is Running");
};

module.exports = { signup, homepage, login };
