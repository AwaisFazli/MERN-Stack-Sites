const express = require("express");
const router = express.Router();

const { signup, homepage } = require("../controllers/all");

router.route("").get(homepage);
router.route("/api/signup").post(signup);

module.exports = router;
