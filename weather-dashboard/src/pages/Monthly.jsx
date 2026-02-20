import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getCoordinates, getMonthlyForecast } from "../services/forecastService";

export default function Monthly() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const coords = await getCoordinates("Addis Ababa");
      const res = await getMonthlyForecast(coords.lat, coords.lon);
      setData(res);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white">
      <Sidebar />

      <main className="flex-1 p-6 md:ml-64">
        <h1 className="text-3xl font-bold mb-6">
          30‑Day Forecast
        </h1>

        {!data && <p>Loading...</p>}

        {data && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.daily.time.map((date, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow"
              >
                <p className="font-semibold">
                  {new Date(date).toLocaleDateString()}
                </p>

                <p className="mt-2">
                  🌡 Max: {Math.round(data.daily.temperature_2m_max[index])}°C
                </p>

                <p>
                  ❄ Min: {Math.round(data.daily.temperature_2m_min[index])}°C
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}