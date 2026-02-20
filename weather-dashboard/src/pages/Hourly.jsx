import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  getCoordinates,
  getHourlyForecast,
} from "../services/forecastService";

export default function Hourly() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const coords = await getCoordinates("Addis Ababa");
      const res = await getHourlyForecast(coords.lat, coords.lon);
      setData(res);
    };

    fetchData();
  }, []);

  return (
    <div className="flex text-slate-900 dark:text-white">
      <Sidebar />

      <main className="flex-1 p-6 md:ml-64">
        <h1 className="text-3xl font-bold mb-6">
          Hourly Forecast
        </h1>

        {!data && <p>Loading...</p>}

        {data && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {data.hourly.time.slice(0, 24).map((time, index) => (
              <div
                key={index}
                className="bg-white/60 dark:bg-slate-800/70 backdrop-blur-lg p-4 rounded-2xl shadow"
              >
                <p className="text-sm">
                  {new Date(time).getHours()}:00
                </p>

                <p className="text-xl font-bold">
                  {Math.round(data.hourly.temperature_2m[index])}°C
                </p>

                <p className="text-sm">
                  💧 {data.hourly.relativehumidity_2m[index]}%
                </p>

                <p className="text-sm">
                  🌬 {data.hourly.windspeed_10m[index]} km/h
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}