import { Inter } from 'next/font/google';
import './globals.css';
import { AmazonIcon, BlogIcon, LinkedInIcon, XTwitterIcon } from '@/assets';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Developer Marketing',
  description: 'A comprehensive approach to reaching and engaging developers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#EFEFEF]`}>
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

            <a
              href="https://example.com"
              className="flex gap-2 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AmazonIcon />
              <span>Buy on Amazon</span>
            </a>
          </div>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer className="text-[#1F55A9]">
          <div className="w-full max-w-7xl px-5 py-10 mx-auto grid gap-10">
            <div className="flex gap-10 items-center justify-center text-center">
              <div>What's inside?</div>
              <div>Quick preview</div>
              <div>Get the book</div>
            </div>
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
