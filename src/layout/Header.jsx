"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineBars3, HiArrowRight } from "react-icons/hi2";
import { MdAccessTime } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { setIndex } from "../store/slice/indexSlice.js";
import { useDispatch } from "react-redux";
const logo = "/images/Logo.jpg";

const navLink = [
  { title: "Home", path: "/" },
  { title: "F.A.Q.", path: "/faq" },
  { title: "Apply as Driver", path: "/driverForm" },
];
const dropdownLinks = [
  "Ambulette Services",
  "Private Medical Transportation",
  "Two Men Assist Over Stairs",
  "Medicaid Ambulette Service",
  "Wheelchair Handicapped Transportation",
];
const dropdownSlugs = [
  "ambulette-services",
  "private-medical-transportation",
  "two-men-assist-over-stairs",
  "medicaid-ambulette-service",
  "wheelchair-handicapped-transportation",
];
const megaServices = [
  {
    title: "Ambulette Services",
    desc: "Safe, wheelchair-friendly ambulette rides for doctor visits, clinics & hospital transfers across NYC.",
    img: "/images/Home/ambulanceService.jpeg",
    slug: "ambulette-services",
  },
  {
    title: "Private Medical Transportation",
    desc: "Luxury private NYC ambulette service for comfortable, reliable non-emergency medical travel.",
    img: "/images/Home/PrivateMedicalTransportation.jpg",
    slug: "private-medical-transportation",
  },
  {
    title: "Two Men Assist Over Stairs",
    desc: "Two trained men safely carry patients up/down stairs in buildings with no elevator.",
    img: "/images/Home/TwoMenAssistOverStairs.jpg",
    slug: "two-men-assist-over-stairs",
  },
  {
    title: "Medicaid Ambulette Service",
    desc: "Medicaid-accepted ambulette transportation for elderly & disabled patients to medical appointments.",
    img: "/images/Home/MedicaidAmbuletteService.jpg",
    slug: "medicaid-ambulette-service",
  },
  {
    title: "Wheelchair Handicapped Transportation",
    desc: "Wheelchair lift vans with secure locks and A/C for safe, accessible door-to-door rides.",
    img: "/images/Home/WheelchairHandicappedTransportation.jpeg",
    slug: "wheelchair-handicapped-transportation",
  },
];
const locationLinks = [
  { name: "Ambulette Service Brooklyn NY", link: "ambuletteService" },
  { name: "South Brooklyn", link: "southBrooklyn" },
];

const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDrop, setOpenDrop] = useState(null); // desktop: 'services' | 'location'
  const [mobileOpen, setMobileOpen] = useState(null); // mobile accordion

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (pathname !== "/services") localStorage.removeItem("serviceIndex");
    setShowMenu(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showMenu]);

  const isActive = (p) => (p === "/" ? pathname === "/" : pathname?.startsWith(p));
  const linkCls = (active) =>
    `relative px-1 py-2 text-[15px] font-semibold transition-colors ${active ? "text-brand-600" : "text-ink hover:text-brand-600"} after:absolute after:left-0 after:-bottom-0.5 after:h-[3px] after:rounded-full after:bg-brand-500 after:transition-all after:duration-300 ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  const drop = (id, label, children) => (
    <div className="relative" onMouseEnter={() => setOpenDrop(id)} onMouseLeave={() => setOpenDrop(null)}>
      <button
        className={`${linkCls(false)} flex items-center gap-1`}
        aria-haspopup="true" aria-expanded={openDrop === id}
        onClick={() => setOpenDrop(openDrop === id ? null : id)}
        onFocus={() => setOpenDrop(id)}
      >
        {label} <IoIosArrowDown className={`text-sm transition-transform ${openDrop === id ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${openDrop === id ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"}`}>
        <div className="w-[310px] bg-white rounded-2xl shadow-lift border border-brand-100 p-2.5 relative">
          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-brand-100" />
          {children}
        </div>
      </div>
    </div>
  );
  const dropItem = "flex items-center gap-3 px-4 py-2.5 text-[14.5px] font-medium text-ink/80 rounded-xl hover:bg-brand-50 hover:text-brand-700 transition";

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:block bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-cross-light" />
        <div className="relative max-w-7xl mx-auto px-10 flex items-center justify-between h-11">
          <div className="flex items-center gap-1">
            <a href="tel:+19175143080" className="flex items-center gap-2 px-4 h-11 text-[13px] font-medium text-white/90 hover:text-brand-300 hover:bg-white/5 transition-colors">
              <FaPhoneAlt className="text-brand-400" /> 917-514-3080
            </a>
            <span className="w-px h-4 bg-white/15" />
            <p className="flex items-center gap-2 px-4 h-11 text-[13px] font-medium text-white/90">
              <MdAccessTime className="text-brand-400 text-base" /> Open 7 Days a Week
            </p>
            <span className="w-px h-4 bg-white/15" />
            <a href="mailto:info@healthexpressambulette.com" className="flex items-center gap-2 px-4 h-11 text-[13px] font-medium text-white/90 hover:text-brand-300 hover:bg-white/5 transition-colors">
              <CgMail className="text-brand-400 text-base" /> info@healthexpressambulette.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com/profile.php?id=61584198666363" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:bg-brand-500 hover:text-white transition-colors">
              <FaFacebook className="text-sm" />
            </a>
            <a href="https://www.instagram.com/healthexpressambulette/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:bg-brand-500 hover:text-white transition-colors">
              <FaInstagram className="text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Sticky navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-soft py-1.5" : "bg-white py-3 border-b border-brand-100"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Health Express Ambulette – Home">
            <img src={logo} alt="Health Express Ambulette logo" className={`rounded-full object-contain bg-white ring-2 ring-brand-100 transition-all duration-300 ${scrolled ? "w-20 h-20" : "w-24 h-24"}`} />
           
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="Main">
            {navLink.map((item) => (
              <Link key={item.path} href={item.path} className={linkCls(isActive(item.path))}>{item.title}</Link>
            ))}
            {drop("location", "Location", locationLinks.map((item) => (
              <Link key={item.link} href={`/${item.link}`} className={dropItem} onClick={() => setOpenDrop(null)}>
                <span className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:text-white transition">
                  <FaMapMarkerAlt className="text-sm" />
                </span>
                {item.name}
              </Link>
            )))}

            {/* Services Mega Menu */}
            <div className="relative" onMouseEnter={() => setOpenDrop("services")} onMouseLeave={() => setOpenDrop(null)}>
              <button
                className={`${linkCls(false)} flex items-center gap-1`}
                aria-haspopup="true" aria-expanded={openDrop === "services"}
                onClick={() => setOpenDrop(openDrop === "services" ? null : "services")}
                onFocus={() => setOpenDrop("services")}
              >
                Services <IoIosArrowDown className={`text-sm transition-transform ${openDrop === "services" ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${openDrop === "services" ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"}`}>
                <div className="w-[min(94vw,820px)] bg-white rounded-3xl shadow-lift border border-brand-100 overflow-hidden relative">
                  <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-brand-100" />
                  {/* Header */}
                  <div className="bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3.5 flex items-center justify-between">
                    <h3 className="font-display text-white text-lg tracking-wide">Our Ambulette Services</h3>
                  
                  </div>
                  {/* Services grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 p-3">
                    {megaServices.map((s, i) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => { dispatch(setIndex(i)); setOpenDrop(null); }}
                        className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-brand-50 transition-colors border border-transparent hover:border-brand-100"
                      >
                        <div className="relative w-[72px] h-[72px] rounded-2xl overflow-hidden shrink-0 ring-2 ring-brand-100 group-hover:ring-brand-400 group-hover:shadow-lg group-hover:shadow-brand-200/50 transition-all">
                          <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-display text-[15px] text-ink group-hover:text-brand-700 transition-colors leading-tight">{s.title}</h4>
                          <p className="text-[12px] text-ink-500 leading-snug mt-1 line-clamp-2">{s.desc}</p>
                          <span className="inline-flex items-center gap-1 mt-1.5 text-[12px] font-semibold text-brand-600 group-hover:gap-2 transition-all">
                            View service <HiArrowRight className="text-sm" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* Footer CTA */}
                  <div className="bg-brand-50/60 border-t border-brand-100 px-6 py-3 flex items-center justify-between">
                    <p className="text-[13px] text-ink-600 font-medium">Need help choosing? Call us now.</p>
                    <a href="tel:+19175143080" className="text-[13px] font-bold text-brand-700 hover:text-brand-800 flex items-center gap-1.5">
                      <FaPhoneAlt className="text-xs" /> 917-514-3080
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className={linkCls(isActive("/about"))}>About</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+19175143080" className="hidden xl:flex items-center gap-2 font-bold text-ink hover:text-brand-600 transition">
              <span className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center"><FaPhoneAlt /></span>
              917-514-3080
            </a>
            <Link href="/contact" className="btn btn-primary btn-shine !py-2.5 whitespace-nowrap">Contact Us</Link>
          </div>

          <button className="md:hidden w-11 h-11 rounded-full bg-brand-50 text-ink text-2xl flex items-center justify-center" onClick={() => setShowMenu(true)} aria-label="Open menu">
            <HiOutlineBars3 />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`md:hidden fixed inset-0 z-[80] transition-opacity duration-300 ${showMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={() => setShowMenu(false)} />
        <aside className={`absolute top-0 left-0 h-full w-[88%] max-w-[380px] bg-white shadow-2xl flex flex-col transition-transform duration-500 ease-out ${showMenu ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="bg-hero-night text-white p-5 flex items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 pattern-cross-light" />
            <Link href="/" className="relative flex items-center gap-3" onClick={() => setShowMenu(false)}>
              <img src={logo} alt="Logo" className="w-14 h-14 rounded-full bg-white object-contain" />
              <span className="font-display font-extrabold leading-tight">Health Express<br /><span className="text-[11px] tracking-[.28em] text-brand-300 uppercase">Ambulette</span></span>
            </Link>
            <button onClick={() => setShowMenu(false)} aria-label="Close menu" className="relative w-10 h-10 rounded-full bg-white/15 text-2xl flex items-center justify-center"><RxCross2 /></button>
          </div>

          <nav className="flex-1 overflow-y-auto p-5 flex flex-col gap-1 text-[17px] font-semibold text-ink">
            {navLink.map((item) => (
              <Link key={item.path} href={item.path} onClick={() => setShowMenu(false)} className={`px-3 py-3 rounded-xl ${isActive(item.path) ? "bg-brand-50 text-brand-700" : "hover:bg-brand-50"}`}>{item.title}</Link>
            ))}
            {[
              { id: "loc", label: "Location", items: locationLinks.map((l) => ({ t: l.name, h: `/${l.link}` })) },
              { id: "srv", label: "Services", items: dropdownLinks.map((l, i) => ({ t: l, h: `/services/${dropdownSlugs[i]}`, i })) },
            ].map((g) => (
              <div key={g.id}>
                <button className="w-full flex justify-between items-center px-3 py-3 rounded-xl hover:bg-brand-50" onClick={() => setMobileOpen(mobileOpen === g.id ? null : g.id)} aria-expanded={mobileOpen === g.id}>
                  {g.label} <IoIosArrowDown className={`transition-transform ${mobileOpen === g.id ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${mobileOpen === g.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="ml-3 pl-3 border-l-2 border-brand-200 my-1 space-y-0.5">
                      {g.items.map((it) => (
                        <Link key={it.h} href={it.h} onClick={() => { if (it.i !== undefined) dispatch(setIndex(it.i)); setShowMenu(false); }} className="block px-3 py-2 text-[15px] font-medium text-ink/75 rounded-lg hover:bg-brand-50">{it.t}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Link href="/about" onClick={() => setShowMenu(false)} className={`px-3 py-3 rounded-xl ${isActive("/about") ? "bg-brand-50 text-brand-700" : "hover:bg-brand-50"}`}>About</Link>
          </nav>

          <div className="p-5 border-t border-brand-100 grid gap-3">
            <a href="tel:+19175143080" className="btn btn-accent"><FaPhoneAlt /> Call 917-514-3080</a>
            <Link href="/contact" onClick={() => setShowMenu(false)} className="btn btn-primary">Contact Us</Link>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Header;
