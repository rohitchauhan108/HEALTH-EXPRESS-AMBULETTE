"use client";

import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
const logo = "/images/Logo.jpg";
import styles from "../styles/SocialIcons.module.css";

const Footer = () => {
  const links = [
    { label: "Ambulette Services", url: "/services/ambulette-services" },
    { label: "Private Medical Transportation", url: "/services/private-medical-transportation" },
    { label: "Two Men Assist Over Stairs", url: "/services/two-men-assist-over-stairs" },
    { label: "Medicaid Ambulette Service", url: "/services/medicaid-ambulette-service" },
    { label: "Wheelchair Handicapped Transportation", url: "/services/wheelchair-handicapped-transportation" },
  ];
  const hover = "hover:text-brand-300 hover:translate-x-1 inline-block transition";

  return (
    <footer className="relative bg-hero-night text-white pb-20 md:pb-0 overflow-hidden">
      <div className="absolute inset-0 pattern-cross-light" />

      {/* CTA band */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-10 pt-14">
        <div className="rounded-3xl bg-gradient-to-r from-brand-600 to-brand-500 p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-lift">
          <div>
            <p className="font-display font-extrabold text-2xl md:text-3xl">Same Day Request? Call Us!</p>
            <p className="text-white/85 mt-1">We’re Open 24/7 — safe, reliable ambulette rides across NYC.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+19175143080" className="btn bg-white text-ink hover:bg-ink hover:text-white"><FaPhoneAlt /> +1 (917) 514-3080</a>
            <Link href="/schedule" className="btn btn-accent">Schedule Online</Link>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-10 py-14">
        <div className="grid lg:grid-cols-[1.3fr_.8fr_1.2fr_1.2fr] sm:grid-cols-2 grid-cols-1 gap-10">
          {/* Logo Section */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <img src={logo} alt="Health Express Ambulette logo" className="w-20 h-20 object-contain rounded-full bg-white p-1" />
            </Link>
            <p className="text-sm text-white/75 leading-relaxed">
              We’re Open 24/7.<br /><br />Same Day Request? Call Us!
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm text-white/70">
              <FaMapMarkerAlt className="text-brand-400 mt-1 shrink-0" />
              155 Water Street, Brooklyn NY 11201
            </p>

            <div className="mt-6">
              <h4 className="text-xs font-bold mb-3 text-brand-300 uppercase tracking-[.2em]">Follow Us</h4>
              <ul className={styles.socialList}>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61584198666363" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Follow Health Express Ambulette on Facebook">
                    <FaFacebook size={24} loading="lazy" /><span className={styles.visuallyHidden}>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/healthexpressambulette/?fbclid=IwY2xjawRAaTZleHRuA2FlbQIxMQBicmlkETFzZmg0bHFBZlVhZ3lQYmxEc3J0YwZhcHBfaWQBMAABHpi_73toAH9Djfoclg-lvTbW_HykNHqpwF-QrFBAZ6Il3Nkj-Ic7EzeQsFgl_aem_CDfe94AD6IN5QpukZv-lDA" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Follow Health Express Ambulette on Instagram">
                    <FaInstagram size={24} loading="lazy" /><span className={styles.visuallyHidden}>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/19175143080" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Chat with Health Express Ambulette on WhatsApp">
                    <FaWhatsapp size={26} /><span className={styles.visuallyHidden}>WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg font-bold mb-5 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[3px] after:bg-brand-400 after:rounded">Company</h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li><Link href="/" className={hover}>Home</Link></li>
              <li><Link href="/about" className={hover}>About</Link></li>
              <li><Link href="/contact" className={hover}>Contact Us</Link></li>
              <li><Link href="/faq" className={hover}>F.A.Q</Link></li>
              <li><Link href="/driverForm" className={hover}>Apply as Driver</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-bold mb-5 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[3px] after:bg-brand-400 after:rounded">Services</h3>
            <ul className="space-y-3 text-sm text-white/75">
              {links.map((item) => (
                <li key={item.url}><Link className={hover} href={item.url}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full">
            <h3 className="font-display text-lg font-bold mb-5 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[3px] after:bg-brand-400 after:rounded">Contact</h3>
            <ul className="space-y-4 text-sm text-white/75 max-w-full">
              <li className="flex gap-3 break-words"><span className="w-9 h-9 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-brand-300"><FaPhoneAlt /></span><a href="tel:+19175143080" className="self-center hover:text-brand-300">+1 (917)-514-3080</a></li>
              <li className="flex gap-3 break-words"><span className="w-9 h-9 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-brand-300"><FaEnvelope /></span><a href="mailto:info@healthexpressambulette.com" className="self-center hover:text-brand-300 break-all">info@healthexpressambulette.com</a></li>
              <li className="flex gap-3 break-words"><span className="w-9 h-9 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-brand-300"><FaMapMarkerAlt /></span><span className="self-center">155 Water Street, Brooklyn NY 11201</span></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/15 pt-6 text-sm text-white/55 text-center">
          <p>ambulette transportation, wheelchair assistance, private ride NYC, medicaid pickup, safe travel</p>
          <p className="mt-3">©2026 Health Express Ambulette Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
