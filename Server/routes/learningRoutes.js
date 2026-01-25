const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/authMiddleware.js")
const {updateLearningprofile} = require("../controllers/learningController.js")

router.put("/profile", protect, updateLearningprofile);

module.exports = router 