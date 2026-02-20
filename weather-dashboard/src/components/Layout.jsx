import { useEffect, useState } from "react";
import lightBg from "../assets/light-bg.jpg";
import darkBg from "../assets/dark-bg.jpg";

export default function Layout({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${theme === "dark" ? darkBg : lightBg})`,
      }}
    >
      <div className="min-h-screen backdrop-blur-md bg-white/40 dark:bg-black/50 transition-colors duration-500">
        {children}
      </div>
    </div>
  );
}