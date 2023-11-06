import { Inter } from 'next/font/google';
import './globals.css';
import Button from '@/components/button';
import { AmazonIcon, LinkedInIcon, PlanetIcon, XTwitterIcon } from '@/assets';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Developer Marketing',
  description: 'A comprehensive approach to reaching and engaging developers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#EFEFEF]`}>
        {/* Header */}
        <header className="sticky top-0 z-10 p-5 bg-gradient-to-b from-[#1F55A9]/10">
          <div className="bg-gradient-to-b from-zinc-200/50 backdrop-blur-2xl rounded-xl p-5 w-full max-w-7xl mx-auto flex justify-between items-center">
            <PlanetIcon />

            <Button>
              <AmazonIcon />
            </Button>
          </div>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer>
          <div className="w-full max-w-7xl px-5 py-10 mx-auto grid gap-10">
            <div className="flex gap-10 items-center justify-center">
              <div>Blog</div>
              <div>Quick preview</div>
              <div>Get the book</div>
            </div>
            <div className="flex gap-10 items-center justify-center">
              <XTwitterIcon />
              <LinkedInIcon />
              <PlanetIcon />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
