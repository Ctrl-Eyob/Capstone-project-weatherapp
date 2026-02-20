import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

console.log("ENV KEY VALUE:", API_KEY);

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const getCurrentWeather = async (city) => {
  return api.get(
    `/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
};

export const getForecast = async (city) => {
  return api.get(
    `/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
};