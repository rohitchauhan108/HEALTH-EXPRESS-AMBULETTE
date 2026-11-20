"use client";
import React, { useEffect, useState } from "react";

/** Full-screen logo loader – logo in the middle, ambulance drives across the bottom. */
export default function Loader() {
  const [phase, setPhase] = useState("show"); // show -> hide -> gone

  useEffect(() => {
    const MIN = 3600; // let the ambulance finish crossing before fading
    const FADE = 500; // must match the transition duration below
    const hide = setTimeout(() => setPhase("hide"), MIN);
    const gone = setTimeout(() => setPhase("gone"), MIN + FADE);
    return () => { clearTimeout(hide); clearTimeout(gone); };
  }, []);

  if (phase === "gone") return null;
  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-hero-night overflow-hidden transition-all duration-[500ms] ${phase === "hide" ? "opacity-0 scale-105 pointer-events-none" : "opacity-100"}`}
    >
      <div className="absolute inset-0 pattern-cross-light opacity-70" />

      {/* Center logo */}
      <div className="relative w-40 h-40 md:w-48 md:h-48">
        <span className="absolute inset-0 rounded-full border-2 border-brand-400/40 animate-ping-slow" />
        <span className="absolute inset-0 rounded-full border-2 border-brand-400/30 animate-ping-slow [animation-delay:1s]" />
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin [animation-duration:1.6s]">
          <circle cx="50" cy="50" r="47" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="2" />
          <circle cx="50" cy="50" r="47" fill="none" stroke="#14B8C4" strokeWidth="3" strokeLinecap="round" strokeDasharray="90 210" />
        </svg>
        <div className="absolute inset-[10px] rounded-full bg-white overflow-hidden flex items-center justify-center shadow-2xl">
          <img src="/images/Logo.jpg" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Bottom road + driving ambulance */}
      <div className="absolute bottom-0 left-0 w-full pb-10 md:pb-14">
        {/* road line */}
        <div className="relative h-px w-full bg-white/15">
          <div className="absolute inset-0 flex items-center justify-between px-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="w-6 h-0.5 bg-white/30" />
            ))}
          </div>
        </div>

        {/* ambulance */}
        <div className="absolute bottom-3 left-0 animate-[drive_3.6s_linear_forwards]">
          <svg width="150" height="74" viewBox="0 0 150 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* shadow */}
            <ellipse cx="75" cy="70" rx="60" ry="4" fill="rgba(0,0,0,.35)" />
            {/* wheels */}
            <circle cx="40" cy="60" r="9" fill="#0f172a" />
            <circle cx="40" cy="60" r="4" fill="#94a3b8" />
            <circle cx="112" cy="60" r="9" fill="#0f172a" />
            <circle cx="112" cy="60" r="4" fill="#94a3b8" />
            {/* main body */}
            <rect x="8" y="22" width="88" height="38" rx="5" fill="#ffffff" />
            {/* cabin */}
            <path d="M96 30 L142 30 L142 60 L96 60 Z" fill="#ffffff" />
            {/* teal top strip */}
            <rect x="8" y="18" width="88" height="7" rx="3.5" fill="#14B8C4" />
            {/* windshield */}
            <path d="M99 33 L139 33 L139 46 L99 46 Z" fill="#0ea5b7" />
            <path d="M99 33 L139 33 L136 36 L102 36 Z" fill="rgba(255,255,255,.35)" />
            {/* window */}
            <rect x="14" y="28" width="38" height="14" rx="2" fill="#0ea5b7" />
            <rect x="14" y="28" width="38" height="5" rx="2" fill="rgba(255,255,255,.3)" />
            {/* red cross */}
            <rect x="64" y="34" width="5" height="14" rx="1.5" fill="#ef4444" />
            <rect x="59" y="38.5" width="15" height="5" rx="1.5" fill="#ef4444" />
            {/* siren light */}
            <rect x="44" y="11" width="16" height="8" rx="2" fill="#ef4444" />
            <rect x="44" y="11" width="8" height="8" rx="2" fill="#ef4444" className="animate-pulse" />
            <rect x="60" y="11" width="8" height="8" rx="2" fill="#3b82f6" className="animate-pulse" />
            <rect x="42" y="9" width="20" height="3" rx="1.5" fill="#1e293b" />
            {/* front light */}
            <rect x="138" y="50" width="5" height="6" rx="1.5" fill="#fde68a" />
            {/* handle */}
            <rect x="90" y="44" width="4" height="10" rx="2" fill="#94a3b8" />
          </svg>
        </div>
      </div>
    </div>
  );
}
