import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function BookACallPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image/Overlay - Placeholder for now */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path/to/your/book-a-call-hero-bg.jpg)' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Book a Call with PAC Consulting
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Get expert guidance on business formation, credit restoration, funding, and strategic planning tailored to your goals.
          </p>
        </div>
      </section>

      {/* Book a Call Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">BOOK A CALL!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-700 mb-8">
                Whether you&apos;re starting a new business, looking to expand, or need strategic financial advice,
                our team is here to help. Fill out the form below to schedule a free consultation.
              </p>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Your Name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Your Phone Number" />
                </div>
                <div>
                  <Label htmlFor="company">Company Name (Optional)</Label>
                  <Input id="company" type="text" placeholder="Your Company" />
                </div>
                <div>
                  <Label htmlFor="message">How can we help you?</Label>
                  <Textarea id="message" placeholder="Tell us about your needs..." rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">
                  Schedule Call
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Info Section (Placeholder) */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            During your free consultation, we&apos;ll discuss your business goals, challenges, and how PAC Consulting can provide tailored solutions to help you succeed.
          </p>
        </div>
      </section>
    </div>
  );
}
