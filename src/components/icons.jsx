import React from "react";

export const Search = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export const Droplet = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      d="M12 2.5S6 9 6 13a6 6 0 0012 0c0-4-6-10.5-6-10.5z" />
  </svg>
);

export const Wind = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      d="M3 12h12a3 3 0 100-6M3 18h8a3 3 0 110 6" transform="translate(0 -6)" />
  </svg>
);

export const CloudRain = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      d="M16 13h1a4 4 0 000-8 5 5 0 00-9.58 1.5A4.5 4.5 0 006.5 13H16z" />
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 16l-1 3M12 16l-1 3M16 16l-1 3" />
  </svg>
);

export const Alert = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
  </svg>
);
