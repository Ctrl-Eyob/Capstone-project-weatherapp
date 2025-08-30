import React, { useEffect, useMemo, useState, useCallback } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import { fetchWeatherByCity } from "./services/weatherApi.js";
import { titleCaseCity } from "./utils/format.js";

const REFRESH_MS = 10 * 60 * 1000; // 10 minutes

export default function App() {
  const defaultCity = "Addis Ababa, ET";
  const apiKey = useMemo(
    () => import.meta.env.VITE_OPENWEATHER_API_KEY || "YOUR_OPENWEATHER_API_KEY",
    []
  );

  const [city, setCity] = useState(defaultCity);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const load = useCallback(
    async (targetCity = city) => {
      try {
        setLoading(true);
        setErrorMsg("");
        const res = await fetchWeatherByCity(targetCity, apiKey);
        setData(res);
      } catch (err) {
        setData(null);
        setErrorMsg(
          err?.message?.toLowerCase().includes("city not found")
            ? "City not found. Please try another city."
            : "Unable to load weather right now. Check your connection and try again."
        );
      } finally {
        setLoading(false);
      }
    },
    [apiKey, city]
  );

  useEffect(() => {
    load();
  }, [city, load]);

  useEffect(() => {
    const id = setInterval(() => load(), REFRESH_MS);
    return () => clearInterval(id);
  }, [load]);

  const handleSearch = (value) => {
    setCity(titleCaseCity(value));
  };

  const retry = () => load();

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg-weather.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-6 md:py-10 text-Grey">
        {/* Header */}
        <header className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white ">Capstone project </h2>
            <p className="text-sm text-slate-200">
              weather app • Auto-refreshes every 2 minutes
            </p>
          </div>
          <SearchBar onSearch={handleSearch} loading={loading} />
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="col-span-1">
            {loading && !data ? (
              <LoadingSpinner label="Fetching current weather..." />
            ) : data ? (
              <WeatherCard data={data} />
            ) : null}

            <ErrorMessage message={errorMsg} onRetry={retry} />
          </div>

          {/* Side Panel */}
          <aside className="col-span-1">
            <div className="rounded-3xl border border-slate-200/20 bg-white/20 backdrop-blur-md p-6 shadow-soft">
              <h3 className="mb-4 text-lg font-semibold text-white">About</h3>
              <p className="text-sm text-slate-100">
                Enter a city name to view its current weather. This app uses the
                OpenWeatherMap API and shows humidity, wind, and rain details in a
                responsive layout tailored for mobile, tablet, and desktop.
              </p>
              <p className="mt-3 text-xs text-slate-300">
                Tip: Add country code for better accuracy (e.g., “Addis Ababa, ET”).
              </p>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-xs text-slate-300">
          Data from OpenWeatherMap • Built with React & Tailwind
        </footer>
      </div>
    </main>
  );
}
