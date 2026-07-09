// AuroraHeading.jsx
import React from "react";

export function AuroraHeading({
  text,
  fontSize = "clamp(2rem, 8vw, 4rem)",
  className = "",
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <style>{`
        @keyframes aurora-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <h2
        className="font-bold tracking-tight bg-clip-text text-transparent"
        style={{
          fontSize,
          backgroundImage:
            "linear-gradient(90deg, #ffffff, #737373, #ffffff, #a3a3a3, #ffffff)",
          backgroundSize: "300% 100%",
          animation: "aurora-shift 6s ease-in-out infinite",
        }}
      >
        {text}
      </h2>
    </div>
  );
}