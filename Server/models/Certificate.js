const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  track: {
    type: String, // e.g. "JavaScript Basics"
    required: true
  },
  issuedAt: {
    type: Date,
    default: Date.now
  },
  certificateId: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model("Certificate", certificateSchema);
