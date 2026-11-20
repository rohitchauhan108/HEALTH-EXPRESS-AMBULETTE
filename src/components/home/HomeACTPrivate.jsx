"use client";

import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { CiHospital1 } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import Reveal from "../ui/Reveal";

const cardData = [
  { logo: <FaUserDoctor />, heading: "Doctors Appointments", des: "Have an appointment with the doctor and need ambulette service NYC or medical transportation NYC to the clinic? Health Express Ambulette Inc. staff will drive you to and back from your appointments." },
  { logo: <CiHospital1 />, heading: "Transfer Hospitals", des: "You may need to move from one hospital to another for better treatment. Ambulance services are expensive, our private NYC ambulette service and medical transportation NYC are affordable." },
  { logo: <CgCalendarDates />, heading: "Lab Tests", des: "Have ongoing blood tests, MRI, and Catscan appointments? Once the doctor has set a schedule, ask the secretary to send it over to us for safe and comfortable ambulette services NYC and medical transportation services NYC." },
];

const HomeACTPrivate = () => (
  <section className="relative bg-soft-mint py-14 md:py-24 overflow-hidden">
    <div className="absolute inset-0 pattern-waves opacity-80" />
    <div className="relative max-w-7xl mx-auto px-4 md:px-10">
      <Reveal className="text-center">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(1.7rem,3.2vw,2.8rem)] leading-tight">Health Express Ambulette <br className="hidden md:block" /> Transportation Services</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-center mt-4 text-ink-500 text-base md:text-lg">Schedule private medical transportation services NYC for all your medical appointments.</p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
        {cardData.map((item, i) => (
          <Reveal key={i} delay={i * 0.15}>
            <div className="group h-full bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-soft border border-white card-lift relative overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-brand-500 to-brand-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="bg-brand-50 text-brand-600 w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-6 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-110 transition duration-500">{item.logo}</div>
              <h3 className="font-display font-bold text-xl text-ink mb-3">{item.heading}</h3>
              <p className="text-[15px] leading-relaxed text-ink-500">{item.des}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HomeACTPrivate;
