import { useState, useEffect } from "react";

export function useStorage(key, initial) {
  const [val, setVal] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initial;
    } catch { return initial; }
  });

  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(val)); }
    catch {}
  }, [key, val]);

  return [val, setVal];
}

export function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

// Returns the ISO week string "YYYY-Www" for a given date (defaults to today)
export function weekKey(date) {
  const d = date ? new Date(date) : new Date();
  const day = d.getDay() === 0 ? 7 : d.getDay(); // Mon=1 Sun=7
  d.setDate(d.getDate() + 4 - day);
  const jan1 = new Date(d.getFullYear(), 0, 1);
  const wk = Math.ceil(((d - jan1) / 86400000 + 1) / 7);
  return `${d.getFullYear()}-W${String(wk).padStart(2, "0")}`;
}

// How many distinct days in a given week key have at least one body exercise logged
export function daysLoggedInWeek(bodyLogs, wk) {
  return Object.entries(bodyLogs).filter(([date, exMap]) => {
    return weekKey(date) === wk && Object.values(exMap).some(Boolean);
  }).length;
}

export function weekNumber() {
  const d = new Date();
  const jan1 = new Date(d.getFullYear(), 0, 1);
  return Math.ceil(((d - jan1) / 86400000 + jan1.getDay() + 1) / 7);
}
