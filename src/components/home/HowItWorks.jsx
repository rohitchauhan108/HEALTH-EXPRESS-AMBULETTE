"use client";
import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaCalendarAlt, FaUserCheck } from "react-icons/fa";
import Reveal from "../ui/Reveal";

/** NEW section – steps taken from the existing FAQ answer "How to start Ambulette service?" */
const steps = [
  { icon: <FaPhoneAlt />, title: "Call us or schedule a callback", text: "Call us now or schedule a callback to tell us what you need." },
  { icon: <FaCalendarAlt />, title: "Schedule a pickup", text: "Schedule a pickup for transportation at the time that works for you." },
  { icon: <FaUserCheck />, title: "Driver calls you", text: "Your driver will call you 15 minutes prior to your pickup." },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-hero-night text-white py-14 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pattern-cross-light" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-10">
        <Reveal><p className="eyebrow !text-brand-300">How It Works</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 font-display font-extrabold text-[clamp(1.8rem,3.4vw,2.9rem)] leading-tight max-w-2xl">How to start Ambulette service in 3 simple steps</h2>
        </Reveal>

        <div className="relative grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
          <div className="hidden md:block absolute top-[52px] left-[16%] right-[16%] border-t-2 border-dashed border-brand-400/50" />
          {steps.map((s, i) => (
            <Reveal key={i} delay={0.15 * i}>
              <div className="relative text-center rounded-3xl bg-white/[.06] border border-white/15 backdrop-blur p-7 md:p-8 hover:bg-white/10 transition">
                <div className="relative mx-auto w-[84px] h-[84px] rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-3xl flex items-center justify-center shadow-glow">
                  {s.icon}
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-accent text-sm font-extrabold flex items-center justify-center ring-4 ring-[#0a2540]">{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display font-bold text-xl">{s.title}</h3>
                <p className="mt-2 text-white/75 text-[15px] leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Link href="/schedule" className="btn btn-accent btn-shine">Schedule Online</Link>
        </Reveal>
      </div>
    </section>
  );
}
