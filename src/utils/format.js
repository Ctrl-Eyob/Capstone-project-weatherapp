export function formatHeadlineDate(date = new Date()) {
  const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
  const d = date.getDate();
  return `${day.toUpperCase()}, ${month.toUpperCase()} ${d}`;
}

export function toCelsiusFromKelvin(k) {
  if (typeof k !== "number") return null;
  return Math.round(k - 273.15);
}

export function titleCaseCity(city) {
  return city
    .split(",")
    .map(s => s.trim())
    .map(part => part.replace(/\w\S*/g, t => t[0].toUpperCase() + t.slice(1).toLowerCase()))
    .join(", ");
}
