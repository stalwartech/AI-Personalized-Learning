export default function ProgressBar({ rate }) {
  return (
    <div className="w-full bg-gray-200 rounded h-4 mt-2">
      <div
        className="bg-green-600 h-4 rounded"
        style={{ width: `${rate}%` }}
      />
      <p className="text-sm mt-1">{rate}% completed</p>
    </div>
  );
}
