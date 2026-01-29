const router = require("express").Router();
const {submitExercise} = require("../controllers/exerciseController.js");
const {protect} = require("../middleware/authMiddleware.js")

router.post("/submit", protect, submitExercise);

module.exports = router;
