import { Inter } from "next/font/google";
import "./globals.css";
import {
  AmazonIcon,
  AudibleIcon,
  BlogIcon,
  LinkedInIcon,
  XTwitterIcon,
  audio_link,
  ebook_link,
} from "@/assets";
import Link from "next/link";
import { WebVitals } from "@/components/web-vitals";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Developer Marketing Book",
  description:
    "A comprehensive approach to reaching and engaging developers - Audiobook",
  metadataBase: new URL("https://devmarbook.com"),
};

const GTAG_ID = process.env.GTAG_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-[#FFF] text-[--dark-tone]`}>
        {/* Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GTAG_ID}');
        `}
        </Script>
        <WebVitals />

        {/* Header */}
        <Header />

        {/* Main content */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
