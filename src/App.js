import { useState } from "react";
import BodyRoutine from "./components/BodyRoutine";
import WristRoutine from "./components/WristRoutine";
import Progress from "./components/Progress";

const NAV = [
  { id: "body", label: "Body" },
  { id: "wrist", label: "Wrist" },
  { id: "progress", label: "Progress" },
];

export default function App() {
  const [tab, setTab] = useState("body");

  return (
    <div style={{
      minHeight: "100vh",
      background: "#fafafa",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{
        maxWidth: 680,
        margin: "0 auto",
        padding: "0 20px 100px",
      }}>
        <header style={{
          padding: "28px 0 20px",
          borderBottom: "1px solid #ebebeb",
          marginBottom: "1.5rem",
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}>
          <div>
            <span style={{
              fontSize: 13,
              fontFamily: "'DM Mono', monospace",
              color: "#aaa",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>Albert's</span>
            <h1 style={{
              margin: "2px 0 0",
              fontSize: 26,
              fontWeight: 300,
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
            }}>Rehab dashboard</h1>
          </div>
          <div style={{
            fontSize: 12,
            fontFamily: "'DM Mono', monospace",
            color: "#aaa",
          }}>
            {new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
          </div>
        </header>

        <main>
          {tab === "body" && <BodyRoutine />}
          {tab === "wrist" && <WristRoutine />}
          {tab === "progress" && <Progress />}
        </main>
      </div>

      {/* Bottom nav */}
      <nav style={{
        position: "fixed",
        bottom: 0, left: 0, right: 0,
        background: "rgba(250,250,250,0.92)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid #ebebeb",
        display: "flex",
        justifyContent: "center",
        gap: 4,
        padding: "10px 20px 20px",
        zIndex: 100,
      }}>
        {NAV.map(n => (
          <button key={n.id} onClick={() => setTab(n.id)} style={{
            flex: 1,
            maxWidth: 180,
            padding: "10px 0",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            background: tab === n.id ? "#1a1a1a" : "transparent",
            color: tab === n.id ? "#fff" : "#888",
            fontSize: 13,
            fontFamily: "'DM Mono', monospace",
            fontWeight: tab === n.id ? 500 : 400,
            transition: "all 0.15s",
          }}>{n.label}</button>
        ))}
      </nav>
    </div>
  );
}
