import axios from "axios";

// Convert city to lat/lon using OpenWeather (you already use it)
export const getCoordinates = async (city) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );

  return {
    lat: res.data.coord.lat,
    lon: res.data.coord.lon,
  };
};

// Hourly forecast (Open‑Meteo)
export const getHourlyForecast = async (lat, lon) => {
  const res = await axios.get(
    `https://api.open-meteo.com/v1/forecast`,
    {
      params: {
        latitude: lat,
        longitude: lon,
        hourly: "temperature_2m,relativehumidity_2m,windspeed_10m",
        forecast_days: 2,
        timezone: "auto",
      },
    }
  );

  return res.data;
};

// 30 Day Forecast (Open‑Meteo Climate API)
export const getMonthlyForecast = async (lat, lon) => {
  const res = await axios.get(
    `https://api.open-meteo.com/v1/forecast`,
    {
      params: {
        latitude: lat,
        longitude: lon,
        daily: "temperature_2m_max,temperature_2m_min",
        forecast_days: 30,
        timezone: "auto",
      },
    }
  );

  return res.data;
};