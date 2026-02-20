import ThemeToggle from "./ThemeToggle";

export default function Topbar({ search, setSearch, onSearch }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h1 className="text-2xl font-bold">
        Weather Dashboard
      </h1>

      <div className="flex items-center gap-3">
        <ThemeToggle />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search city..."
          className="px-4 py-2 rounded-full border dark:bg-slate-700"
        />

        <button
          onClick={onSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Search
        </button>
      </div>
    </div>
  );
}