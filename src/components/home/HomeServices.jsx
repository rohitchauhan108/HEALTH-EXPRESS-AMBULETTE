"use client";

import React from "react";
import Link from "next/link";
import Reveal from "../ui/Reveal";
import { FaUserMd } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { GiStairs } from "react-icons/gi";
import { HiArrowRight } from "react-icons/hi2";

const cardData = [
  {
    title: "Private Medical Transportation",
    description: "Expert Ambulette Services specializes in luxury private NYC ambulette service and professional ambulette transportation services, ensuring safe and reliable medical transport",
    icon: <FaUserMd />,
    href: "/services/private-medical-transportation",
  },
  {
    title: "Medicaid Ambulette Transportation",
    description: "Medicaid is an advantageous program that supports elderly & disabled patients with medical transportation services NYC to attend their doctor’s appointments.",
    icon: <MdLocalHospital />,
    href: "/services/medicaid-ambulette-service",
  },
  {
    title: "Two Men Assist Over Stairs",
    description: "2 men safely carry you over steps if you live on the 2nd or 3rd floor building that has no elevator with our reliable NYC ambulette service.",
    icon: <GiStairs />,
    href: "/services/two-men-assist-over-stairs",
  },
];

const HomeServices = () => (
  <section className="relative overflow-hidden bg-white py-14 md:py-24">
    <div className="absolute inset-0 pattern-dots opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
    <div className="relative max-w-7xl mx-auto px-4 md:px-10">
      <Reveal>
        <p className="eyebrow">Ambulette Services that you can depend on</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-3 font-display font-extrabold text-ink leading-tight text-[clamp(1.8rem,3.6vw,3rem)] max-w-3xl">
          We take pride in our medical transportation Ambulette services NYC.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
        {cardData.map((item, i) => (
          <Reveal key={i} delay={0.1 * (i + 1)}>
            <article className="group relative h-full rounded-3xl bg-white border border-brand-100 p-7 md:p-8 shadow-soft overflow-hidden card-lift">
              {/* decorative background circle + number */}
              <span className="absolute right-5 top-5 w-28 h-28 rounded-full bg-brand-50" />
              <span className="absolute right-8 top-8 font-display text-5xl text-brand-200 group-hover:text-brand-400 transition-colors duration-300 select-none">0{i + 1}</span>

              <div className="relative z-10">
                {/* icon box */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white text-3xl flex items-center justify-center shadow-glow">
                  {item.icon}
                </div>

                <h3 className="mt-7 font-display text-xl md:text-[22px] leading-snug text-ink">{item.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-500">{item.description}</p>

                <Link href={item.href} className="mt-6 inline-flex items-center gap-2 font-bold text-sm text-brand-600 group-hover:gap-3 transition-all duration-300">
                  Learn more <HiArrowRight />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HomeServices;
