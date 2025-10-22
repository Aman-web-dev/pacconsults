// app/about/page.tsx
// This page provides information about PAC Consultants.

import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">About PAC Consultants</h1>
      <p className="text-lg text-gray-700 mb-4">
        PAC Consultants is dedicated to empowering individuals and businesses to achieve their full potential. We offer a range of consulting services designed to foster growth, optimize strategies, and enhance overall performance.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Our team of experienced professionals brings a wealth of knowledge and a client-centric approach to every engagement. We believe in building strong, lasting relationships with our clients, understanding their unique challenges, and delivering tailored solutions that drive measurable results.
      </p>
      <h2 className="text-3xl font-semibold mb-4 text-gray-900">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-4">
        To provide unparalleled consulting services that inspire innovation, facilitate strategic decision-making, and lead to sustainable success for our clients.
      </p>
      <h2 className="text-3xl font-semibold mb-4 text-gray-900">Our Vision</h2>
      <p className="text-lg text-gray-700">
        To be the trusted partner for individuals and organizations seeking transformative growth and excellence in their respective fields.
      </p>
    </div>
  );
}
