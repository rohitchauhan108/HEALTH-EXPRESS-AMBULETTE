"use client";

import React from "react";
import Reveal from "../ui/Reveal";
import { HiChevronDown } from "react-icons/hi2";
const bgImage = "/images/Home/rescue-service-4975223_1920.jpg";

const faqData = [
  { question: "Difference between Ambulance & Ambulette?", answer: "Ambulance is for emergencies while ambulette is for non-emergency medical transportation." },
  { question: "Is Ambulette covered by Medicaid insurance?", answer: "Yes, Medicaid will have to approve though, for those that are qualified for transportation assistance." },
  { question: "How to start Ambulette service?", answer: "The process of getting a Non-emergency medical transportation ambulette service from Expert Ambulette Services:\n\n1) Call us now or schedule a callback\n\n2) Schedule a pickup for transportation\n\n3) Driver will call you 15 minutes prior to your pickup.\n\nContact us now for the most comfortable and reliable ambulette transportation service." },
];

const HomeAsq = () => (
  <section className="relative w-full bg-fixed bg-cover bg-center px-4 md:px-10 py-14 md:py-24" style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="absolute inset-0 bg-white/90" />
    <div className="absolute inset-0 pattern-cross" />
    <div className="relative max-w-4xl mx-auto">
      <Reveal className="text-center">
        <p className="eyebrow justify-center">Got questions?</p>
        <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(1.8rem,3.4vw,2.8rem)] mb-10">Frequently Asked Questions</h2>
      </Reveal>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <Reveal key={index} delay={index * 0.12}>
            <details className="group bg-white rounded-2xl border border-brand-100 shadow-soft open:shadow-lift open:border-brand-400 transition-all">
              <summary className="cursor-pointer list-none flex justify-between items-center gap-4 p-5 md:p-6 text-ink font-display font-bold text-base md:text-lg">
                <span className="flex items-center gap-4"><span className="w-9 h-9 shrink-0 rounded-full bg-brand-50 text-brand-700 text-sm flex items-center justify-center group-open:bg-brand-600 group-open:text-white transition">{index + 1}</span>{item.question}</span>
                <HiChevronDown className="shrink-0 text-2xl text-brand-600 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="px-5 md:px-6 pb-6 md:pl-[76px] text-ink-500 text-[15px] md:text-base leading-relaxed whitespace-pre-line">{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HomeAsq;
