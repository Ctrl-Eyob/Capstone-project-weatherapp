import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ForecastChart({ forecast }) {
  if (!forecast) return null;

  const data = forecast.list.slice(0, 8).map((item) => ({
    time: item.dt_txt.slice(11, 16),
    temp: item.main.temp,
  }));

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow mt-6">
      <h3 className="text-lg font-semibold mb-4">
        Hourly Forecast
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}