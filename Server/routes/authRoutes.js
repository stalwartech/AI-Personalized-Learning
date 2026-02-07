const express = require("express");
const router = express.Router();
const {Login, Signup } = require("../controllers/authController.js");

router.post('/register', Signup);
router.post('/Login', Login);

module.exports = router;