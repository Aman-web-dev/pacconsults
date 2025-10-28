'use client'

import React, { useState } from 'react';

export default function BookProductPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
 

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
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            PHILLIP BOOK
          </h1>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
            At PAC Consulting, your go-to resource hub for expert knowledge, tools, and<br />
            guides that help you build, fund, and grow your business.
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-gray-800 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#21b9ab]/10 to-transparent"></div>
            
            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              {/* Book Image */}
              <div className="flex items-center justify-center">
                <div 
                  className="relative transform transition-transform duration-500"
                  style={{ transform: isHovered ? 'scale(1.05) rotateY(5deg)' : 'scale(1)' }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="absolute inset-0 bg-[#21b9ab]/20 blur-3xl rounded-full"></div>
                  <img 
                    src="/images/397079_194231.webp" 
                    alt="Book Cover"
                    className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Mekhai and Hayley's Big Adventure: Building Wealth in Two Cities!
                </h2>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Join Mekhai and Hayley on a fun, inspiring journey through two cities as they learn the basics of money, business, and building wealth — one smart choice at a time.
                </p>
                
                <p className="text-gray-400 mb-8">
                  Perfect for young readers, parents, and educators who want to introduce financial literacy in a relatable and engaging way.
                </p>

                {/* Features */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-3">
                    <div className="text-[#21b9ab] text-2xl mt-1">✓</div>
                    <p className="text-gray-300">Teaches kids about saving, investing & entrepreneurship</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-[#21b9ab] text-2xl mt-1">✓</div>
                    <p className="text-gray-300">Encourages smart money habits from an early age</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-[#21b9ab] text-2xl mt-1">✓</div>
                    <p className="text-gray-300">A story with heart, humor, and real-world lessons</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-[#21b9ab] to-[#19968a] rounded-2xl p-8">
                  <p className="text-xl font-semibold mb-4 flex items-center gap-2">
                    📘 Available Now — Empower the next generation of wealth builders!
                  </p>
                  <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-900 transition-all transform hover:scale-105 shadow-xl">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Section - "I will Help You in" Style */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-16 border border-gray-800 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96">
              <svg viewBox="0 0 200 200" className="text-[#21b9ab] opacity-20">
                <polygon points="100,10 150,80 120,150 50,120 30,60" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-5xl md:text-6xl font-bold mb-6">
                Why This Book Matters
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-[#21b9ab] transition">
                  <div className="text-[#21b9ab] text-4xl mb-4">📚</div>
                  <h4 className="text-xl font-bold mb-2">Financial Foundation</h4>
                  <p className="text-gray-400">Build essential money skills that last a lifetime</p>
                </div>
                <div className="bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-[#21b9ab] transition">
                  <div className="text-[#21b9ab] text-4xl mb-4">🎯</div>
                  <h4 className="text-xl font-bold mb-2">Engaging Stories</h4>
                  <p className="text-gray-400">Learn through adventure and real-world scenarios</p>
                </div>
                <div className="bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-[#21b9ab] transition">
                  <div className="text-[#21b9ab] text-4xl mb-4">🚀</div>
                  <h4 className="text-xl font-bold mb-2">Future Ready</h4>
                  <p className="text-gray-400">Prepare the next generation for financial success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl text-gray-400 mb-8">
            Give your child the gift of financial literacy today
          </p>
          <button className="bg-[#21b9ab] text-black px-12 py-5 rounded-full text-lg font-bold hover:bg-[#19968a] transition-all transform hover:scale-105 shadow-2xl">
            BOOK A CALL
          </button>
        </div>
      </section>
    </div>
  );
}