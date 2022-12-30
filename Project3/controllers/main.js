const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError("Please Provide Username and Password");
  }

  const id = new Date().getDate();
  const token = jwt.sign(
    {
      id,
      username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );

  res.status(200).json({ msg: "User Created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("bearer ")) {
    throw new CustomAPIError("No Token Provided", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({
      msg: `Hello ${decoded.username}`,
      secret: `your lucky number is ${luckyNumber}`,
    });
  } catch (error) {
    throw new CustomAPIError("Not Authorized To Access This Route", 401);
  }
};

module.exports = { login, dashboard };
