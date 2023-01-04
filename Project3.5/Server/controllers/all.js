const signup = async (req, res) => {
  try {
    const data = await req.body;
    res.status(200).send(req.body);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup };
