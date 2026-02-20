export default function FiveDayForecast({ forecast }) {
  if (!forecast) return null;

  // Filter one forecast per day (every 8th item = 24hrs)
  const dailyData = forecast.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow mt-6">
      <h3 className="text-lg font-semibold mb-6">
        5-Day Forecast
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {dailyData.slice(0, 5).map((day, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-slate-100 dark:bg-slate-700 rounded-xl transition hover:scale-105"
          >
            <p className="font-medium">
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="w-16 h-16"
            />

            <p className="text-lg font-bold">
              {Math.round(day.main.temp)}°C
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-300 capitalize">
              {day.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}