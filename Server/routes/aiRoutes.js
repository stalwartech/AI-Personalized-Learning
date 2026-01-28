const express = require("express");
const router = express.Router();
const {generateTopicContent} = require("../controllers/aiController.js");

router.post("/generate-topic", generateTopicContent)

module.exports = router;