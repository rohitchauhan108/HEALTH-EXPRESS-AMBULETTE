"use client";

import React, { useState } from "react";
import { LuBus } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Reveal from "../ui/Reveal";
const image = "/images/Home/rescue-3735206_1920.jpg";

const HomeSchedule = () => {
  const [formData, setFormData] = useState({ service: "", phone: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .send("service_fz071h8", "template_zd0t72q", { service: formData.service, phone: formData.phone }, "qo6SLdXEADDbP3U52")
      .then(
        () => { setStatus("ok"); setFormData({ service: "", phone: "" }); },
        (error) => { console.error("EmailJS Error:", error); setStatus("error"); }
      );
  };

  return (
    <section className="relative w-full py-16 md:py-28 px-4 flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#061a2f]/90 via-[#0a2540]/80 to-[#0e8a94]/60" />
      <div className="absolute inset-0 pattern-cross-light" />

      <Reveal direction="zoom" className="relative z-10 w-full max-w-xl">
        <div className="bg-white/95 backdrop-blur-xl p-7 md:p-10 rounded-[2rem] shadow-lift border border-white">
          <div className="flex items-center gap-4 mb-7">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white text-3xl flex items-center justify-center shadow-glow"><LuBus /></div>
            <h2 className="font-display font-extrabold text-xl md:text-2xl leading-snug text-brand-700">
              Schedule Your Appointment <br /><span className="text-ink">Online Now</span>
            </h2>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-ink mb-2 font-semibold text-sm">Select transportation service</label>
              <div className="relative">
                <select name="service" value={formData.service} onChange={handleChange} required className="w-full appearance-none bg-white text-ink px-4 py-3.5 rounded-xl border border-slate-200 font-semibold">
                  <option value="">Choose a service</option>
                  <option value="Livery">Livery</option>
                  <option value="Ambulette">Ambulette</option>
                  <option value="Wheelchair">Wheelchair</option>
                  <option value="2 Man Assist">2 Man Assist</option>
                </select>
                <MdArrowDropDown className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-brand-600 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-ink mb-2 font-semibold text-sm">Contact number</label>
              <div className="flex items-center bg-white px-4 py-3.5 rounded-xl border border-slate-200 gap-3 focus-within:border-brand-600 focus-within:shadow-glow transition">
                <FaPhoneAlt className="text-brand-600 text-lg" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter phone number" className="w-full text-ink font-semibold bg-transparent !border-0 !shadow-none focus:outline-none" />
              </div>
            </div>

            <button type="submit" disabled={status === "sending"} className="btn btn-primary btn-shine w-full !py-4 disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Book An Appointment"}
            </button>
            {status === "ok" && <p className="text-center text-sm font-semibold text-emerald-700">✅ Appointment request sent!</p>}
            {status === "error" && <p className="text-center text-sm font-semibold text-accent-dark">❌ Failed to send request</p>}
          </form>
        </div>
      </Reveal>
    </section>
  );
};

export default HomeSchedule;
