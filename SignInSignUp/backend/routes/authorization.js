const express = require("express");
const router = express.Router();

const { signUp } = require("../controller/authorization");

// router.post("/signup", signUp);
router.route("/signup").post(signUp);

module.exports = router;
