const router = require("express").Router();
const {updateProgress} = require("../controllers/progressController.js");
const {protect} = require("../middleware/authMiddleware.js");

router.post("/update", protect, updateProgress)

module.exports = router;
