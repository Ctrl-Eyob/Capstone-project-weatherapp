import { createContext, useContext, useState } from "react";

const translations = {
  en: {
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
  },
  am: {
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
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "en"
  );

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider
      value={{ t: translations[lang], lang, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);