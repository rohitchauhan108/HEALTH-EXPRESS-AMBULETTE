"use client";
import React, { useState } from "react";
import Reveal from "../ui/Reveal";
import ImageSlot from "../ui/ImageSlot";
import { HiXMark } from "react-icons/hi2";

/**
 * NEW section – our real fleet photos (public/images/fleet/van-1…van-7.jpg).
 * Replace / add photos with the same names – no code changes needed.
 * The heading + paragraph are the original "Fleet" copy from the old Services block.
 */
const photos = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/fleet/van-${n}.jpg`);

export default function FleetGallery() {
  const [lightbox, setLightbox] = useState(null);
  const loop = [...photos, ...photos];

  return (
    <section className="relative bg-soft-mint py-14 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pattern-cross" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-10 text-center">
        <Reveal><p className="eyebrow">Our Fleet</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 font-display font-extrabold text-ink text-[clamp(1.6rem,3vw,2.6rem)] leading-tight">
            Health Express Ambulette Inc. transportation Fleet
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 text-ink-500 text-base md:text-lg max-w-2xl mx-auto">
            Providing reliable, safe, and comfortable rides with professional medical transportation NYC for patients in need of transportation.
          </p>
        </Reveal>
      </div>

      {/* auto-scrolling gallery */}
      <div className="relative mt-10 md:mt-14 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(src)}
              className="group relative shrink-0 w-[280px] md:w-[400px] aspect-[4/3] rounded-3xl overflow-hidden shadow-soft ring-4 ring-white"
              aria-label="Open fleet photo"
            >
              <ImageSlot src={src} alt="Health Express Ambulette wheelchair accessible van" variant="van" className="w-full h-full" imgClassName="group-hover:scale-110 transition duration-700" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent opacity-0 group-hover:opacity-100 transition" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[90] bg-ink/90 backdrop-blur flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white text-ink text-2xl flex items-center justify-center" aria-label="Close"><HiXMark /></button>
          <img src={lightbox} alt="Fleet" className="max-h-[88vh] max-w-full rounded-2xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}
