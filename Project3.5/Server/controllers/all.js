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
  const user = await UserSchema.findOne({ username: req.body.username });
  if (user) {
    console.log("User Exists");
    if (req.body.password == user.password) {
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
