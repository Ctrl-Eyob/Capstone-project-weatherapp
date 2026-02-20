import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      dashboard: "Dashboard",
      hourly: "Hourly Forecast",
      monthly: "Monthly Forecast",
      settings: "Settings",
      search: "Search city...",
      humidity: "Humidity",
      wind: "Wind Speed",
      visibility: "Visibility",
      pressure: "Pressure",
      feels: "Feels like",
      language: "Language",
      loading: "Loading...",
    },
  },
  am: {
    translation: {
      dashboard: "ዳሽቦርድ",
      hourly: "የሰዓት ትንበያ",
      monthly: "ወርሃዊ ትንበያ",
      settings: "ቅንብሮች",
      search: "ከተማ ፈልግ...",
      humidity: "እርጥበት",
      wind: "የነፋስ ፍጥነት",
      visibility: "እይታ",
      pressure: "ግፊት",
      feels: "እንደሚሰማ",
      language: "ቋንቋ",
      loading: "በመጫን ላይ...",
    },
  },
};

// Detect browser language
const detectLanguage = () => {
  const saved = localStorage.getItem("lang");
  if (saved) return saved;

  const browserLang = navigator.language.split("-")[0];
  if (browserLang === "am") return "am";

  return "en";
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detectLanguage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;