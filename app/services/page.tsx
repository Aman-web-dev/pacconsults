import React from 'react';
import Image from 'next/image';
import Wrapper from '@/components/global/wrapper';
import Container from '@/components/global/container';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  return (
    <div className="w-full relative flex flex-col pt-16">
      {/* Hero Section - Adapted from Verve design */}
      <section className="relative bg-gray-800 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path/to/your/service-hero-bg.jpg)' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            PAC SERVICES
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            At PAC Consulting, we help entrepreneurs and businesses lay strong financial and legal foundations to
            scale confidently. Whether you're just starting or ready to expand, our services are designed to guide you every step of the
            way.
          </p>
        </div>
      </section>

      {/* Services Overview Section - Adapted from Verve design */}
      <Wrapper className="py-16 lg:py-24">
        <Container>
          <h2 className="text-3xl lg:text-4xl font-semibold text-center tracking-tight mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service Card 1: Business Funding */}
            <div className="flex flex-col bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
              <div className="relative h-60 w-full">
                <Image
                  src="/path/to/business-funding.jpg" // Placeholder image
                  alt="Business Funding"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">BUSINESS FUNDING</h3>
                <p className="text-gray-700 mb-4">Unlock Growth Potential</p>
                <Button variant="link" className="text-blue-600 hover:underline p-0 h-auto">Learn More &rarr;</Button>
              </div>
            </div>

            {/* Service Card 2: Business Sales & Acquisitions (Placeholder) */}
            <div className="flex flex-col bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
              <div className="relative h-60 w-full">
                <Image
                  src="/path/to/business-sales.jpg" // Placeholder image
                  alt="Business Sales & Acquisitions"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">BUSINESS SALES & ACQUISITIONS</h3>
                <p className="text-gray-700 mb-4">Maximize Your Value</p>
                <Button variant="link" className="text-blue-600 hover:underline p-0 h-auto">Learn More &rarr;</Button>
              </div>
            </div>

            {/* Service Card 3: Legal & Compliance (Placeholder) */}
            <div className="flex flex-col bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
              <div className="relative h-60 w-full">
                <Image
                  src="/path/to/legal-compliance.jpg" // Placeholder image
                  alt="Legal & Compliance"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">LEGAL & COMPLIANCE</h3>
                <p className="text-gray-700 mb-4">Secure Your Operations</p>
                <Button variant="link" className="text-blue-600 hover:underline p-0 h-auto">Learn More &rarr;</Button>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Call to Action Section - Adapted from Verve design */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Connect with our experts for tailored solutions.</p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-3">
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
