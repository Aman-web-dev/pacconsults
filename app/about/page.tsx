import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image/Overlay - Placeholder for now */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path/to/your/about-hero-bg.jpg)' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            ABOUT US
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            We help entrepreneurs start strong, build credit, secure funding, and grow with confidence. Founded by
            Philip, PAC Consulting is built on one core belief: People Matter. Results Matter. Your Vision Matters.
          </p>
        </div>
      </section>

      {/* Philip's Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hello! I'm Phillip.</h2>
            <p className="text-lg text-gray-700 mb-4">
              Hello! I'm Phillip Crawford. Originally from Houston, Texas, I spent most of my life growing up in New York. I
              started my career in the financial industry, working with various banks and financial institutions.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              My passion for helping businesses grow led me to establish PAC Consulting. I believe that every entrepreneur
              deserves access to the right resources and guidance to achieve their dreams.
            </p>
            <p className="text-lg text-gray-700">
              At PAC Consulting, we're dedicated to providing strategic solutions that empower businesses to thrive in today's competitive landscape.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/path/to/phillip-crawford.jpg" // Placeholder image for Phillip
                alt="Phillip Crawford"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section (Placeholder) */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            To empower entrepreneurs and business owners with the financial and strategic tools needed to achieve sustainable growth and success.
          </p>
        </div>
      </section>
    </div>
  );
}
