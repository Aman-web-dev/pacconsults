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
                    <p className="text-gray-400">10+ years of experience helping businesses succeed</p>
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
          
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800">
              <div className="text-5xl font-bold text-[#21b9ab] mb-2">10+</div>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800">
              <div className="text-5xl font-bold text-[#21b9ab] mb-2">$10M-$100m</div>
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