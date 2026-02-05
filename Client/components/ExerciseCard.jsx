export default function ExerciseCard({ exercise }) {
  return (
    <div className="border p-3 rounded mt-2">
      <p className="font-semibold">{exercise.question}</p>
    </div>
  );
}
