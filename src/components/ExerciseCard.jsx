import { useState } from "react";
import { VIDEOS, TAG_COLORS } from "../data";

export default function ExerciseCard({ ex, done, onToggleDone, extraBottom }) {
  const [showVideo, setShowVideo] = useState(false);
  const tc = TAG_COLORS[ex.tag] || TAG_COLORS.stretch;
  const videoId = ex.videoKey ? VIDEOS[ex.videoKey] : null;

  return (
    <div style={{
      background: done ? "#f9f9f9" : "#fff",
      border: `1px solid ${done ? "#e8e8e8" : "#ebebeb"}`,
      borderLeft: ex.pt ? "3px solid #4a90d9" : undefined,
      borderRadius: ex.pt ? "0 12px 12px 0" : "12px",
      padding: "14px 16px",
      marginBottom: 8,
      opacity: done ? 0.65 : 1,
      transition: "all 0.15s",
    }}>
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 4 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3, flexWrap: "wrap" }}>
            <span style={{
              fontSize: 15, fontWeight: done ? 300 : 500, color: "#1a1a1a",
              textDecoration: done ? "line-through" : "none", cursor: onToggleDone ? "pointer" : "default"
            }} onClick={onToggleDone}>{ex.name}</span>
            {done && <span style={{ fontSize: 11, color: "#4a90d9", fontFamily: "'DM Mono', monospace" }}>done</span>}
          </div>
          <p style={{ fontSize: 13, color: "#8a8a8a", margin: "0 0 6px", fontFamily: "'DM Mono', monospace" }}>{ex.meta}</p>
          <p style={{ fontSize: 13, color: "#666", margin: 0, lineHeight: 1.55 }}>{ex.note}</p>
        </div>
        <span style={{
          fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 500,
          whiteSpace: "nowrap", background: tc.bg, color: tc.text,
          fontFamily: "'DM Mono', monospace", flexShrink: 0,
        }}>{ex.tag}</span>
      </div>

      {/* Progress note */}
      {ex.progressNote && (
        <p style={{ fontSize: 12, color: "#aaa", fontFamily: "'DM Mono', monospace", margin: "6px 0 0" }}>{ex.progressNote}</p>
      )}

      {/* Extra bottom slot (pain logger for wrist, done toggle for body) */}
      {extraBottom}

      {/* Video toggle */}
      {videoId && (
        <div style={{ marginTop: 10, borderTop: "1px solid #f0f0f0", paddingTop: 10 }}>
          <button
            onClick={() => setShowVideo(v => !v)}
            style={{
              fontSize: 12, padding: "4px 12px", borderRadius: 8,
              border: "1px solid #e0e0e0", background: showVideo ? "#1a1a1a" : "#fff",
              color: showVideo ? "#fff" : "#666",
              cursor: "pointer", fontFamily: "'DM Mono', monospace",
              display: "flex", alignItems: "center", gap: 6,
            }}
          >
            <span>{showVideo ? "▲" : "▶"}</span>
            <span>{showVideo ? "Hide video" : "Watch tutorial"}</span>
          </button>
          {showVideo && (
            <div style={{ marginTop: 10, borderRadius: 10, overflow: "hidden", aspectRatio: "16/9", background: "#000" }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                title={ex.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: "block" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
