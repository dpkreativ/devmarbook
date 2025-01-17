import { Inter } from "next/font/google";
import "./globals.css";
import {
  AmazonIcon,
  BlogIcon,
  GumroadIcon,
  LinkedInIcon,
  XTwitterIcon,
  book_link,
} from "@/assets";
import Link from "next/link";
import { WebVitals } from "@/components/web-vitals";
import Script from "next/script";

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
        <header className="sticky top-0 z-10 px-3 py-5">
          <div className="bg-[--background-color] border border-[--primary-color] hover:border-[--secondary-color] text-[--primary-color] rounded-full p-5 w-full max-w-7xl mx-auto flex justify-between items-center">
            <a
              href="https://blog.devmarbook.com"
              className="flex gap-2 items-center hover:text-[--secondary-color]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="ri-file-list-3-line"></i>
              <span>Blog</span>
            </a>

            <nav className="flex gap-10 items-center justify-center text-center">
              <Link
                href="#whats-inside"
                className="hidden md:block hover:text-[--secondary-color]"
              >
                What's inside?
              </Link>
              <Link
                href="#quick-preview"
                className="hidden md:block hover:text-[--secondary-color]"
              >
                Quick preview
              </Link>
              <a
                href={book_link}
                className="flex gap-2 items-center hover:text-[--secondary-color]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AmazonIcon />
                <span className="hidden md:block">Get E-book</span>
              </a>

              {/* Gumroad */}
              {/* <a
                href={`https://decenta.gumroad.com/l/devmarbook`}
                className="flex gap-2 items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GumroadIcon />
                <span className="hidden md:block">Buy on Gumroad</span>
              </a> */}
            </nav>
          </div>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer className="bg-[--primary-color] text-white">
          <div className="w-full max-w-7xl px-5 py-10 mx-auto grid gap-10">
            <nav className="flex flex-col text-center lg:flex-row gap-5 md:gap-10 w-max mx-auto">
              <Link href="#whats-inside">What's inside?</Link>
              <Link href="#quick-preview">Quick preview</Link>
              <a href={book_link} target="_blank" rel="noopener noreferrer">
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
