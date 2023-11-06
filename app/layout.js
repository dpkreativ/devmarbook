import { Inter } from 'next/font/google';
import './globals.css';
import Button from '@/components/button';
import { AmazonIcon, PlanetIcon } from '@/assets';

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
        <footer className="p-5">
          <h2>Quick links</h2>
        </footer>
      </body>
    </html>
  );
}
