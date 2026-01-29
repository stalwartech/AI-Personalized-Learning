const mongoose = require("mongoose");

const exerciseAttemptSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  topic: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" },

  exerciseIndex: Number,
  userAnswer: String,
  correct: Boolean,

  score: Number
}, { timestamps: true });

module.exports = mongoose.model("ExerciseAttempt", exerciseAttemptSchema);
