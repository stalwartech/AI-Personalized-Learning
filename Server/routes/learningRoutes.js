const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/authMiddleware.js")
const {updateLearningProfile} = require("../controllers/learningController.js")

router.put("/profile", protect, updateLearningProfile);

module.exports = router;