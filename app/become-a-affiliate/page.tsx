import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function BecomeAnAffiliatePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image/Overlay - Placeholder for now */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path/to/your/affiliate-hero-bg.jpg)' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Become an Affiliate Partner
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Join our growing network of affiliate partners and help entrepreneurs access the tools they need to succeed.
            At PAC Consulting, we specialize in business formation, credit restoration, funding, and growth
            strategies and now you can earn by sharing our services with your audience.
          </p>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Who We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Audience Card 1 (Placeholder) */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Entrepreneurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Help aspiring and existing entrepreneurs find the resources to launch and scale their ventures.
                </p>
              </CardContent>
            </Card>

            {/* Audience Card 2 (Placeholder) */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Business Owners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Provide solutions for established businesses seeking funding, sales, or strategic growth.
                </p>
              </CardContent>
            </Card>

            {/* Audience Card 3 (Placeholder) */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Financial Advisors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Partner with financial professionals to offer comprehensive services to their clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8">Join our affiliate program and start earning today!</p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-3">
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
}
