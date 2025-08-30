const API_BASE = "https://api.openweathermap.org/data/2.5/weather";

/**
 * Fetch current weather by city name.
 * We intentionally use the default (Kelvin) and convert in UI to satisfy the spec.
 */
export async function fetchWeatherByCity(city, apiKey) {
  const url = `${API_BASE}?q=${encodeURIComponent(city)}&appid=${apiKey}`;
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    const payload = await res.json().catch(() => ({}));
    const message = payload?.message || `Request failed with ${res.status}`;
    const error = new Error(message);
    error.status = res.status;
    throw error;
  }
  return res.json();
}

export function getIconUrl(iconCode) {
  // 2x icons for Retina
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
