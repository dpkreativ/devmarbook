import { Inter } from 'next/font/google';
import './globals.css';
import Button from '@/components/button';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Developer Marketing',
  description: 'A comprehensive approach to reaching and engaging developers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <header className="w-full max-w-4xl mx-auto p-5 flex justify-between">
          <div className="font-bold">{/* Brand */}</div>

          <div className="flex items-center gap-5">
            <nav>
              <div>What's inside</div>
            </nav>
            <Button>Order on Amazon</Button>
          </div>
        </header>

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
