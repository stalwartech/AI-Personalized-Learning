const router = require("express").Router();
const {submitExercise} = require("../controllers/exerciseController.js");
const auth = require("../middleware/authMiddleware.js")

router.post("/submit", auth, submitExercise);

module.exports = router;
