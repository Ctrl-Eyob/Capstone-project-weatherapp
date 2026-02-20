import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import MetricCard from "../components/MetricCard";
import ForecastChart from "../components/ForecastChart";
import FiveDayForecast from "../components/FiveDayForecast";
import { getCurrentWeather, getForecast } from "../services/weatherService";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Dashboard() {
  const { t } = useTranslation();

  const [currentTab, setCurrentTab] = useState("dashboard");
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

  useEffect(() => {
    fetchWeatherByCity("Addis Ababa");
  }, []);

  const handleSearch = () => {
    if (!search) return;
    fetchWeatherByCity(search);
    setSearch("");
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="flex-1 p-6 md:ml-64">

        {currentTab !== "settings" && (
          <Topbar
            search={search}
            setSearch={setSearch}
            onSearch={handleSearch}
          />
        )}

        {loading && (
          <div className="mt-6 text-center text-lg">
            {t("loading")}
          </div>
        )}

        {currentTab === "dashboard" && weather && (
          <>
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
            </div>

            <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard title={t("humidity")} value={weather.main.humidity} unit="%" />
              <MetricCard title={t("wind")} value={weather.wind.speed} unit="m/s" />
              <MetricCard title={t("visibility")} value={weather.visibility / 1000} unit="km" />
              <MetricCard title={t("pressure")} value={weather.main.pressure} unit="hPa" />
            </div>

            <ForecastChart forecast={forecast} />
            <FiveDayForecast forecast={forecast} />
          </>
        )}

        {currentTab === "settings" && (
          <div className="mt-10 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-6">
              {t("settings")}
            </h2>

            <label className="block mb-2 font-medium">
              {t("language")}
            </label>

            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="p-3 rounded-lg bg-slate-200 dark:bg-slate-700"
            >
              <option value="en">English</option>
              <option value="am">አማርኛ</option>
            </select>
          </div>
        )}

      </main>
    </div>
  );
}