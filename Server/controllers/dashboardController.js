const User = require("../models/UserModel.js");
const Progress = require("../models/progressModel.js");
const Certificate = require("../models/Certificate");
const { issueCertificateIfEligible } = require("../Services/certificateService.js");

exports.getDashboard = async (req, res) => {
  try {

    const certificates = await Certificate.find({  user: req.user._id});
    const user = await User.findById(req.user._id);

    const progress = await Progress.find({ user: req.user._id });

    const completedLessons = progress.filter(p => p.status === "completed").length;

    const totalLessons = progress.length;

    const completionRate =
      totalLessons === 0
        ? 0
        : Math.round((completedLessons / totalLessons) * 100);

    // Example track name (you can later make this dynamic)
    const track = `${user.learningGoal} (${user.skillLevel})`;

// Auto-issue certificate if eligible
await issueCertificateIfEligible(
  req.user._id,
  track,
  completionRate
);


    res.json({
      name: user.name,
      email: user.email,
      skillLevel: user.skillLevel,
      learningGoal: user.learningGoal,
      subscriptionActive: user.subscriptionActive,
      progress: {
        completedLessons,
        totalLessons,
        completionRate
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

