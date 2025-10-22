// app/layout.tsx
// This is the root layout for the entire application, including public pages.

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { Button } from '../components/ui/button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PAC Consultants',
  description: 'Strategic guidance and innovative solutions for growth.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Public Navigation Bar */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              PAC Consultants
            </Link>
            <div className="space-x-4">
              <Link href="/about" passHref>
                <Button variant="ghost" className="text-white hover:bg-gray-700">About</Button>
              </Link>
              <Link href="/contact" passHref>
                <Button variant="ghost" className="text-white hover:bg-gray-700">Contact</Button>
              </Link>
              <Link href="/book-a-call" passHref>
                <Button variant="ghost" className="text-white hover:bg-gray-700">Book a Call</Button>
              </Link>
              <Link href="/become-a-affiliate" passHref>
                <Button variant="ghost" className="text-white hover:bg-gray-700">Affiliate</Button>
              </Link>
              <Link href="/blogs" passHref>
                <Button variant="ghost" className="text-white hover:bg-gray-700">Blogs</Button>
              </Link>
              <Link href="/login" passHref>
                <Button variant="secondary" className="bg-indigo-600 hover:bg-indigo-700 text-white">Admin Login</Button>
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
