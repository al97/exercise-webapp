import { useStorage } from "../useStorage";

function getDatesInRange(days) {
  const result = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    result.push(d.toISOString().slice(0, 10));
  }
  return result;
}

export default function Progress() {
  const [bodyLogs] = useStorage("body-logs", {});
  const [weekData] = useStorage("wrist-week", { week: 1, avgPain: {} });
  const [irritability] = useStorage("wrist-irritability", 8.6);

  const dates = getDatesInRange(28);
  const today = new Date().toISOString().slice(0, 10);

  const streakCount = (() => {
    let count = 0;
    const sorted = [...dates].reverse();
    for (const d of sorted) {
      const dayLogs = bodyLogs[d] || {};
      if (Object.keys(dayLogs).length > 0) count++;
      else if (d !== today) break;
    }
    return count;
  })();

  const totalBodyDays = dates.filter(d => Object.keys(bodyLogs[d] || {}).length > 0).length;

  const wristAvgPain = weekData.avgPain || {};
  const painVals = Object.values(wristAvgPain).filter(v => typeof v === "number");
  const avgPain = painVals.length ? (painVals.reduce((a, b) => a + b, 0) / painVals.length).toFixed(1) : "—";

  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ margin: "0 0 4px", fontSize: 13, color: "#8a8a8a", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>HISTORY · STATS</p>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 300, color: "#1a1a1a" }}>Progress</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, marginBottom: "1.5rem" }}>
        {[
          { label: "Current streak", val: `${streakCount}d`, sub: "body routine days" },
          { label: "Active days (4 wks)", val: totalBodyDays, sub: "out of 28" },
          { label: "Wrist rehab week", val: weekData.week, sub: "progressive loading" },
          { label: "Avg wrist pain", val: avgPain === "—" ? "—" : `${avgPain}/5`, sub: "this week" },
        ].map(({ label, val, sub }) => (
          <div key={label} style={{ background: "#f5f5f5", borderRadius: 10, padding: "14px 16px" }}>
            <p style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "#aaa", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
            <p style={{ fontSize: 24, fontWeight: 500, color: "#1a1a1a", margin: "0 0 2px" }}>{val}</p>
            <p style={{ fontSize: 11, color: "#8a8a8a", margin: 0, fontFamily: "'DM Mono', monospace" }}>{sub}</p>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", color: "#aaa", textTransform: "uppercase", margin: "0 0 12px" }}>Last 28 days — body routine</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 5, marginBottom: "1.5rem" }}>
        {["S","M","T","W","T","F","S"].map((d, i) => (
          <div key={i} style={{ textAlign: "center", fontSize: 11, fontFamily: "'DM Mono', monospace", color: "#aaa", marginBottom: 4 }}>{d}</div>
        ))}
        {dates.map(d => {
          const count = Object.keys(bodyLogs[d] || {}).length;
          const isToday = d === today;
          const hasActivity = count > 0;
          return (
            <div key={d} title={`${d}: ${count} exercises`} style={{
              height: 32, borderRadius: 6,
              background: hasActivity ? "#1a1a1a" : "#f0f0f0",
              border: isToday ? "2px solid #4a90d9" : "none",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, fontFamily: "'DM Mono', monospace",
              color: hasActivity ? "#fff" : "#ccc",
            }}>
              {hasActivity ? count : ""}
            </div>
          );
        })}
      </div>

      <p style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em", color: "#aaa", textTransform: "uppercase", margin: "0 0 12px" }}>Wrist load progression</p>
      <div style={{ background: "#f9f9f9", borderRadius: 12, padding: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontSize: 13, fontFamily: "'DM Mono', monospace", color: "#666" }}>Week {weekData.week} — load capacity</span>
          <span style={{ fontSize: 14, fontWeight: 500, fontFamily: "'DM Mono', monospace" }}>{Math.round((1 - (irritability / 20) * 0.62) * 100)}%</span>
        </div>
        <div style={{ height: 6, background: "#e0e0e0", borderRadius: 3 }}>
          <div style={{ height: 6, borderRadius: 3, background: "#1a1a1a", width: `${Math.round((1 - (irritability / 20) * 0.62) * 100)}%`, transition: "width 0.5s" }} />
        </div>
        <p style={{ fontSize: 12, color: "#aaa", fontFamily: "'DM Mono', monospace", margin: "10px 0 0" }}>
          Irritability {irritability}/20 · Load increases automatically as you progress weeks and pain stays low
        </p>

        {Object.keys(wristAvgPain).length > 0 && (
          <>
            <p style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em", color: "#aaa", textTransform: "uppercase", margin: "1.25rem 0 8px" }}>Per-exercise avg pain this week</p>
            {Object.entries(wristAvgPain).map(([id, pain]) => {
              const ex = { "w-1":"Wrist extensor stretch","w-2":"Thumb extensor stretch","w-3":"Wrist flexor stretch","w-4":"Isometric wrist extension","w-5":"Isometric ulnar deviation","w-6":"Isometric thumb extension","w-7":"Wrist extensor eccentric curl","w-8":"Finger extension with band","w-9":"Ulnar deviation with weight","w-10":"Supination/pronation","w-11":"Radial nerve glide","w-12":"Ulnar nerve glide" }[id] || id;
              const pct = (pain / 5) * 100;
              const barColor = pain <= 2 ? "#1D9E75" : pain <= 4 ? "#BA7517" : "#E24B4A";
              return (
                <div key={id} style={{ marginBottom: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontFamily: "'DM Mono', monospace", color: "#666", marginBottom: 3 }}>
                    <span>{ex}</span><span>{pain.toFixed(1)}/5</span>
                  </div>
                  <div style={{ height: 4, background: "#e0e0e0", borderRadius: 2 }}>
                    <div style={{ height: 4, borderRadius: 2, background: barColor, width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
