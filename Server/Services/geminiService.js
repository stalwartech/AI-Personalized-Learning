const genAI = require("../config/gemini.js")
const model = genAI.getGenerativeModel({model: "gemini-1.5-pro"})

async function generateAIContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = {generateAIContent};