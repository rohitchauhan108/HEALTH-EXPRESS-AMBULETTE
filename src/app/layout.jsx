import Script from "next/script";
import { Marcellus, Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import schema from "../lib/schema.json";
import Loader from "../components/ui/Loader";
import FloatingActions from "../components/ui/FloatingActions";

// Fonts: Marcellus (headings) + Poppins (body) – self-hosted by Next
const fontHead = Marcellus({ subsets: ["latin"], weight: ["400"], variable: "--font-head", display: "swap" });
const fontBody = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-body", display: "swap" });

const SITE_URL = "https://healthexpressambulette.com";
const DEFAULT_TITLE = "Health Express Ambulette – NYC Ambulette & Medical Transport";
const DEFAULT_DESCRIPTION =
  "Safe, reliable ambulette services NYC and medical transportation services NYC for doctor visits, hospital transfers, and non-emergency travel.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: "%s | Health Express Ambulette" },
  description: DEFAULT_DESCRIPTION,
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A2540",
};

const GA_ID = "G-HL92NE9D8K";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontHead.variable} ${fontBody.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        <Loader />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        <FloatingActions />
      </body>
    </html>
  );
}
