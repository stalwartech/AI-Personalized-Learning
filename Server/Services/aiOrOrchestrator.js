const { generateAIContent } = require("./geminiService");
const { generateWithOpenRouter } = require("./openRouterServices");

async function generateLearningContent(prompt, provider = "gemini") {
  try {
    if (provider === "openrouter") {
      return await generateWithOpenRouter(prompt);
    }

    // Default: Gemini
    return await generateAIContent(prompt);

  } catch (error) {
    console.warn("Primary AI failed, switching provider...");

    // Fallback to OpenRouter
    return await generateWithOpenRouter(prompt);
  }
}

module.exports = { generateLearningContent };
