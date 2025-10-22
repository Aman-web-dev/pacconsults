// app/page.tsx
// This is the public home page for PAC Consultants.

import React from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight">
        PAC Consultants: Empowering Your Growth
      </h1>
      <p className="text-xl md:text-2xl text-center max-w-3xl mb-10 opacity-90">
        Strategic guidance and innovative solutions to help individuals and businesses thrive in a dynamic world.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link href="/book-a-call" passHref>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Book a Free Consultation
          </Button>
        </Link>
        <Link href="/about" passHref>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Learn More About Us
          </Button>
        </Link>
      </div>

      {/* Optional: Add more sections like services, testimonials, etc. */}
      <div className="mt-20 text-center opacity-80">
        <p className="text-lg">Ready to transform your future?</p>
        <Link href="/contact" passHref>
          <Button variant="link" className="text-white underline hover:no-underline">
            Get in touch today!
          </Button>
        </Link>
      </div>
    </div>
  );
}
