const ExerciseAttempt = require("../models/ExerciseModel.js");

exports.submitExercise = async (req, res) => {
  try {
    const { topicId, exerciseIndex, userAnswer, correct } = req.body;

    const attempt = await ExerciseAttempt.create({
      user: req.user.userId, // or req.use
      topic: topicId,
      exerciseIndex,
      userAnswer,
      correct,
      score: correct ? 1 : 0,
    });

    res.status(201).json({
      success: true,
      attempt,
    });


  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
