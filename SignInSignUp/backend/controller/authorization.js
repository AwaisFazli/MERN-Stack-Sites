const signUp = (req, res) => {
  console.log(req.body);
  res.send("Helo");
};

module.exports = {
  signUp,
};
