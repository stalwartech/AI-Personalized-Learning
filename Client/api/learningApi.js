import api from "./axios";

export const generateLesson = async (topic) => {
  const res = await api.post("/ai/lesson", { topic });
  return res.data;
};
