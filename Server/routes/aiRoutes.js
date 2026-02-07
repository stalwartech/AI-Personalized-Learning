const express = require("express");
const router = express.Router();
const {generateTopicContent} = require("../controllers/aiController.js");
const aiLimit = require("../middleware/aiLimitMiddleware.js")
const {protect} = require("../middleware/authMiddleware.js") 


router.post("/generate-topic",protect, aiLimit, generateTopicContent)

module.exports = router;
