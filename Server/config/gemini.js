const { GoogleGenerativeAI } = require("@google/generative-ai");
const env = require("dotenv").config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = genAI;
