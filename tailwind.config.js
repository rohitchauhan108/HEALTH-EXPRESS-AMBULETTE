/** Health Express Ambulette – design tokens
 *  Theme: "Clinical Teal & Deep Navy" – calm, trustworthy, medical.
 *  Change colours here once and the whole site follows. */
const teal = {
  50: "#EAF6F6", 100: "#D3EDEE", 200: "#A8DADD", 300: "#6FC3C9", 400: "#33AAB4",
  500: "#14B8C4", 600: "#0E8A94", 700: "#0B6E77", 800: "#0A545C", 900: "#093F46",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: teal,
        ink: { DEFAULT: "#0A2540", 700: "#16365C", 600: "#27496F", 500: "#4A6585", 50: "#F3F7FA" },
        accent: { DEFAULT: "#E5484D", dark: "#C8343A", soft: "#FDECEC" },
        mint: "#EAF6F6",
        // Legacy class names used across inner pages now resolve to the new palette
        blue: teal,
        indigo: teal,
        "theme-blue": "#0E8A94",
        "theme-purple": "#0A2540",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-head)", "var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(10,37,64,.18)",
        lift: "0 24px 50px -20px rgba(10,37,64,.35)",
        glow: "0 0 0 6px rgba(20,184,196,.18)",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        blob: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "33%": { transform: "translate(24px,-30px) scale(1.08)" }, "66%": { transform: "translate(-20px,20px) scale(.94)" } },
        pingSlow: { "0%": { transform: "scale(1)", opacity: ".55" }, "100%": { transform: "scale(1.9)", opacity: "0" } },
        kenburns: { "0%": { transform: "scale(1.02)" }, "100%": { transform: "scale(1.14)" } },
        road: { "0%": { backgroundPositionX: "0" }, "100%": { backgroundPositionX: "-160px" } },
        heartbeat: { "0%": { strokeDashoffset: "400" }, "100%": { strokeDashoffset: "0" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(40px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        progress: { "0%": { width: "0%" }, "100%": { width: "100%" } },
        drive: { "0%": { transform: "translateX(-140px)" }, "100%": { transform: "translateX(calc(100vw + 140px))" } },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        "ping-slow": "pingSlow 2.2s cubic-bezier(0,0,.2,1) infinite",
        kenburns: "kenburns 9s ease-out forwards",
        road: "road 1.4s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 40s linear infinite",
        "slide-up": "slideUp .8s cubic-bezier(.2,.7,.2,1) both",
      },
    },
  },
  plugins: [],
};
