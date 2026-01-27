const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/authMiddleware.js");
const {getDashboard} = require("../controllers/dashboardController.js")

router.get("/", protect, getDashboard);

module.exports = router