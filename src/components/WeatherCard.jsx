import React from "react";
import { getIconUrl } from "../services/weatherApi";
import { Droplet, Wind, CloudRain } from "./icons";
import { toCelsiusFromKelvin, formatHeadlineDate } from "../utils/format";

export default function WeatherCard({ data }) {
  const tempC = toCelsiusFromKelvin(data?.main?.temp);
  const city = data?.name;
  const country = data?.sys?.country;
  const humidity = data?.main?.humidity;
  const wind = data?.wind?.speed; // m/s
  const rain = data?.rain?.["1h"] ?? data?.rain?.["3h"] ?? 0; // mm
  const icon = data?.weather?.[0]?.icon;
  const description = data?.weather?.[0]?.description;

  return (
    <section className="rounded-3xl bg-brand-card shadow-soft p-6 md:p-8">
      {/* Headline */}
      <div className="mb-4 md:mb-6">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
          {formatHeadlineDate(new Date())}
        </p>
        <h1 className="mt-1 text-lg font-semibold tracking-wide text-slate-800 md:text-xl">
          {city?.toUpperCase()}, {country}
        </h1>
      </div>

      {/* Middle row */}
      <div className="flex items-center justify-between gap-4 md:gap-8">
        <div className="flex flex-col">
          <div className="text-[52px] font-bold leading-none md:text-[64px]">
            {Number.isFinite(tempC) ? `${tempC}°C` : "--"}
          </div>
          <span className="mt-2 text-sm capitalize text-slate-500">
            {description}
          </span>
        </div>

        <div className="shrink-0">
          {icon ? (
            <img
              src={getIconUrl(icon)}
              alt={description ?? "weather icon"}
              className="h-24 w-24 md:h-28 md:w-28"
              loading="eager"
            />
          ) : (
            <div className="h-24 w-24 rounded-full bg-slate-100" />
          )}
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-6 grid grid-cols-3 gap-3 md:gap-4">
        <Metric label="Humidity" value={`${humidity ?? "--"}%`} icon={<Droplet />} />
        <Metric label="Wind" value={`${wind ?? "--"} m/s`} icon={<Wind />} />
        <Metric label="Rain" value={`${rain ?? 0} mm`} icon={<CloudRain />} />
      </div>
    </section>
  );
}

function Metric({ label, value, icon }) {
  return (
    <div className="glass rounded-2xl border border-white/40 p-3 text-center md:p-4">
      <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 color-bluredgray">
        {icon}
      </div>
      <div className="text-sm text-slate-500">{label}</div>
      <div className="text-base font-semibold">{value}</div>
    </div>
  );
}
