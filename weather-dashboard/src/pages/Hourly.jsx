import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getCoordinates, getHourlyForecast } from "../services/forecastService";

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
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white">
      <Sidebar />

      <main className="flex-1 p-6 md:ml-64">
        <h1 className="text-3xl font-bold mb-6">
          Hourly Forecast
        </h1>

        {!data && <p>Loading...</p>}

        {data && (
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow overflow-x-auto">
            <div className="grid grid-cols-6 gap-4 text-sm">
              {data.hourly.time.slice(0, 12).map((time, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-slate-200 dark:bg-slate-700 text-center"
                >
                  <p>{new Date(time).getHours()}:00</p>
                  <p className="font-bold">
                    {Math.round(data.hourly.temperature_2m[index])}°C
                  </p>
                  <p>{data.hourly.relativehumidity_2m[index]}%</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}