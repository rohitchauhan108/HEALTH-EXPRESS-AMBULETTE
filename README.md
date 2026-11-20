# Health Express Ambulette – Next.js (App Router)

Converted from the original Vite + React Router project. URLs are unchanged.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Routes (`src/app`)

| URL | Source |
|---|---|
| `/` | `views/Home` |
| `/about`, `/contact`, `/faq` | `views/*` |
| `/services`, `/services/[slug]` | `views/Service` (slug drives the active tab) |
| `/ambuletteService`, `/statenIsland`, `/southBrooklyn` | `components/location/*` |
| `/schedule` | `components/service/ServiceForm` |
| `/driverForm`, `/driverForm/submitted` | `views/*` |

## What changed

- `react-router` → `next/link` (`to` → `href`) and `next/navigation` (`useRouter`, `usePathname`, `useParams`).
- Images moved from `src/assets` to `public/images` and referenced by URL string.
- `index.html` head → `app/layout.jsx`: metadata, the LocalBusiness/FAQ JSON-LD (`src/lib/schema.json`) and Google Analytics (`next/script`). Each page also gets its own `<title>`.
- Redux `Provider` lives in `app/providers.jsx`.
- `src/pages` renamed to `src/views` (Next reserves `pages/`); `src/assets/about` moved to `src/components/about`.
- `import.meta.env.VITE_API_URL` → `process.env.NEXT_PUBLIC_API_URL` (see `.env.example`).
- Driver form success page: router `state` doesn't exist in Next, so the uploaded file URLs are passed through `sessionStorage`.
- Removed the Netlify SPA redirect (`/* → /index.html`); not needed with Next. Remember to set Netlify's Next.js runtime or deploy on Vercel.
- Removed unused dependencies (react-router, material-tailwind, swiper, styled-components, etc.) and added `framer-motion`, which the original imported but never listed.
- Components are client components (`"use client"`) to keep behaviour identical; they are still server-rendered for the first paint.

---
## 2026 Redesign notes
- **Theme tokens:** `tailwind.config.js` (`brand` teal, `ink` navy, `accent` coral). Old `blue-*` classes now map to teal automatically. All old hard-coded hex colours were remapped.
- **Fonts:** Plus Jakarta Sans (headings) + Inter (body) via `next/font` in `src/app/layout.jsx`.
- **Global CSS:** `src/app/globals.css` – patterns (`pattern-cross`, `pattern-dots`…), buttons (`btn btn-primary/accent/ghost`), animations.
- **New UI:** `components/ui/` – `Loader`, `FloatingActions` (call / WhatsApp / book / back-to-top / scroll progress), `Reveal` (scroll animation), `ImageSlot` (drop-in image with SVG fallback).
- **SVG art:** `components/art/Art.jsx` (ambulette, caregiver, stairs, ECG line, cross, wave).
- **Hero slider:** `components/home/HeroHome.jsx` – edit the `SLIDES` array; images in `public/images/hero/`.
- **New home sections:** `TrustStrip`, `FleetGallery`, `HowItWorks` (text reused from existing pages).
- **WhatsApp number** is set in `components/ui/FloatingActions.jsx` (`WHATSAPP`) – confirm it is the correct WhatsApp line.
- AI image prompts: `docs/AI-IMAGE-PROMPTS.md`
