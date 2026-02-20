import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  FiHome,
  FiClock,
  FiCalendar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";

export default function Sidebar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded-lg"
      >
        <FiMenu />
      </button>

      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white dark:bg-slate-800 shadow transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-6 font-bold text-xl">
          Weather App
        </div>

        <nav className="flex flex-col gap-4 px-6">
          <Tab icon={<FiHome />} label={t.dashboard} />
          <Tab icon={<FiClock />} label={t.hourly} />
          <Tab icon={<FiCalendar />} label={t.monthly} />
          <Tab icon={<FiSettings />} label={t.settings} />
        </nav>
      </aside>
    </>
  );
}

function Tab({ icon, label }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition">
      {icon}
      <span>{label}</span>
    </div>
  );
}