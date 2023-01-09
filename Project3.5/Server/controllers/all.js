const UserSchema = require("../models/Schema");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const user = new UserSchema({
      username: req.body.username,
      password: req.body.password,
    });
    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const user = await UserSchema.findOne({ username: req.body.username });
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (user) {
    console.log("User Exists");
    if (isMatch) {
      console.log("Acess Granted");
    } else {
      console.log("Invalid Email or Password");
    }
  } else {
    console.log("Email Does not Exists");
  }
  res.status(200).send("Server Working");
};

const homepage = async (req, res) => {
  res.status(200).send("Server Is Running");
};

module.exports = { signup, homepage, login };
