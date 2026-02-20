import Sidebar from "../components/Sidebar";

export default function Monthly() {
  return (
    <div className="min-h-screen flex bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white">
      <Sidebar />

      <main className="flex-1 p-6 md:ml-64">
        <h1 className="text-3xl font-bold mb-6">
          Monthly Forecast
        </h1>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
          Monthly forecast data will appear here.
        </div>
      </main>
    </div>
  );
}