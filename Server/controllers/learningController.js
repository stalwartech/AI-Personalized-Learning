const User = require("../models/UserModel.js")

exports.updateLearningProfile = async (req, res) => {
    const {skillLevel, learningGoal} = req.body;

    try {
        const user = await User.findOne({userId: req.user._Id});
        if(!user){
            return res.status(404).json({message: "User not found"})
        };
        user.skillLevel = skillLevel || user.skillLevel;
        user.learningGoal = learningGoal || user.learningGoal;
        await user.save();
        return res.status(200).json({
            message: "Skill and learning goal has been updated susccessfully"
        })
    
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message: "Server Error"})
    }
}