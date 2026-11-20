"use client";

import {
  FaCarSide,
  FaUserDoctor,
  FaHandHoldingMedical,
  FaWheelchair,
  FaUserNurse,
  FaHospital,
  FaStethoscope,
  FaClock,
} from "react-icons/fa6";

/**
 * ServiceMarquee – infinite scrolling band of services with icons.
 * Pure CSS animation (no JS), pauses on hover.
 */
const items = [
  { label: "Ambulette Service Brooklyn", icon: <FaCarSide /> },
  { label: "Private Medical Transportation", icon: <FaUserDoctor /> },
  { label: "Medicaid Ambulette Service", icon: <FaHandHoldingMedical /> },
  { label: "Wheelchair Accessible Vans", icon: <FaWheelchair /> },
  { label: "Two Men Assist Over Stairs", icon: <FaUserNurse /> },
  { label: "Hospital Discharge Transfers", icon: <FaHospital /> },
  { label: "Doctor Appointment Rides", icon: <FaStethoscope /> },
  { label: "We're Open 24/7", icon: <FaClock /> },
];

const Row = () => (
  <div className="flex items-center shrink-0">
    {items.map((it, i) => (
      <span key={i} className="flex items-center">
        <span className="flex items-center gap-3 px-6 md:px-10 whitespace-nowrap">
          <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-600 text-white flex items-center justify-center text-base md:text-lg shadow-md">
            {it.icon}
          </span>
          <span className="font-display text-xl md:text-3xl tracking-wide text-brand-700">
            {it.label}
          </span>
        </span>
        <span className="text-brand-300 text-2xl md:text-3xl select-none">✦</span>
      </span>
    ))}
  </div>
);

export default function ServiceMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-brand-200 bg-gradient-to-r from-brand-50 via-white to-brand-50 py-6 md:py-8">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-brand-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-brand-50 to-transparent z-10" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Row />
        <Row />
      </div>
    </section>
  );
}
