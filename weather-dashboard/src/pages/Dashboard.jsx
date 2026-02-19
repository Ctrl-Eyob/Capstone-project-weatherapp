import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-900 transition-colors">
      <Sidebar />

      <main className="flex-1 p-6">
        <Topbar />

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Weather card will go here */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
            Weather Card
          </div>

          {/* Metrics */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
            Metrics
          </div>

          {/* Chart */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
            Hourly Chart
          </div>
        </div>
      </main>
    </div>
  );
}
