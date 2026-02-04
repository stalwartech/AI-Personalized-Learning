import { useState } from "react";
import api from "../api/axios";
import ExerciseCard from "../components/ExerciseCard";

export default function Learn() {
  const [topic, setTopic] = useState("");
  const [lesson, setLesson] = useState(null);

  const generateLesson = async () => {
    const res = await api.post("/ai/lesson", { topic });
    setLesson(res.data);
  };

  return (
    <div className="p-6">
      <input
        className="border p-2"
        placeholder="Enter topic"
        value={topic}
        onChange={e => setTopic(e.target.value)}
      />

      <button onClick={generateLesson} className="ml-2 bg-black text-white px-4 py-2">
        Learn
      </button>

      {lesson && (
        <>
          <h2 className="mt-4 text-xl font-bold">{lesson.title}</h2>
          <p>{lesson.content}</p>

          <h3 className="mt-4 font-semibold">Exercises</h3>
          {lesson.exercises.map((ex, i) => (
            <ExerciseCard key={i} exercise={ex} />
          ))}
        </>
      )}
    </div>
  );
}
