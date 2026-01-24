const User = require("../models/UserModel.js")

exports.updateLearningProfile = async (req, res) => {
    const {skillLevel, learningGoal} = req.body;

    try {
        const user = await User.findOne(req.user.email);
        if(!user){
            return res.status(404).json({message: "User not found"})
        };
        user.skillLevel = skillLevel || user.skillLevel;
        user.learningGoal = learningGoal || user.learningGoal;
    } catch (error) {
        
    }
}