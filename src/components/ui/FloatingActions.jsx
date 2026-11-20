"use client";
import React from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";

const PHONE = "+19175143080";
const WHATSAPP = "19175143080";
const EMAIL = "info@healthexpressambulette.com";
const WA_TEXT = encodeURIComponent("Hello Health Express Ambulette, I would like to book a ride.");

/** Floating action buttons: WhatsApp, Call, Email, Message (right side) */
export default function FloatingActions() {
  const items = [
    {
      label: "WhatsApp",
      href: `https://wa.me/${WHATSAPP}?text=${WA_TEXT}`,
      icon: <FaWhatsapp />,
      bg: "bg-[#25D366]",
      target: true,
      ping: true,
    },
    {
      label: "Call",
      href: `tel:${PHONE}`,
      icon: <FaPhoneAlt />,
      bg: "bg-[#2563EB]",
      target: false,
      ping: true,
    },
    {
      label: "Email",
      href: `mailto:${EMAIL}`,
      icon: <FaEnvelope />,
      bg: "bg-[#EF4444]",
      target: false,
      ping: false,
    },
    {
      label: "Message",
      href: "/contact",
      icon: <TbMessageChatbot />,
      bg: "bg-[#9333EA]",
      target: false,
      ping: false,
    },
  ];

  return (
    <>
      {/* Desktop: floating stack on right */}
      <div className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-[60] flex-col items-end gap-3">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            {...(it.target ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={it.label}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full ${it.bg} text-white text-xl shadow-lift hover:scale-110 transition-transform`}
          >
            {it.ping && <span className={`absolute inset-0 rounded-full ${it.bg} animate-ping-slow`} />}
            <span className="relative">{it.icon}</span>
            {/* label tooltip */}
            <span className="absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink text-white text-xs font-bold px-3 py-1.5 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition pointer-events-none">
              {it.label}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile: floating stack on right */}
      <div className="md:hidden fixed right-3 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-end gap-2.5">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            {...(it.target ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={it.label}
            className={`flex items-center justify-center w-11 h-11 rounded-full ${it.bg} text-white text-lg shadow-lift active:scale-95 transition-transform`}
          >
            {it.ping && <span className={`absolute inset-0 rounded-full ${it.bg} animate-ping-slow`} />}
            <span className="relative">{it.icon}</span>
          </a>
        ))}
      </div>
    </>
  );
}
