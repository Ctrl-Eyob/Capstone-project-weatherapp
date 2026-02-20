import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { getCurrentWeather, getForecast } from "../services/weatherService";

export default function Dashboard() {
  const [city, setCity] = useState("Addis Ababa");
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (targetCity) => {
    try {
      setLoading(true);
      setError("");

      const currentRes = await getCurrentWeather(targetCity);
      const forecastRes = await getForecast(targetCity);

      setWeather(currentRes.data);
      setForecast(forecastRes.data);
    } catch (err) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = () => {
    if (!search) return;
    fetchWeather(search);
    setSearch("");
  };

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-900 transition-colors">
      <Sidebar />

      <main className="flex-1 p-6">
        <Topbar
          search={search}
          setSearch={setSearch}
          onSearch={handleSearch}
        />

        {loading && (
          <div className="mt-6">Loading weather...</div>
        )}

        {error && (
          <div className="mt-6 text-red-500">{error}</div>
        )}

        {weather && !loading && (
          <div className="mt-6 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
            <h2 className="text-xl font-bold">
              {weather.name}
            </h2>

            <div className="text-5xl font-bold mt-2">
              {Math.round(weather.main.temp)}°C
            </div>

            <p className="capitalize mt-2">
              {weather.weather[0].description}
            </p>

            <p className="mt-2">
              Feels like {Math.round(weather.main.feels_like)}°C
            </p>
          </div>
        )}
      </main>
    </div>
  );
}