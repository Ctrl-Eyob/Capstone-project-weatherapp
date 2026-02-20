import { useEffect, useState } from "react";
import lightBg from "../assets/Screenshot 2026-02-20 205457.png";
import darkBg from "../assets/lucie-morel-Wk63a3_NMf0-unsplash.jpg";

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
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: `url(${theme === "dark" ? darkBg : lightBg})`,
      }}
    >
      {/* Overlay */}
      <div className="min-h-screen w-full backdrop-blur-md bg-white/40 dark:bg-black/60 transition-colors duration-500">
        {children}
      </div>
    </div>
  );
}