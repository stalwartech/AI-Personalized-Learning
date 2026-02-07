const router = require("express").Router();
const { initializePayment } = require("../controllers/paymentController");
const {protect} = require("../middleware/authMiddleware");

// No payment to be added for now 
router.post("/pay", protect, initializePayment);

module.exports = router;
