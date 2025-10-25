import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image/Overlay - Placeholder for now */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path/to/your/products-hero-bg.jpg)' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            PHILLIP BOOK
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            At PAC Consulting, your go-to resource hub for expert knowledge, tools, and
            guides that help you build, fund, and grow your business.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Product Card 1: Mekhai and Hayley's Big Adventure */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="relative h-60 w-full">
                <Image
                  src="/path/to/mekhai-hayley-book.jpg" // Placeholder image
                  alt="Mekhai and Hayley's Big Adventure"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold leading-tight">
                  Mekhai and Hayley&apos;s Big Adventure: Building Wealth in Two Cities!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Discovering the secrets of real estate and the stock market in two of the world&apos;s greatest cities!
                </p>
                <Button variant="link" className="text-blue-600 hover:underline p-0 h-auto">Learn More &rarr;</Button>
              </CardContent>
            </Card>

            {/* Add more product cards as needed */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="relative h-60 w-full">
                <Image
                  src="/path/to/another-product.jpg" // Placeholder image
                  alt="Another Product"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold leading-tight">
                  Another Great Product
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  A brief description of another product offered by PAC Consulting.
                </p>
                <Button variant="link" className="text-blue-600 hover:underline p-0 h-auto">Learn More &rarr;</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Explore Our Resources</h2>
          <p className="text-xl mb-8">Find the tools and knowledge to empower your business journey.</p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-3">
            Browse All Products
          </Button>
        </div>
      </section>
    </div>
  );
}
