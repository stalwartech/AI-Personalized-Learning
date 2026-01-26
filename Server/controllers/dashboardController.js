const User = require("../models/UserModel.js");

exports.getDashboard = async (req, res) => {
    try {
        const user = await User.findOne(req.user.email);
        res.json({
            name: user.name,
            email: user.email,
            skillLevel: user.skillLevel,
            learningGoal: user.learningGoal,
            subscriptionActive: user.subscriptionActive,
            progress: {
                completedLessons: 0,
                totalLessons: 0,
                completionRate: 0
            }
        })
    } catch (error) {
        // My error code here
        res.status(500).json({message: "Server erro"})
    }
}