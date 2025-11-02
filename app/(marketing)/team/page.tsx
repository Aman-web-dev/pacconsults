'use client'

import React, { useState } from 'react';

export default function TeamPage() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Joana Mariano",
      role: "Administrative Assistant",
      bio: "20+ years of experience in business acquisitions and strategic growth",
      image: "https://media.licdn.com/dms/image/v2/D5635AQHccpH6JP0lRA/profile-framedphoto-shrink_400_400/B56ZoN0Y2YI8Ac-/0/1761168428691?e=1762714800&v=beta&t=RdWU2ZuN5vhfDj2xaVJnud-skZQKU1aLfn4fXOhvxJ8",
      linkedin: "https://www.linkedin.com/in/joana-mariano-308049361/",
      email: "#"
    },
    {
      id: 2,
      name: "Vanessa Beth Blanela",
      role: "Lead Generation Specialist",
      bio: "Expert in SBA loans and business financing with $100M+ funded",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFz-ZPQ-351kA/profile-displayphoto-scale_400_400/B56ZmBoOfGJkAk-/0/1758816432126?e=1763596800&v=beta&t=7KehkFK7QIFuG4svC8_-HRmJgVyv3H4JR4XiRn4MnEk",
      linkedin: "www.linkedin.com/in/vanessa-beth-blanela-064565240",
      email: "#"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-8">
            <span>⚙️ Nationwide</span>
            <span>|</span>
            <span>Confidential</span>
            <span>|</span>
            <span>Fast</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Meet Our Team
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A group of passionate professionals dedicated to helping business owners<br />
            achieve maximum value and secure the funding they need to grow.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-[#21b9ab] mb-2">20+</div>
              <p className="text-gray-400 text-sm">Years Combined Experience</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-[#21b9ab] mb-2">500+</div>
              <p className="text-gray-400 text-sm">Businesses Helped</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-[#21b9ab] mb-2">$100M+</div>
              <p className="text-gray-400 text-sm">Funding Secured</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 text-center">
              <div className="text-4xl font-bold text-[#21b9ab] mb-2">98%</div>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border border-gray-800 hover:border-[#21b9ab] transition-all duration-500"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#21b9ab]/0 group-hover:bg-[#21b9ab]/5 transition-all duration-500"></div>
                
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Accent Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#21b9ab] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#21b9ab] transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <p className="text-[#21b9ab] font-semibold mb-3 text-sm uppercase tracking-wider">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#21b9ab] hover:text-black transition-all duration-300 group/icon"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href={member.email}
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#21b9ab] hover:text-black transition-all duration-300 group/icon"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#21b9ab] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Our Core Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800 hover:border-[#21b9ab] transition-all duration-300">
              <div className="w-16 h-16 bg-[#21b9ab]/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#21b9ab]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-400">We operate with complete transparency and put our clients' interests first in every decision.</p>
            </div>

            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800 hover:border-[#21b9ab] transition-all duration-300">
              <div className="w-16 h-16 bg-[#21b9ab]/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#21b9ab]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-400">We strive for excellence in everything we do, delivering exceptional results for our clients.</p>
            </div>

            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800 hover:border-[#21b9ab] transition-all duration-300">
              <div className="w-16 h-16 bg-[#21b9ab]/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#21b9ab]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-400">We work together as a unified team to achieve the best outcomes for every client.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
