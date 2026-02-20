import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MetricCard from "../components/MetricCard";
import ForecastChart from "../components/ForecastChart";
import FiveDayForecast from "../components/FiveDayForecast";
import {
  getCurrentWeather,
  getForecast,
} from "../services/weatherService";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeatherByCity = async (city) => {
    try {
      setLoading(true);
      setError("");

      const currentRes = await getCurrentWeather(city);
      const forecastRes = await getForecast(city);

      setWeather(currentRes.data);
      setForecast(forecastRes.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      setLoading(true);
      setError("");

      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_KEY}`
      );
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_KEY}`
      );

      const currentData = await currentRes.json();
      const forecastData = await forecastRes.json();

      setWeather(currentData);
      setForecast(forecastData);
    } catch {
      setError("Could not detect location");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Auto-detect location on load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherByCoords(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        () => {
          // fallback city
          fetchWeatherByCity("Addis Ababa");
        }
      );
    } else {
      fetchWeatherByCity("Addis Ababa");
    }
  }, []);

  const handleSearch = () => {
    if (!search) return;
    fetchWeatherByCity(search);
    setSearch("");
  };

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <Sidebar />

      <main className="flex-1 p-6">
        <Topbar
          search={search}
          setSearch={setSearch}
          onSearch={handleSearch}
        />

        {loading && (
          <div className="mt-6 text-slate-700 dark:text-slate-300">
            Detecting weather...
          </div>
        )}

        {error && (
          <div className="mt-6 text-red-500 font-semibold">
            {error}
          </div>
        )}

        {weather && !loading && (
          <>
            {/* Current Weather */}
            <div className="mt-6 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
              <h2 className="text-xl font-bold">
                {weather.name}, {weather.sys.country}
              </h2>

              <div className="text-5xl font-bold mt-2">
                {Math.round(weather.main.temp)}°C
              </div>

              <p className="capitalize mt-2 text-slate-600 dark:text-slate-300">
                {weather.weather[0].description}
              </p>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Feels like {Math.round(weather.main.feels_like)}°C
              </p>
            </div>

            {/* Metrics */}
            <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                title="Humidity"
                value={weather.main.humidity}
                unit="%"
              />
              <MetricCard
                title="Wind Speed"
                value={weather.wind.speed}
                unit="m/s"
              />
              <MetricCard
                title="Visibility"
                value={weather.visibility / 1000}
                unit="km"
              />
              <MetricCard
                title="Pressure"
                value={weather.main.pressure}
                unit="hPa"
              />
            </div>

            <ForecastChart forecast={forecast} />
            <FiveDayForecast forecast={forecast} />
          </>
        )}
      </main>
    </div>
  );
}