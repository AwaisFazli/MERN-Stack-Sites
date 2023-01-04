const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/all");

router.route("/api/signup").post(signup);

module.exports = router;
