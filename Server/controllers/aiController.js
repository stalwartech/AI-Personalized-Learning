const { generateLearningContent } = require("../Services/aiOrOrchestrator");
const { buildLearningPrompt } = require("../utils/aiPrompBuilder");
const { cleanJson } = require("../utils/cleanJson");

exports.generateTopicContent = async (req, res) => {
  try {
    const { topic, level, provider } = req.body;

    const prompt = buildLearningPrompt(topic, level);
    const aiResponse = await generateLearningContent(prompt, provider);

    const parsedData = JSON.parse(cleanJson(aiResponse));

    res.status(200).json({
      success: true,
      data: parsedData
    });

  } catch (error) {
    console.error("AI ERROR:", error);

    res.status(500).json({
      success: false,
      message: "AI generation failed",
      error: error.message
    });
  }
};
