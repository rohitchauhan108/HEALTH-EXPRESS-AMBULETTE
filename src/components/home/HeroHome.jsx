"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaCalendarCheck, FaWheelchair, FaShieldAlt, FaClock } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { IoIosCheckmarkCircle } from "react-icons/io";
import ImageSlot from "../ui/ImageSlot";
import { MedicalCross, EcgLine } from "../art/Art";

/**
 * HERO SLIDER
 * ------------------------------------------------------------------
 * To use your own (AI / photo) images: save them in /public/images/hero/
 * with the file names below (slide-1.jpg … slide-4.jpg). No code changes.
 * If a file is missing, an SVG illustration is shown instead.
 * Image prompts for every slide: docs/AI-IMAGE-PROMPTS.md
 */
const SLIDES = [
  {
    image: "/images/hero/slide-1.jpg",
    art: "van",
    tag: "Since 2009 · NYC Ambulette",
    lines: ["Making Expert", "Ambulette Services", "for All"],
    text: "We provide reliable and comfortable ambulette service NYC and non-emergency ambulette transportation services for medical appointments. We also accept Medicaid for non-emergency medical transport.",
  },
  {
    image: "/images/hero/slide-2.jpg",
    art: "caregiver",
    tag: "Wheelchair Accessible",
    lines: ["Door-to-Door Care,", "Wheelchair", "Accessible"],
    text: "Our fleet is fully equipped with wheelchair lifts, secure wheelchair locks, high top roofs and front & rear A/C — so every ride is safe and comfortable.",
  },
  {
    image: "/images/hero/slide-3.jpg",
    art: "van",
    tag: "Medicaid Accepted",
    lines: ["Medicaid Ambulette", "Transportation", "You Can Trust"],
    text: "Medicaid supports elderly & disabled patients with medical transportation services NYC to attend their doctor’s appointments. We make the process simple.",
  },
  {
    image: "/images/hero/slide-4.jpg",
    art: "stairs",
    tag: "Two Men Assist",
    lines: ["Two Men Assist", "Over Stairs,", "Safely"],
    text: "2 men safely carry you over steps if you live on the 2nd or 3rd floor building that has no elevator with our reliable NYC ambulette service.",
  },
];

const DURATION = 6500;
const emptyForm = { name: "", email: "", phone: "", location: "", date: "" };

export default function HeroHome() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState(null); // null | sending | ok | error
  const touch = useRef({ x: 0, y: 0 });
  const today = new Date().toISOString().split("T")[0];

  const go = useCallback((i) => setActive((i + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => setActive((a) => (a + 1) % SLIDES.length), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + SLIDES.length) % SLIDES.length), []);

  // autoplay (restarts on every slide change; pauses on hover / hidden tab)
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, DURATION);
    return () => clearTimeout(t);
  }, [active, paused, next]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // swipe support
  const onTouchStart = (e) => { touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; setPaused(true); };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) (dx < 0 ? next : prev)();
    setPaused(false);
  };
  const onKey = (e) => { if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev(); };

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .send(
        "service_fz071h8",
        "template_7px1z7k",
        { form_type: "Hero Section", ...form, message: "Booking request from Hero section" },
        "qo6SLdXEADDbP3U52"
      )
      .then(
        () => { setStatus("ok"); setForm(emptyForm); },
        (err) => { console.error("EmailJS Error:", err); setStatus("error"); }
      );
  };

  const field = "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[15px] text-ink placeholder:text-slate-400";

  return (
    <section className="relative" aria-roledescription="carousel" aria-label="Health Express Ambulette highlights" onKeyDown={onKey}>
      {/* ---------------- slider ---------------- */}
      <div
        className="relative overflow-hidden bg-hero-night h-[calc(100svh-90px)] min-h-[600px] md:min-h-[700px] md:h-[calc(100svh-120px)] touch-pan-y select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {SLIDES.map((s, i) => (
          <div
            key={i}
            aria-hidden={i !== active}
            className={`absolute inset-0 transition-opacity duration-[1100ms] ease-in-out ${i === active ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <ImageSlot
              src={s.image}
              alt={s.lines.join(" ")}
              variant={s.art}
              priority={i === 0}
              className="absolute inset-0 overflow-hidden"
              imgClassName={i === active ? "animate-kenburns" : ""}
            />
            {/* readability overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061a2f]/95 via-[#0a2540]/75 to-[#0a2540]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061a2f]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 pattern-cross-light opacity-60 pointer-events-none" />
          </div>
        ))}

        {/* decorative */}
        <MedicalCross className="hidden md:block absolute right-[8%] top-[14%] w-16 h-16 text-brand-400/25 animate-float z-20" />
        <EcgLine className="hidden md:block absolute right-[4%] bottom-[34%] w-[340px] text-brand-400/50 z-20" />

        {/* ---------------- slide copy ---------------- */}
        <div className="relative z-30 h-full max-w-7xl mx-auto px-5 md:px-10 flex items-center">
          <div key={active} className="max-w-[680px] pb-24 md:pb-44">
            <span className="fade-rise inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/25 text-white text-xs md:text-sm font-semibold px-4 py-1.5" style={{ animationDelay: ".05s" }}>
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" /> {SLIDES[active].tag}
            </span>

            <h1 className="mt-5 text-white font-display font-extrabold leading-[1.05] text-[clamp(2.1rem,5.6vw,4.4rem)]">
              {SLIDES[active].lines.map((l, i) => (
                <span key={i} className="hero-line">
                  <span style={{ animationDelay: `${0.15 + i * 0.14}s` }} className={i === 1 ? "text-gradient" : ""}>{l}</span>
                </span>
              ))}
            </h1>

            <p className="fade-rise mt-5 text-white/85 text-[15px] md:text-lg leading-relaxed max-w-[560px]" style={{ animationDelay: ".7s" }}>
              {SLIDES[active].text}
            </p>

            <div className="fade-rise mt-7 flex flex-col sm:flex-row gap-3" style={{ animationDelay: ".9s" }}>
              <Link href="/schedule" className="btn btn-accent btn-shine"><FaCalendarCheck /> Book Online</Link>
              <a href="tel:+19175143080" className="btn btn-ghost"><FaPhoneAlt /> Call 917-514-3080</a>
            </div>

            <ul className="fade-rise mt-7 hidden sm:flex [@media(max-height:820px)]:!hidden flex-wrap gap-x-6 gap-y-2 text-white/80 text-sm" style={{ animationDelay: "1.1s" }}>
              <li className="flex items-center gap-2"><FaClock className="text-brand-400" /> Open 24/7</li>
              <li className="flex items-center gap-2"><FaWheelchair className="text-brand-400" /> Wheelchair lift vans</li>
              <li className="flex items-center gap-2"><FaShieldAlt className="text-brand-400" /> Medicaid accepted</li>
            </ul>
          </div>
        </div>

        {/* ---------------- controls ---------------- */}
        <div className="absolute z-30 left-0 right-0 bottom-[104px] md:bottom-36">
          <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3" role="tablist" aria-label="Choose slide">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => go(i)}
                  className="group relative h-6 flex items-center"
                >
                  <span className={`relative block h-[5px] rounded-full overflow-hidden bg-white/30 transition-all duration-500 ${i === active ? "w-14 md:w-20" : "w-6 md:w-8 group-hover:bg-white/60"}`}>
                    {i === active && (
                      <span
                        key={`${active}-${paused}`}
                        className="absolute inset-0 bg-brand-400 progress-bar"
                        style={{ animationDuration: `${DURATION}ms`, animationPlayState: paused ? "paused" : "running" }}
                      />
                    )}
                    {i < active && <span className="absolute inset-0 bg-white/80" />}
                  </span>
                </button>
              ))}
              <span className="ml-2 text-white/80 text-sm font-semibold tabular-nums">0{active + 1}<span className="text-white/40"> / 0{SLIDES.length}</span></span>
            </div>
            <div className="hidden sm:flex gap-2">
              <button onClick={prev} aria-label="Previous slide" className="w-11 h-11 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-ink transition"><HiArrowLeft /></button>
              <button onClick={next} aria-label="Next slide" className="w-11 h-11 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-ink transition"><HiArrowRight /></button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- quick booking strip ---------------- */}
      <div className="relative z-40 px-4 md:pl-10 md:pr-24 -mt-[88px] md:-mt-0 md:absolute md:left-0 md:right-0 md:bottom-5">
        <form
          onSubmit={onSubmit}
          className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lift border border-brand-100 p-4 md:p-4 lg:flex lg:items-center lg:gap-5"
        >
          <div className="flex items-center gap-3 mb-3 lg:mb-0 lg:shrink-0 lg:pr-5 lg:border-r lg:border-brand-100">
            <span className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center"><FaCalendarCheck /></span>
            <div className="leading-tight">
              <p className="text-[11px] font-bold uppercase tracking-widest text-brand-600">Need Transportation?</p>
              <p className="font-display font-extrabold text-ink text-xl">Book Now</p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-[1fr_1.2fr_1fr_.9fr_1fr_auto] gap-3 lg:flex-1">
            <input type="text" name="name" placeholder="Your Name*" value={form.name} onChange={onChange} required className={`${field} col-span-2 lg:col-span-1`} />
            <input type="email" name="email" placeholder="Email*" value={form.email} onChange={onChange} required className={`${field} col-span-2 lg:col-span-1`} />
            <input type="tel" name="phone" placeholder="Phone*" value={form.phone} onChange={onChange} required className={field} />
            <select name="location" value={form.location} onChange={onChange} required className={`${field} ${form.location ? "" : "text-slate-400"}`}>
              <option value="" disabled>Location</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Staten Island">Staten Island</option>
            </select>
            <input type="date" name="date" min={today} value={form.date} onChange={onChange} required className={`${field} col-span-2 lg:col-span-1 ${form.date ? "" : "text-slate-400"}`} />
            <button type="submit" disabled={status === "sending"} className="btn btn-primary col-span-2 lg:col-span-1 disabled:opacity-60 !px-5">
              <IoIosCheckmarkCircle className="text-lg" /> {status === "sending" ? "Sending…" : "Make an Appointment"}
            </button>
          </div>
          {status === "ok" && <p role="status" className="mt-3 lg:mt-0 text-sm font-semibold text-emerald-700 flex items-center gap-1 lg:absolute lg:-top-11 lg:right-0 lg:bg-white lg:rounded-full lg:px-4 lg:py-2 lg:shadow-soft"><IoIosCheckmarkCircle className="text-lg" /> Appointment request sent!</p>}
          {status === "error" && <p role="alert" className="mt-3 lg:mt-0 text-sm font-semibold text-accent-dark lg:absolute lg:-top-11 lg:right-0 lg:bg-white lg:rounded-full lg:px-4 lg:py-2 lg:shadow-soft">Failed to send request. Try again.</p>}
        </form>
      </div>
    </section>
  );
}
