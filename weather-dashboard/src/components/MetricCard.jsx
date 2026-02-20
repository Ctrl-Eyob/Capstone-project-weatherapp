export default function MetricCard({ title, value, unit }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow transition-all duration-300 hover:scale-105">
      <h4 className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </h4>
      <p className="text-2xl font-bold mt-2">
        {value} {unit}
      </p>
    </div>
  );
}