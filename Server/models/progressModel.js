const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  topic: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" },

  status: {
    type: String,
    enum: ["not_started", "in_progress", "completed"],
    default: "not_started"
  },

  score: { type: Number, default: 0 },

  completedAt: Date
}, { timestamps: true });

module.exports = mongoose.model("Progress", progressSchema);
