"use client";
import React from "react";
import { motion } from "framer-motion";

/** Scroll-reveal wrapper (fade + rise). direction: up | left | right | zoom */
export default function Reveal({ children, delay = 0, direction = "up", className = "", as = "div", once = true }) {
  const from = {
    up: { opacity: 0, y: 36 },
    left: { opacity: 0, x: -48 },
    right: { opacity: 0, x: 48 },
    zoom: { opacity: 0, scale: 0.92 },
  }[direction];
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={from}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}
