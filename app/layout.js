import { Inter } from 'next/font/google';
import './globals.css';

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
        <header className="w-full max-w-5xl mx-auto p-5">
          <div className="font-bold">Book</div>
        </header>

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
