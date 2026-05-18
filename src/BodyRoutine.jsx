import { useState, useEffect } from "react";
import { BODY_DAYS, TAG_COLORS } from "../data";
import { useStorage, todayKey, weekKey, daysLoggedInWeek } from "../useStorage";
import { PROGRESSIONS, PROGRESSABLE_IDS, getLevel, computeNextLevel } from "../progressions";
import ExerciseCard from "./ExerciseCard";

// Returns a merged exercise object with the correct meta/note for current level
function resolveExercise(ex, levels) {
  if (!PROGRESSABLE_IDS.has(ex.id)) return ex;
  const lvl = levels[ex.id] || 1;
  const data = getLevel(ex.id, lvl);
  if (!data) return ex;
  return { ...ex, meta: data.meta, note: data.note, _level: lvl, _maxLevel: data.maxLevel };
}

function LevelBadge({ level, maxLevel, daysThisWeek, avgPain }) {
  const needDays = 4;
  const onTrack = daysThisWeek >= needDays && (avgPain === null || avgPain <= 2);
  const color = onTrack ? "#085041" : "#633806";
  const bg    = onTrack ? "#E1F5EE" : "#FAEEDA";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8 }}>
      <span style={{ fontSize: 11, padding: "2px 9px", borderRadius: 20, background: bg, color, fontFamily: "'DM Mono', monospace", fontWeight: 500 }}>
        Level {level}/{maxLevel}
      </span>
      <span style={{ fontSize: 11, color: "#aaa", fontFamily: "'DM Mono', monospace" }}>
        {daysThisWeek}/{needDays} days this week to advance
      </span>
    </div>
  );
}

export default function BodyRoutine() {
  const today = new Date().getDay();
  const dayMap = [6, 0, 1, 2, 3, 4, 5];
  const [current, setCurrent] = useState(dayMap[today]);
  const [logs, setLogs] = useStorage("body-logs", {});
  // levels: { [exId]: levelNumber }
  const [levels, setLevels] = useStorage("body-levels", {});
  // weekPain: { [weekKey]: { [exId]: avgPain } }
  const [weekPain, setWeekPain] = useStorage("body-week-pain", {});
  // lastProcessedWeek: the last week we ran progression on
  const [lastProcessedWeek, setLastProcessedWeek] = useStorage("body-last-processed-week", null);
  // progressionLog: array of { week, exId, from, to, reason } for display
  const [progressionLog, setProgressionLog] = useStorage("body-progression-log", []);

  const dateKey = todayKey();
  const currentWeek = weekKey();

  // On mount / week change: check if we need to process last week's progression
  useEffect(() => {
    const prevWeek = (() => {
      const d = new Date();
      d.setDate(d.getDate() - 7);
      return weekKey(d);
    })();

    if (lastProcessedWeek === prevWeek) return; // already processed
    if (!Object.keys(logs).length) return; // no data yet

    // Check if prevWeek has any data
    const prevDays = daysLoggedInWeek(logs, prevWeek);
    if (prevDays === 0 && lastProcessedWeek === null) return; // first week, nothing to process

    // Process progression for each progressable exercise
    const newLevels = { ...levels };
    const newLog = [];

    PROGRESSABLE_IDS.forEach(exId => {
      const currentLevel = levels[exId] || 1;
      const prog = PROGRESSIONS[exId];
      if (!prog) return;
      const maxLevel = prog.levels.length;
      const pains = (weekPain[prevWeek] || {})[exId];
      const avgPain = pains != null ? pains : null;
      const { newLevel, reason } = computeNextLevel(currentLevel, prevDays, avgPain, maxLevel);
      if (newLevel !== currentLevel) {
        newLevels[exId] = newLevel;
        newLog.push({ week: prevWeek, exId, name: prog.name, from: currentLevel, to: newLevel, reason });
      }
    });

    setLevels(newLevels);
    setLastProcessedWeek(prevWeek);
    if (newLog.length) setProgressionLog(prev => [...newLog, ...prev].slice(0, 30));
  }, [currentWeek]); // eslint-disable-line

  const toggleDone = (exId, painScore) => {
    setLogs(prev => {
      const day = prev[dateKey] || {};
      const newDone = !day[exId];
      return { ...prev, [dateKey]: { ...day, [exId]: newDone } };
    });
  };

  const logPain = (exId, pain) => {
    setWeekPain(prev => {
      const wk = prev[currentWeek] || {};
      const existing = wk[exId];
      const newAvg = existing != null ? (existing + pain) / 2 : pain;
      return { ...prev, [currentWeek]: { ...wk, [exId]: newAvg } };
    });
  };

  const isDone = (id) => !!(logs[dateKey] || {})[id];
  const day = BODY_DAYS[current];
  const daysThisWeek = daysLoggedInWeek(logs, currentWeek);

  const totalExercises = day.rest ? 0 : day.sections.reduce((a, s) => a + s.exercises.length, 0);
  const doneCount = day.rest ? 0 : day.sections.reduce((a, s) =>
    a + s.exercises.filter(e => isDone(e.id)).length, 0);

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <p style={{ margin: "0 0 4px", fontSize: 13, color: "#8a8a8a", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>APT · SHOULDER · HAMSTRINGS</p>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 300, color: "#1a1a1a" }}>Body routine</h2>
      </div>

      {/* Week progress bar */}
      <div style={{ background: "#f5f5f5", borderRadius: 10, padding: "10px 14px", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontFamily: "'DM Mono', monospace", color: "#aaa", marginBottom: 5 }}>
            <span>this week</span>
            <span>{daysThisWeek}/4 days to advance</span>
          </div>
          <div style={{ height: 4, background: "#e0e0e0", borderRadius: 2 }}>
            <div style={{ height: 4, borderRadius: 2, background: daysThisWeek >= 4 ? "#1D9E75" : "#1a1a1a", width: `${Math.min(100, (daysThisWeek / 4) * 100)}%`, transition: "width 0.3s" }} />
          </div>
        </div>
      </div>

      {/* Progression log (if any changes happened) */}
      {progressionLog.length > 0 && progressionLog.slice(0, 3).some(l => l.week === (() => { const d = new Date(); d.setDate(d.getDate() - 7); return weekKey(d); })()) && (
        <div style={{ background: "#E1F5EE", borderRadius: 10, padding: "10px 14px", marginBottom: "1.25rem" }}>
          <p style={{ fontSize: 12, fontWeight: 500, color: "#085041", margin: "0 0 6px", fontFamily: "'DM Mono', monospace" }}>↑ This week's progressions</p>
          {progressionLog.slice(0, 5).map((l, i) => (
            <p key={i} style={{ fontSize: 12, color: "#085041", margin: "2px 0", fontFamily: "'DM Mono', monospace" }}>
              {l.name}: Level {l.from} → {l.to} — {l.reason}
            </p>
          ))}
        </div>
      )}

      {/* Day tabs */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: "1.25rem" }}>
        {BODY_DAYS.map((d, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            padding: "6px 14px", fontSize: 13, borderRadius: 8, cursor: "pointer",
            border: i === current ? "none" : "1px solid #e0e0e0",
            background: i === current ? "#1a1a1a" : d.rest ? "#f5f5f5" : "#fff",
            color: i === current ? "#fff" : d.rest ? "#aaa" : "#333",
            fontFamily: "'DM Mono', monospace", transition: "all 0.15s"
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
              const resolved = resolveExercise(ex, levels);
              const done = isDone(ex.id);
              const isProgressable = PROGRESSABLE_IDS.has(ex.id);
              const lvl = resolved._level;
              const maxLvl = resolved._maxLevel;
              const currentPain = (weekPain[currentWeek] || {})[ex.id] ?? null;

              return (
                <ExerciseCard
                  key={ex.id}
                  ex={resolved}
                  done={done}
                  onToggleDone={() => toggleDone(ex.id)}
                  extraBottom={
                    <div>
                      {/* Level badge for progressable exercises */}
                      {isProgressable && (
                        <LevelBadge
                          level={lvl || 1}
                          maxLevel={maxLvl || 1}
                          daysThisWeek={daysThisWeek}
                          avgPain={currentPain}
                        />
                      )}

                      {/* Pain logger for progressable exercises */}
                      {isProgressable && (
                        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
                          <span style={{ fontSize: 11, color: "#aaa", fontFamily: "'DM Mono', monospace" }}>Pain:</span>
                          {[0,1,2,3,4,5].map(v => {
                            const sel = currentPain === v;
                            const pbg = v <= 2 ? "#E1F5EE" : v <= 4 ? "#FAEEDA" : "#FCEBEB";
                            const pc  = v <= 2 ? "#085041" : v <= 4 ? "#633806" : "#791F1F";
                            return (
                              <button key={v} onClick={() => logPain(ex.id, v)} style={{
                                fontSize: 11, padding: "2px 8px", borderRadius: 20, cursor: "pointer",
                                border: sel ? "none" : "1px solid #e8e8e8",
                                background: sel ? pbg : "#fff", color: sel ? pc : "#888",
                                fontFamily: "'DM Mono', monospace",
                              }}>{v}</button>
                            );
                          })}
                        </div>
                      )}

                      {/* Mark done button */}
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
                    </div>
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
      </div>
    </div>
  );
}
