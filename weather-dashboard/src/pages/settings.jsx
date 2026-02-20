import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Settings() {
  const { t } = useTranslation();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || i18n.language
  );

  // Apply theme on load
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  // Change theme
  const handleThemeChange = (mode) => {
    setTheme(mode);
    localStorage.setItem("theme", mode);
  };

  // Change language
  const handleLanguageChange = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <Sidebar />

      <main className="flex-1 p-6 md:ml-64">
        <h1 className="text-3xl font-bold mb-8">
          {t("settings")}
        </h1>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow space-y-8">

          {/* Theme Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Theme
            </h2>

            <div className="flex gap-4">
              <button
                onClick={() => handleThemeChange("light")}
                className={`px-4 py-2 rounded-lg ${
                  theme === "light"
                    ? "bg-blue-500 text-white"
                    : "bg-slate-200 dark:bg-slate-700"
                }`}
              >
                Light
              </button>

              <button
                onClick={() => handleThemeChange("dark")}
                className={`px-4 py-2 rounded-lg ${
                  theme === "dark"
                    ? "bg-blue-500 text-white"
                    : "bg-slate-200 dark:bg-slate-700"
                }`}
              >
                Dark
              </button>
            </div>
          </div>

          {/* Language Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {t("language")}
            </h2>

            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="p-3 rounded-lg bg-slate-200 dark:bg-slate-700"
            >
              <option value="en">English</option>
              <option value="am">አማርኛ</option>
            </select>
          </div>

        </div>
      </main>
    </div>
  );
}