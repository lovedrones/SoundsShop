const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/user");

router.get ('/', signup);

router.post("/signup", signup);

module.exports = router;