const router = require("express").Router();
const {updateProgress} = require("../controllers/progressController.js");
const auth = require("../middleware/authMiddleware.js");

router.post("/update", auth, updateProgress)

module.exports = router;
