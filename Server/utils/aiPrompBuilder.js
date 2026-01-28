function buildLearningPrompt(topic, level){
    return `
    You are an expert tutor. Teach the topic "${topic}" for a ${level} learner.
    Return reponse in JSON with:
    {
  "explanation": "",
  "learning_steps": [],
  "exercises": [
    { "question": "", "hint": "" }
  ],
  "youtube_videos": [
    { "title": "", "url": "" }
  ],
  "articles": [
    { "title": "", "url": "" }
  ]
}

Rules: 
- Generate at least 5 exercises 
- Use simple, clear language
- Youtube links must ve real an relevant 
- Articles must be beginner-friendly 
    `
}

module.exports = {buildLearningPrompt}