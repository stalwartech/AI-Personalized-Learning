const router = require("express").Router();
const { initializePayment } = require("../controllers/paymentController");
const {protect} = require("../middleware/authMiddleware");

router.post("/pay", protect, initializePayment);

module.exports = router;
