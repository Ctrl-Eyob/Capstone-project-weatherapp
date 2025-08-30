import React from "react";

export default function LoadingSpinner({ label = "Loading..." }) {
  return (
    <div className="flex items-center gap-3 rounded-xl2 border border-slate-200 bg-white px-4 py-3 text-slate-700">
      <svg
        className="h-5 w-5 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      <span className="text-sm">{label}</span>
    </div>
  );
}
