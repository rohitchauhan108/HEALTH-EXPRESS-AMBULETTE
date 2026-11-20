"use client";

import React from "react";
import { LuBus, LuHeartCrack } from "react-icons/lu";
import Reveal from "../ui/Reveal";
import ImageSlot from "../ui/ImageSlot";
import { MedicalCross } from "../art/Art";

/** Image slot: drop /public/images/slots/transportation.jpg to replace the default photo. */
const ambulanceImage = "/images/Home/ambulanceService.jpeg";

const cards = [
  { icon: <LuHeartCrack />, title: "Specialized Support Service", text: "We’ve been offering private luxury wheelchair medical transportation services NYC since 2009 — ensuring professionalism, comfort, and care." },
  { icon: <LuBus />, title: "State of Art Features", text: "Our fleet is fully equipped with high top roofs, wheelchair lifts, special suspension, front and rear A/C & heating systems, secure wheelchair locking mechanisms, and reliable NYC ambulette service and medical transportation NYC for all patient needs." },
];

const HomeTransportation = () => (
  <section className="relative bg-white py-14 md:py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
      <Reveal direction="left" className="relative">
        <div className="absolute -inset-4 md:-inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-100 to-brand-50 -rotate-2" />
        <ImageSlot src={ambulanceImage} alt="Ambulance" variant="van" className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lift" />
        <div className="absolute -bottom-6 -right-2 md:-right-8 bg-white rounded-2xl shadow-lift px-5 py-4 flex items-center gap-3 animate-float">
          <span className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center"><MedicalCross className="w-6 h-6" color="#fff" /></span>
          <div className="leading-tight"><p className="font-display font-extrabold text-2xl text-ink">2009</p><p className="text-xs text-ink-500 font-semibold">Serving NYC since</p></div>
        </div>
      </Reveal>

      <div className="space-y-5 md:space-y-6 mt-6 md:mt-0">
        {cards.map((c, i) => (
          <Reveal key={i} delay={0.15 * (i + 1)} direction="right">
            <div className="group flex gap-5 rounded-3xl bg-white p-6 shadow-soft border border-brand-100 hover:border-brand-300 transition">
              <div className="shrink-0 w-16 h-16 rounded-full bg-brand-600 text-white text-3xl flex items-center justify-center group-hover:[transform:rotateY(360deg)] transition-transform duration-700">{c.icon}</div>
              <div>
                <h3 className="font-display font-bold text-xl text-ink">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{c.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HomeTransportation;
