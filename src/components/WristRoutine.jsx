import { useState } from "react";
import { WRIST_EXERCISES } from "../data";
import { useStorage, todayKey, weekNumber } from "../useStorage";
import ExerciseCard from "./ExerciseCard";

const SECTION_LABELS = {
  stretch:  "Stretching & mobility — after every 45–60 min of hand use",
  iso:      "Isometrics — twice daily, AM + PM",
  strength: "Strength & endurance — once daily",
  neural:   "Neural glides — once daily, gentle",
};

function calcLoad(ex, weekData, irritability) {
  const baseCapacity = 1 - (irritability / 20) * 0.62;
  const week = weekData.week || 1;
  const avgPain = weekData.avgPain?.[ex.id] ?? null;
  let multiplier = baseCapacity;
  if (week > 1 && avgPain !== null) {
    if (avgPain <= 2) multiplier = Math.min(1, multiplier * (1 + 0.1 * (week - 1)));
    else if (avgPain > 4) multiplier = multiplier * 0.8;
  }
  if (ex.type === "iso") {
    const secs = Math.round(35 + (45 - 35) * Math.min(1, (week - 1) * 0.25) * multiplier);
    return { sets: 3, value: `${secs}s hold`, rest: "45s" };
  }
  if (ex.type === "strength") {
    const reps = ex.baseReps === "8 each way" ? "8 each way"
      : Math.round(typeof ex.baseReps === "number" ? ex.baseReps * Math.min(1.25, multiplier + (week - 1) * 0.05) : 8);
    const sets = week >= 3 && avgPain !== null && avgPain <= 2 ? 3 : 2;
    return { sets, value: `${reps} reps`, rest: "60s", weight: ex.baseWeight };
  }
  if (ex.type === "stretch") return { sets: 3, value: "20–30s", rest: "15s" };
  if (ex.type === "neural")  return { sets: 2, value: "10 oscillations", rest: "30s" };
  return { sets: ex.baseSets, value: ex.baseDuration, rest: ex.baseRest };
}

const adaptMsg = (pain) => {
  if (pain === null) return null;
  if (pain <= 2) return { type: "ok",   msg: "Pain within target — complete full prescription." };
  if (pain <= 4) return { type: "warn", msg: "Mild pain — reduce to 1 set today. Flag for next week." };
  return             { type: "stop", msg: "Pain above threshold — stop this exercise. Rest and retry tomorrow." };
};

const adaptColors = {
  ok:   { bg: "#E1F5EE", color: "#085041" },
  warn: { bg: "#FAEEDA", color: "#633806" },
  stop: { bg: "#FCEBEB", color: "#791F1F" },
};

export default function WristRoutine() {
  const [irritability, setIrritability] = useStorage("wrist-irritability", 8.6);
  const [weekData, setWeekData] = useStorage("wrist-week", { week: 1, avgPain: {}, weekNum: weekNumber() });
  const [sessionPain, setSessionPain] = useStorage(`wrist-session-${todayKey()}`, {});
  const [logged, setLogged] = useStorage(`wrist-logged-${todayKey()}`, {});
  const [editIrr, setEditIrr] = useState(false);
  const [irrInput, setIrrInput] = useState(String(irritability));

  const sections = {};
  WRIST_EXERCISES.forEach(ex => {
    if (!sections[ex.type]) sections[ex.type] = [];
    sections[ex.type].push(ex);
  });

  const logExercise = (id) => {
    if (sessionPain[id] === undefined) return;
    setLogged(prev => ({ ...prev, [id]: true }));
    setWeekData(prev => {
      const pains = { ...(prev.avgPain || {}) };
      pains[id] = pains[id] !== undefined ? (pains[id] + sessionPain[id]) / 2 : sessionPain[id];
      return { ...prev, avgPain: pains };
    });
  };

  const totalEx = WRIST_EXERCISES.length;
  const loggedCount = Object.keys(logged).length;
  const loadCapacityPct = Math.round((1 - (irritability / 20) * 0.62) * 100);

  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ margin: "0 0 4px", fontSize: 13, color: "#8a8a8a", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>RSI · WRIST · FOREARM</p>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 300, color: "#1a1a1a" }}>Wrist rehab program</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: "1.5rem" }}>
        {[
          { label: "Irritability", val: `${irritability}/20`, sub: "mild-moderate" },
          { label: "Load capacity", val: `${loadCapacityPct}%`, sub: "of full load" },
          { label: "Week", val: weekData.week, sub: `Logged ${loggedCount}/${totalEx} today` },
        ].map(({ label, val, sub }) => (
          <div key={label} style={{ background: "#f5f5f5", borderRadius: 10, padding: "12px 14px" }}>
            <p style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "#aaa", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
            <p style={{ fontSize: 20, fontWeight: 500, color: "#1a1a1a", margin: "0 0 2px" }}>{val}</p>
            <p style={{ fontSize: 11, color: "#8a8a8a", margin: 0, fontFamily: "'DM Mono', monospace" }}>{sub}</p>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: "1.5rem", background: "#f9f9f9", borderRadius: 10, padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <span style={{ fontSize: 13, color: "#666", fontFamily: "'DM Mono', monospace" }}>Irritability index:</span>
        {editIrr ? (
          <>
            <input type="number" min="0" max="20" step="0.1" value={irrInput}
              onChange={e => setIrrInput(e.target.value)}
              style={{ width: 70, fontSize: 13, padding: "4px 8px", border: "1px solid #ddd", borderRadius: 6, fontFamily: "'DM Mono', monospace" }} />
            <button onClick={() => {
              const v = parseFloat(irrInput);
              if (!isNaN(v) && v >= 0 && v <= 20) { setIrritability(v); setEditIrr(false); }
            }} style={{ fontSize: 13, padding: "4px 12px", border: "none", borderRadius: 6, cursor: "pointer", background: "#1a1a1a", color: "#fff", fontFamily: "'DM Mono', monospace" }}>Save</button>
            <button onClick={() => setEditIrr(false)} style={{ fontSize: 13, padding: "4px 10px", border: "1px solid #ddd", borderRadius: 6, cursor: "pointer", background: "#fff", fontFamily: "'DM Mono', monospace" }}>Cancel</button>
          </>
        ) : (
          <>
            <span style={{ fontSize: 14, fontWeight: 500, fontFamily: "'DM Mono', monospace" }}>{irritability}/20</span>
            <button onClick={() => setEditIrr(true)} style={{ fontSize: 12, padding: "4px 10px", border: "1px solid #ddd", borderRadius: 6, cursor: "pointer", background: "#fff", color: "#666", fontFamily: "'DM Mono', monospace" }}>Update</button>
            <button onClick={() => setWeekData(prev => ({ ...prev, week: prev.week + 1, avgPain: {} }))}
              style={{ fontSize: 12, padding: "4px 10px", border: "1px solid #ddd", borderRadius: 6, cursor: "pointer", background: "#fff", color: "#666", fontFamily: "'DM Mono', monospace", marginLeft: "auto" }}>+ Next week</button>
          </>
        )}
      </div>

      {["stretch", "iso", "strength", "neural"].map(type => (
        <div key={type}>
          <p style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", color: "#aaa", textTransform: "uppercase", margin: "1.5rem 0 10px" }}>
            {SECTION_LABELS[type]}
          </p>
          {(sections[type] || []).map(ex => {
            const load = calcLoad(ex, weekData, irritability);
            const pain = sessionPain[ex.id] ?? null;
            const adapt = adaptMsg(pain);
            const isLogged = !!logged[ex.id];

            const loadGrid = (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, margin: "10px 0" }}>
                {[
                  ["Sets", load.sets],
                  [ex.type === "stretch" || ex.type === "iso" ? "Duration" : "Reps", load.value],
                  load.weight ? ["Weight", load.weight] : ["Rest", load.rest]
                ].map(([label, val]) => (
                  <div key={label} style={{ background: "#f5f5f5", borderRadius: 8, padding: "8px 10px" }}>
                    <p style={{ fontSize: 11, color: "#aaa", margin: "0 0 3px", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</p>
                    <p style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a", margin: 0, fontFamily: "'DM Mono', monospace" }}>{val}</p>
                  </div>
                ))}
              </div>
            );

            const painLogger = (
              <div>
                {loadGrid}
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", borderTop: "1px solid #f0f0f0", paddingTop: 10 }}>
                  <span style={{ fontSize: 12, color: "#aaa", fontFamily: "'DM Mono', monospace" }}>Pain 0–5:</span>
                  {[0,1,2,3,4,5].map(v => {
                    const sel = pain === v;
                    const pbg = v <= 2 ? "#E1F5EE" : v <= 4 ? "#FAEEDA" : "#FCEBEB";
                    const pc  = v <= 2 ? "#085041" : v <= 4 ? "#633806" : "#791F1F";
                    return (
                      <button key={v} onClick={() => setSessionPain(prev => ({ ...prev, [ex.id]: v }))} style={{
                        fontSize: 12, padding: "3px 10px", borderRadius: 20, cursor: "pointer",
                        border: sel ? "none" : "1px solid #e0e0e0",
                        background: sel ? pbg : "#fff", color: sel ? pc : "#666",
                        fontFamily: "'DM Mono', monospace", fontWeight: sel ? 500 : 400,
                      }}>{v === 0 ? "0 none" : v === 5 ? "5 severe" : v}</button>
                    );
                  })}
                  <button onClick={() => logExercise(ex.id)} disabled={pain === null || isLogged}
                    style={{
                      marginLeft: "auto", fontSize: 12, padding: "5px 14px", borderRadius: 8,
                      cursor: pain === null || isLogged ? "default" : "pointer", border: "none",
                      background: isLogged ? "#E1F5EE" : pain === null ? "#f0f0f0" : "#1a1a1a",
                      color: isLogged ? "#085041" : pain === null ? "#aaa" : "#fff",
                      fontFamily: "'DM Mono', monospace",
                    }}>{isLogged ? "✓ logged" : "Log done"}</button>
                </div>
                {adapt && (
                  <div style={{ marginTop: 8, padding: "6px 10px", borderRadius: 8, fontSize: 12, fontFamily: "'DM Mono', monospace", background: adaptColors[adapt.type].bg, color: adaptColors[adapt.type].color }}>
                    {adapt.msg}
                  </div>
                )}
              </div>
            );

            return (
              <ExerciseCard
                key={ex.id}
                ex={{ ...ex, meta: `${load.sets} sets · ${load.value}${load.weight ? ` · ${load.weight}` : ""}` }}
                done={isLogged}
                extraBottom={painLogger}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
