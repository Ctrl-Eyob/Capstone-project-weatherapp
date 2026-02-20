import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  getCoordinates,
  getMonthlyForecast,
} from "../services/forecastService";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Monthly() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const coords = await getCoordinates("Addis Ababa");
        const res = await getMonthlyForecast(coords.lat, coords.lon);

        const formatted = res.daily.time.map((date, index) => ({
          date: new Date(date).getDate(),
          max: res.daily.temperature_2m_max[index],
          min: res.daily.temperature_2m_min[index],
        }));

        setData(formatted);
      } catch (err) {
        setError("Failed to load monthly forecast.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex text-slate-900 dark:text-white">
      <Sidebar />

      <main className="flex-1 p-6 md:ml-64">
        <h1 className="text-3xl font-bold mb-6">
          30‑Day Forecast
        </h1>

        {loading && <p>Loading...</p>}

        {error && (
          <p className="text-red-500 font-semibold">{error}</p>
        )}

        {data && !loading && (
          <div className="bg-white/60 dark:bg-slate-800/70 backdrop-blur-lg p-6 rounded-2xl shadow">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="max"
                  stroke="#ef4444"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="min"
                  stroke="#3b82f6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </main>
    </div>
  );
}