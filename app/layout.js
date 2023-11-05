import { Inter } from 'next/font/google';
import './globals.css';
import Button from '@/components/button';
import { PlanetIcon } from '@/assets';

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
        <header className="bg-gradient-to-b from-zinc-200/10 backdrop-blur-2xl sticky top-0 z-10">
          <div className="p-5 w-full max-w-7xl mx-auto flex justify-between items-center">
            <div>
              <PlanetIcon />
            </div>
            <Button>Menu</Button>
          </div>
        </header>

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
