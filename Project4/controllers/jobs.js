const getAllJobs = async (req, res) => {
  res.send("Get All Jobs");
};
const getJob = async (req, res) => {
  res.send("Get Single Job");
};
const createJob = async (req, res) => {
  res.send("create Jobs");
};
const updateJob = async (req, res) => {
  res.send("Update Jobs");
};
const deleteJob = async (req, res) => {
  res.send("Delete Jobs");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
