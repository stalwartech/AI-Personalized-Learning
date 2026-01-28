const {generateAIContent} = require("../Services/geminiService.js");
const {buildLearningPrompt} = require("../utils/aiPrompBuilder.js");

exports.generateTopicContent = async (req, res) => {
    try {
        const {topic, level } = req.body;

        const prompt = buildLearningPrompt(topic, level);
        console.log(prompt);
        
        const aiResponse = await generateAIContent(prompt)

        return res.status(200).json({
            success: true,
            data: JSON.parse(aiResponse)
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: "AI generation failed",
            error: error.message
        })
        
    }
}
