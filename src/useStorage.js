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

export function weekNumber() {
  const d = new Date();
  const jan1 = new Date(d.getFullYear(), 0, 1);
  return Math.ceil(((d - jan1) / 86400000 + jan1.getDay() + 1) / 7);
}
