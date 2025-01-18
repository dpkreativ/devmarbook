import { Inter } from "next/font/google";
import "./globals.css";
import { BlogIcon, LinkedInIcon, XTwitterIcon, ebook_link } from "@/assets";
import Link from "next/link";
import { WebVitals } from "@/components/web-vitals";
import Script from "next/script";
import Header from "@/components/header";

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
        <footer className="bg-[--primary-color] text-white">
          <div className="w-full max-w-7xl px-5 py-10 mx-auto grid gap-10">
            <nav className="flex flex-col text-center lg:flex-row gap-5 md:gap-10 w-max mx-auto">
              <Link href="#whats-inside">What's inside?</Link>
              <Link href="#quick-preview">Quick preview</Link>
              <a href={ebook_link} target="_blank" rel="noopener noreferrer">
                Amazon
              </a>
              {/* <a
                href={`https://decenta.gumroad.com/l/devmarbook`}
                className="flex gap-2 items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gumroad
              </a> */}
            </nav>
            <div className="flex gap-10 items-center justify-center">
              <a
                href="https://twitter.com/devmarbook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XTwitterIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/trust-onyekwere/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://blog.devmarbook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BlogIcon />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
