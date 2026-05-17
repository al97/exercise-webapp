import { useState } from "react";
import { BODY_DAYS, TAG_COLORS } from "../data";
import { useStorage, todayKey } from "../useStorage";
import ExerciseCard from "./ExerciseCard";

export default function BodyRoutine() {
  const today = new Date().getDay();
  const dayMap = [6, 0, 1, 2, 3, 4, 5];
  const [current, setCurrent] = useState(dayMap[today]);
  const [logs, setLogs] = useStorage("body-logs", {});
  const dateKey = todayKey();

  const toggleDone = (id) => {
    setLogs(prev => {
      const day = prev[dateKey] || {};
      return { ...prev, [dateKey]: { ...day, [id]: !day[id] } };
    });
  };

  const isDone = (id) => !!(logs[dateKey] || {})[id];
  const day = BODY_DAYS[current];

  const totalExercises = day.rest ? 0 : day.sections.reduce((a, s) => a + s.exercises.length, 0);
  const doneCount = day.rest ? 0 : day.sections.reduce((a, s) =>
    a + s.exercises.filter(e => isDone(e.id)).length, 0);

  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ margin: "0 0 4px", fontSize: 13, color: "#8a8a8a", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>APT · SHOULDER · HAMSTRINGS</p>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 300, color: "#1a1a1a" }}>Body routine</h2>
      </div>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: "1.25rem" }}>
        {BODY_DAYS.map((d, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            padding: "6px 14px", fontSize: 13, borderRadius: 8, cursor: "pointer",
            border: i === current ? "none" : "1px solid #e0e0e0",
            background: i === current ? "#1a1a1a" : d.rest ? "#f5f5f5" : "#fff",
            color: i === current ? "#fff" : d.rest ? "#aaa" : "#333",
            fontFamily: "'DM Mono', monospace",
            transition: "all 0.15s"
          }}>{d.label}</button>
        ))}
      </div>

      {!day.rest && totalExercises > 0 && (
        <div style={{ marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#8a8a8a", marginBottom: 6 }}>
            <span style={{ fontFamily: "'DM Mono', monospace" }}>{day.fullLabel}</span>
            <span style={{ fontFamily: "'DM Mono', monospace" }}>{doneCount}/{totalExercises}</span>
          </div>
          <div style={{ height: 3, background: "#f0f0f0", borderRadius: 2 }}>
            <div style={{ height: 3, borderRadius: 2, background: "#1a1a1a", width: `${(doneCount / totalExercises) * 100}%`, transition: "width 0.3s" }} />
          </div>
        </div>
      )}

      {day.rest ? (
        <div style={{ background: "#f9f9f9", borderRadius: 12, padding: "2.5rem", textAlign: "center", color: "#aaa", fontSize: 15, fontWeight: 300 }}>
          Rest day — light walking fine. Let your tissue adapt.
        </div>
      ) : (
        day.sections.map((sec, si) => (
          <div key={si}>
            <p style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", color: "#aaa", textTransform: "uppercase", margin: "1.5rem 0 10px" }}>{sec.title}</p>
            {sec.exercises.map(ex => {
              const done = isDone(ex.id);
              return (
                <ExerciseCard
                  key={ex.id}
                  ex={ex}
                  done={done}
                  onToggleDone={() => toggleDone(ex.id)}
                  extraBottom={
                    <button
                      onClick={() => toggleDone(ex.id)}
                      style={{
                        marginTop: 10, fontSize: 12, padding: "5px 14px",
                        borderRadius: 8, border: "none", cursor: "pointer",
                        background: done ? "#E1F5EE" : "#1a1a1a",
                        color: done ? "#085041" : "#fff",
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >{done ? "✓ done" : "Mark done"}</button>
                  }
                />
              );
            })}
          </div>
        ))
      )}

      <div style={{ marginTop: "1.5rem", display: "flex", gap: 16, flexWrap: "wrap" }}>
        {[["glute","glutes"],["ham","hamstrings"],["core","core"],["hip","hip flexors"],["stretch","mobility"],["shoulder","shoulder"],["scap","scapula"]].map(([k, label]) => {
          const tc = TAG_COLORS[k];
          return (
            <div key={k} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: tc.text }} />
              <span style={{ fontSize: 12, color: "#8a8a8a", fontFamily: "'DM Mono', monospace" }}>{label}</span>
            </div>
          );
        })}
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4a90d9" }} />
          <span style={{ fontSize: 12, color: "#8a8a8a", fontFamily: "'DM Mono', monospace" }}>pt-prescribed</span>
        </div>
      </div>
    </div>
  );
}
