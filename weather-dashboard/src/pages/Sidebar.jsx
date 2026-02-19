import { FaHome, FaClock, FaCalendarAlt, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-slate-800 p-6 shadow">
      <h2 className="text-xl font-bold mb-8">Weather</h2>

      <nav className="space-y-6">
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaHome /> Dashboard
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaClock /> Hourly Forecast
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaCalendarAlt /> Monthly Forecast
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaCog /> Settings
        </div>
      </nav>
    </aside>
  );
}
