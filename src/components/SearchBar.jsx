import React, { useState } from "react";
import { Search } from "./icons";

export default function SearchBar({ onSearch, loading }) {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!value.trim() || loading) return;
    onSearch(value.trim());
    setValue("");
  };

  return (
    <form
      onSubmit={submit}
      className="flex w-full gap-2"
      aria-label="Search city weather"
    >
      <input
        type="text"
        className="w-full rounded-xl2 border border-slate-200 bg-white px-4 py-3 outline-none focus:border-slate-400"
        placeholder="Search city (e.g., Addis Ababa, ET)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-xl2 bg-brand-accent px-4 py-3 font-medium text-white shadow-soft hover:opacity-90 disabled:opacity-60"
      >
        <Search className="h-5 w-5" />
        <span className="hidden sm:inline">Search</span>
      </button>
    </form>
  );
}
