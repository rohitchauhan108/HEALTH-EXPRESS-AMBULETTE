/**
 * Custom SVG art for Health Express Ambulette.
 * Everything here is drawn in code and uses the site palette, so it can be
 * used as a fallback when a photo/AI image has not been dropped in yet.
 */
import React from "react";

const T = "#0E8A94", TB = "#14B8C4", INK = "#0A2540", RED = "#E5484D", MINT = "#EAF6F6";

/* ------------------------------------------------------------------ */
/* Ambulette van, side view – wheels spin, lights flash, road moves     */
/* ------------------------------------------------------------------ */
export function AmbuletteArt({ className = "", animated = true }) {
  const Wheel = ({ cx }) => (
    <g transform={`translate(${cx} 232)`}>
      <circle r="34" fill="#13233a" />
      <g className={animated ? "animate-[spin_1.2s_linear_infinite]" : ""} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <circle r="22" fill="#cfd8e2" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <rect key={a} x="-2" y="-20" width="4" height="14" rx="2" fill="#7b8da1" transform={`rotate(${a})`} />
        ))}
        <circle r="7" fill="#7b8da1" />
      </g>
    </g>
  );
  return (
    <svg viewBox="0 0 620 300" className={className} role="img" aria-label="Illustration of a wheelchair accessible ambulette van">
      <defs>
        <linearGradient id="vanBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#e7f1f4" />
        </linearGradient>
        <linearGradient id="vanGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8fe3ea" /><stop offset="1" stopColor="#2a9fb0" />
        </linearGradient>
      </defs>
      {/* ground shadow + road dashes */}
      <ellipse cx="310" cy="270" rx="270" ry="12" fill="rgba(10,37,64,.25)" />
      <g>
        <g opacity=".55">
          {Array.from({ length: 9 }).map((_, i) => (
            <rect key={i} x={i * 80 - 20} y="284" width="44" height="5" rx="2.5" fill="#fff">
              {animated && <animate attributeName="x" from={i * 80 - 20} to={i * 80 - 100} dur="1.1s" repeatCount="indefinite" />}
            </rect>
          ))}
        </g>
      </g>
      {/* body */}
      <path d="M40 215V120c0-22 16-40 38-40h250c20 0 34 8 46 24l54 52c14 6 22 20 22 36v23H40z" fill="url(#vanBody)" stroke="#c4d3dc" strokeWidth="2" />
      {/* roof light bar */}
      <rect x="300" y="68" width="70" height="12" rx="6" fill="#102a46" />
      <rect x="304" y="70" width="28" height="8" rx="4" fill={RED}>{animated && <animate attributeName="opacity" values="1;.15;1" dur=".9s" repeatCount="indefinite" />}</rect>
      <rect x="338" y="70" width="28" height="8" rx="4" fill={TB}>{animated && <animate attributeName="opacity" values=".15;1;.15" dur=".9s" repeatCount="indefinite" />}</rect>
      {/* windows */}
      <rect x="70" y="100" width="82" height="52" rx="8" fill="url(#vanGlass)" />
      <rect x="162" y="100" width="82" height="52" rx="8" fill="url(#vanGlass)" />
      <rect x="254" y="100" width="62" height="52" rx="8" fill="url(#vanGlass)" />
      <path d="M330 100h38c8 0 14 3 20 10l26 28c3 4 1 14-6 14h-78z" fill="url(#vanGlass)" />
      <path d="M78 108l30-8M170 108l30-8" stroke="#fff" strokeOpacity=".55" strokeWidth="4" strokeLinecap="round" />
      {/* teal stripe + red cross */}
      <rect x="40" y="166" width="440" height="14" fill={T} />
      <rect x="40" y="182" width="440" height="5" fill={TB} />
      <g transform="translate(205 196)">
        <rect x="-14" y="-5" width="28" height="10" rx="2" fill={RED} />
        <rect x="-5" y="-14" width="10" height="28" rx="2" fill={RED} />
      </g>
      {/* rear wheelchair lift door */}
      <rect x="40" y="95" width="18" height="115" rx="4" fill="#dce8ee" stroke="#c4d3dc" />
      <rect x="22" y="206" width="26" height="8" rx="3" fill="#8aa0b4" />
      {/* bumper + lights */}
      <rect x="494" y="190" width="30" height="20" rx="8" fill="#102a46" />
      <circle cx="520" cy="178" r="9" fill="#fff6c9" />
      <circle cx="520" cy="178" r="22" fill="#fff6c9" opacity=".25" />
      <rect x="42" y="150" width="8" height="18" rx="3" fill={RED} />
      {/* lower skirt */}
      <path d="M40 213h484v14c0 6-4 10-10 10H50c-6 0-10-4-10-10z" fill="#102a46" />
      {/* wheel arches + wheels */}
      <circle cx="140" cy="232" r="42" fill="#0b1a2e" />
      <circle cx="420" cy="232" r="42" fill="#0b1a2e" />
      <Wheel cx={140} />
      <Wheel cx={420} />
      {/* handrail */}
      <path d="M262 92v-6" stroke="#c4d3dc" strokeWidth="3" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Caregiver assisting a wheelchair passenger                            */
/* ------------------------------------------------------------------ */
export function CaregiverArt({ className = "" }) {
  return (
    <svg viewBox="0 0 420 340" className={className} role="img" aria-label="Illustration of a caregiver helping a wheelchair passenger">
      <circle cx="215" cy="170" r="150" fill={MINT} />
      <circle cx="215" cy="170" r="110" fill="#fff" opacity=".6" />
      <ellipse cx="215" cy="305" rx="165" ry="10" fill="rgba(10,37,64,.18)" />
      {/* floating plus */}
      <g className="animate-float" style={{ transformOrigin: "340px 70px" }}>
        <circle cx="340" cy="70" r="26" fill={RED} />
        <rect x="334" y="56" width="12" height="28" rx="3" fill="#fff" />
        <rect x="326" y="64" width="28" height="12" rx="3" fill="#fff" />
      </g>
      {/* wheelchair */}
      <g>
        <path d="M205 150v70h82" stroke={INK} strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M205 150h-22" stroke={INK} strokeWidth="9" strokeLinecap="round" />
        <path d="M205 220l-14 56" stroke="#8aa0b4" strokeWidth="6" strokeLinecap="round" />
        <circle cx="225" cy="262" r="42" fill="none" stroke={INK} strokeWidth="8" />
        <circle cx="225" cy="262" r="30" fill="none" stroke="#8aa0b4" strokeWidth="2" strokeDasharray="4 6" />
        <circle cx="225" cy="262" r="6" fill={INK} />
        <circle cx="312" cy="285" r="14" fill="none" stroke={INK} strokeWidth="6" />
        <path d="M287 220l22 62" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      </g>
      {/* passenger */}
      <g>
        <circle cx="236" cy="104" r="22" fill="#f2c9a5" />
        <path d="M216 100c2-20 36-26 44-2-10-6-26-8-44 2z" fill="#cdd5dd" />
        <path d="M218 128h40l8 62h-56z" fill="#6d8fc7" />
        <path d="M212 190h84l6 20h-92z" fill="#5a78ab" />
        <rect x="284" y="205" width="14" height="52" rx="7" fill="#4a5f86" transform="rotate(-8 291 230)" />
        <rect x="292" y="252" width="26" height="9" rx="4" fill={INK} />
        <path d="M252 138l32 28" stroke="#6d8fc7" strokeWidth="12" strokeLinecap="round" />
        <circle cx="288" cy="170" r="7" fill="#f2c9a5" />
        {/* blanket */}
        <path d="M212 188c20 14 60 14 88 4l-6 26c-26 8-58 6-84-6z" fill={TB} opacity=".9" />
      </g>
      {/* caregiver */}
      <g>
        <circle cx="140" cy="86" r="23" fill="#d99a73" />
        <path d="M118 82c2-22 44-26 46 0-12-8-30-10-46 0z" fill="#2b2a33" />
        <path d="M112 118c0-10 10-16 28-16s28 6 28 16l8 92h-72z" fill={T} />
        <path d="M122 118l18 22 18-22" fill="#fff" />
        <circle cx="150" cy="150" r="4.5" fill="#fff" />
        <rect x="116" y="210" width="20" height="78" rx="9" fill={INK} />
        <rect x="140" y="210" width="20" height="78" rx="9" fill="#16365c" />
        <rect x="108" y="282" width="32" height="11" rx="5" fill="#0b1a2e" />
        <rect x="136" y="282" width="32" height="11" rx="5" fill="#0b1a2e" />
        <path d="M164 128l32 14 12 8" stroke={T} strokeWidth="14" strokeLinecap="round" fill="none" />
        <circle cx="210" cy="152" r="7" fill="#d99a73" />
      </g>
      {/* heart badge */}
      <g transform="translate(70 200)" className="animate-float" style={{ animationDelay: "1s" }}>
        <circle r="24" fill="#fff" stroke={MINT} strokeWidth="3" />
        <path d="M0 11C-14 2 -14-9 -6-9c4 0 6 2 6 5 0-3 2-5 6-5 8 0 8 11-6 20z" fill={RED} />
      </g>
    </svg>
  );
}

/* Two caregivers carrying a passenger over stairs – simplified */
export function StairsArt({ className = "" }) {
  return (
    <svg viewBox="0 0 420 340" className={className} role="img" aria-label="Illustration of two assistants helping a passenger up stairs">
      <circle cx="215" cy="170" r="150" fill={MINT} />
      <path d="M60 290h70v-40h70v-40h70v-40h70v-40h50v160z" fill={T} opacity=".9" />
      <path d="M60 290h70v-40h70v-40h70v-40h70v-40" fill="none" stroke={INK} strokeWidth="6" strokeLinejoin="round" />
      {[[150, 190], [250, 150]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <circle cx="0" cy="-30" r="16" fill={i ? "#d99a73" : "#f2c9a5"} />
          <rect x="-16" y="-14" width="32" height="48" rx="12" fill={i ? INK : RED} />
          <rect x="-12" y="30" width="10" height="26" rx="5" fill="#0b1a2e" />
          <rect x="2" y="30" width="10" height="26" rx="5" fill="#0b1a2e" />
        </g>
      ))}
      <path d="M170 168l60-28" stroke="#fff" strokeWidth="14" strokeLinecap="round" />
      <circle cx="200" cy="148" r="16" fill="#6d8fc7" />
      <circle cx="212" cy="132" r="13" fill="#f2c9a5" />
      <g className="animate-float">
        <circle cx="340" cy="80" r="24" fill={RED} />
        <rect x="334" y="68" width="12" height="24" rx="3" fill="#fff" />
        <rect x="328" y="74" width="24" height="12" rx="3" fill="#fff" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Small reusable pieces                                                  */
/* ------------------------------------------------------------------ */
export function MedicalCross({ className = "", color = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" fill={color} />
    </svg>
  );
}

export function EcgLine({ className = "" }) {
  return (
    <svg viewBox="0 0 400 60" className={className} aria-hidden="true" fill="none">
      <path className="ecg" d="M0 30h110l14-22 18 46 16-38 12 14h230" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WaveDivider({ className = "", fill = "#fff", flip = false }) {
  return (
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className={`block w-full h-[40px] md:h-[70px] ${flip ? "rotate-180" : ""} ${className}`} aria-hidden="true">
      <path d="M0 40c240 60 480 60 720 20s480-40 720 10v20H0z" fill={fill} />
    </svg>
  );
}

/** Generic photo placeholder with art – shown until an image is dropped in */
export function PlaceholderArt({ variant = "van", className = "" }) {
  const A = variant === "caregiver" ? CaregiverArt : variant === "stairs" ? StairsArt : AmbuletteArt;
  return (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-50 via-white to-brand-100 pattern-cross ${className}`}>
      <A className="w-[78%] max-h-[88%]" />
    </div>
  );
}
