import { Inter } from 'next/font/google';
import './globals.css';
import {
  AmazonIcon,
  BlogIcon,
  LinkedInIcon,
  XTwitterIcon,
  book_link,
} from '@/assets';
import Link from 'next/link';
import { WebVitals } from '@/components/web-vitals';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Developer Marketing',
  description: 'A comprehensive approach to reaching and engaging developers',
  metadataBase: new URL('https://devmarbook.com'),
};

const GTAG_ID = process.env.GTAG_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#EFEFEF]`}>
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
        <header className="sticky top-0 z-10 px-3 py-5 bg-gradient-to-b from-[#1F55A9]/10">
          <div className="bg-[#EFEFEF] text-[#1F55A9] rounded-full p-5 w-full max-w-7xl mx-auto flex justify-between items-center">
            <a
              href="https://blog.devmarbook.com"
              className="flex gap-2 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BlogIcon />
              <span>Blog</span>
            </a>

            <nav className="flex gap-10 items-center justify-center text-center">
              <Link href="#whats-inside" className="hidden md:block">
                What's inside?
              </Link>
              <Link href="#quick-preview" className="hidden md:block">
                Quick preview
              </Link>
              <a
                href={book_link}
                className="flex gap-2 items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AmazonIcon />
                <span>Buy on Amazon</span>
              </a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer className="text-[#1F55A9]">
          <div className="w-full max-w-7xl px-5 py-10 mx-auto grid gap-10">
            <nav className="flex gap-10 items-center justify-center text-center">
              <Link href="#whats-inside">What's inside?</Link>
              <Link href="#quick-preview">Quick preview</Link>
              <a
                href={book_link}
                className="flex gap-2 items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the book
              </a>
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
