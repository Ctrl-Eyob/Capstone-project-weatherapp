import { NavLink } from "react-router-dom";
import { FaHome, FaClock, FaCalendarAlt, FaCog } from "react-icons/fa";

export default function Sidebar() {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition ${
      isActive
        ? "bg-blue-500 text-white"
        : "text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
    }`;

  return (
    <aside className="fixed md:static top-0 left-0 h-full w-64 
    bg-white dark:bg-slate-800 
    border-r border-slate-200 dark:border-slate-700
    p-6 transition-colors duration-300">

      <h2 className="text-xl font-bold mb-8 text-slate-900 dark:text-white">
        Weather
      </h2>

      <nav className="space-y-4">

        <NavLink to="/" className={linkClasses}>
          <FaHome />
          Dashboard
        </NavLink>

        <NavLink to="/hourly" className={linkClasses}>
          <FaClock />
          Hourly Forecast
        </NavLink>

        <NavLink to="/monthly" className={linkClasses}>
          <FaCalendarAlt />
          Monthly Forecast
        </NavLink>

        <NavLink to="/settings" className={linkClasses}>
          <FaCog />
          Settings
        </NavLink>

      </nav>
    </aside>
  );
}