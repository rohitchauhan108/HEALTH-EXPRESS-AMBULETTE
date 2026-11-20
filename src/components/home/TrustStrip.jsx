"use client";
import React from "react";
import { FaClock, FaWheelchair, FaShieldAlt, FaMapMarkedAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Reveal from "../ui/Reveal";

/** NEW section – quick trust points, content drawn from existing site copy. */
const items = [
  { icon: <MdVerified />, big: "Since 2009", small: "Private luxury medical transportation" },
  { icon: <FaClock />, big: "Open 24/7", small: "Same day request? Call us!" },
  { icon: <FaWheelchair />, big: "10+ Vehicles", small: "Wheelchair lifts, high tops, A/C" },
  { icon: <FaShieldAlt />, big: "Medicaid", small: "Accepted for non-emergency rides" },
  { icon: <FaMapMarkedAlt />, big: "5 Boroughs", small: "Brooklyn · Staten Island & more" },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-white pt-10 md:pt-16 pb-6 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.08} className={`${i === 4 ? "col-span-2 md:col-span-1" : ""}`}>
              <div className="group h-full flex items-center md:flex-col md:text-center gap-4 rounded-2xl p-4 md:p-6 bg-mint/60 border border-brand-100 hover:bg-white hover:shadow-soft transition">
                <span className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white text-brand-600 text-2xl flex items-center justify-center shadow-soft group-hover:bg-brand-600 group-hover:text-white group-hover:-rotate-6 transition">{it.icon}</span>
                <div>
                  <p className="font-display font-extrabold text-ink text-lg md:text-xl leading-tight">{it.big}</p>
                  <p className="text-[13px] text-ink-500 mt-0.5 leading-snug">{it.small}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
