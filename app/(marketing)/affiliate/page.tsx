'use client'

import React, { useState } from 'react';

export default function BecomeAffiliatePage() {
  const [hoveredCard, setHoveredCard] = useState<number>(0);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-8">
            <span>⚙️ Nationwide</span>
            <span>|</span>
            <span>Confidential</span>
            <span>|</span>
            <span>Fast</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Become a Affiliate Partner
          </h1>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Join our growing network of affiliate partners and help entrepreneurs access the tools they need to succeed.<br />
            At PAC Consulting, we specialize in business formation, credit restoration, funding, and growth strategies and now you can earn<br />
            by sharing our services with your audience.
          </p>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Who We Help
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We help owners sell for maximum value and get the capital they need to grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Owners Ready to Sell */}
            <div 
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 hover:border-[#21b9ab] transition-all duration-500 relative overflow-hidden group"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(0)}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#21b9ab]/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#21b9ab]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#21b9ab]/30 transition">
                  <svg className="w-8 h-8 text-[#21b9ab]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Owners Ready to sell
                </h3>
                
                <p className="text-gray-400 mb-6 text-sm">
                  (home services, fitness, restaurants, laundromats)
                </p>

                <button className="w-full bg-[#21b9ab] text-black px-6 py-4 rounded-full font-bold hover:bg-[#19968a] transition-all transform group-hover:scale-105">
                  CONTACT US
                </button>
              </div>
            </div>

            {/* Card 2: Operators Seeking Growth Capital */}
            <div 
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 hover:border-[#21b9ab] transition-all duration-500 relative overflow-hidden group"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(0)}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#21b9ab]/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#21b9ab]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#21b9ab]/30 transition">
                  <svg className="w-8 h-8 text-[#21b9ab]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Operators Seeking Growth Capital
                </h3>
                
                <p className="text-gray-400 mb-6 text-sm">
                  (SBA, LOCs, business cards)
                </p>

                <button className="w-full bg-[#21b9ab] text-black px-6 py-4 rounded-full font-bold hover:bg-[#19968a] transition-all transform group-hover:scale-105">
                  CONTACT US
                </button>
              </div>
            </div>

            {/* Card 3: CPAs/Attorneys/Bankers */}
            <div 
              className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 hover:border-[#21b9ab] transition-all duration-500 relative overflow-hidden group"
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(0)}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#21b9ab]/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#21b9ab]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#21b9ab]/30 transition">
                  <svg className="w-8 h-8 text-[#21b9ab]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  CPAs/attorneys/bankers with clients to refer
                </h3>
                
                <p className="text-gray-400 mb-6 text-sm invisible">
                  &nbsp;
                </p>

                <button className="w-full bg-[#21b9ab] text-black px-6 py-4 rounded-full font-bold hover:bg-[#19968a] transition-all transform group-hover:scale-105">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-16 border border-gray-800 relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10">
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#21b9ab] to-transparent rounded-tl-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-5xl md:text-6xl font-bold mb-12 text-center">
                Why Partner With Us?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="text-[#21b9ab] text-3xl mt-1">✓</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Competitive Commissions</h4>
                    <p className="text-gray-400">Earn generous commissions on every successful referral</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-[#21b9ab] text-3xl mt-1">✓</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Trusted Expertise</h4>
                    <p className="text-gray-400">20+ years of experience helping businesses succeed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-[#21b9ab] text-3xl mt-1">✓</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Marketing Support</h4>
                    <p className="text-gray-400">Access to professional marketing materials and resources</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-[#21b9ab] text-3xl mt-1">✓</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Dedicated Support</h4>
                    <p className="text-gray-400">Personal affiliate manager to help you succeed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Earning?
          </h3>
          <p className="text-xl text-gray-400 mb-8">
            Join our affiliate program today and start helping businesses while growing your income.
          </p>
          <button className="bg-[#21b9ab] text-black px-12 py-5 rounded-full text-lg font-bold hover:bg-[#19968a] transition-all transform hover:scale-105 shadow-2xl">
            BECOME AN AFFILIATE
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800">
              <div className="text-5xl font-bold text-[#21b9ab] mb-2">20+</div>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800">
              <div className="text-5xl font-bold text-[#21b9ab] mb-2">$10M-$50M</div>
              <p className="text-gray-400">Buyer Relationships</p>
            </div>
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800">
              <div className="text-5xl font-bold text-[#21b9ab] mb-2">100%</div>
              <p className="text-gray-400">Confidential Process</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}