const express = require("express");
const router = express.Router();

const { signup, homepage, login } = require("../controllers/all");

router.route("").get(homepage);
router.route("/api/signup").post(signup);
router.route("/api/login").get(login);

module.exports = router;
