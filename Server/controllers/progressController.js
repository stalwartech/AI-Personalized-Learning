const Progress = require("../models/progressModel.js");

exports.updateProgress = async (req, res) => {
  try {
    const { courseId, topicId, score } = req.body;

    const progress = await Progress.findOneAndUpdate(
      {
        user: req.user.id,
        course: courseId,
        topic: topicId
      },
      {
        status: "completed",
        score,
        completedAt: new Date()
      },
      { upsert: true, new: true }
    );

    res.status(200).json({
      success: true,
      progress
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
