"use client"

import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Users, TrendingUp, Shield, FileText, Building, CreditCard, Menu, X, ChevronDown } from 'lucide-react';

const PACConsulting = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Business Funding",
      subtitle: "Unlock Growth Potential",
      description: "Seamlessly secure the capital your business needs to scale. Our consulting expertise navigates the funding landscape to deliver personalized financial solutions.",
      features: [
        "Tailored Funding Strategies",
        "Streamlined Application Process",
        "SBA Packaging & Lender Matching"
      ]
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Credit Restoration",
      subtitle: "Repair and Revitalize",
      description: "Elevate your financial reputation with our proven credit restoration services. We analyze your credit report to identify discrepancies and enhance your score.",
      features: [
        "Strategic Dispute Resolution",
        "Continuous Credit Education",
        "Expert Negotiation Techniques"
      ]
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Shelf Corporation Structuring",
      subtitle: "Instant Credibility Boost",
      description: "Opt for a seasoned shelf corporation to instantly enhance your business credibility with pre-established corporate history.",
      features: [
        "Navigate with Confidence",
        "Customized Corporate Solutions",
        "Industry-Relevant Selection"
      ]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Business Formation & Planning",
      subtitle: "Strategic Business Blueprint",
      description: "Lay the foundation for your venture with comprehensive business formation services, from entity selection to growth strategies.",
      features: [
        "Bespoke Entity Selection (LLC, S-Corp, C-Corp)",
        "Forward-Thinking Business Roadmaps",
        "Tax & Liability Optimization"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Sell-Side Advisory",
      subtitle: "Maximize Your Exit Value",
      description: "Package the story, protect confidentiality, drive competition, and structure deals that close successfully.",
      features: [
        "Valuation & Confidential Marketing",
        "Buyer Outreach & Negotiation",
        "SBA Coordination & Deal Structuring"
      ]
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We start with understanding your business goals, challenges, and vision for growth or exit."
    },
    {
      number: "02",
      title: "Strategy & Documentation",
      description: "Our team develops a customized strategy and prepares all necessary documentation for your success."
    },
    {
      number: "03",
      title: "Market/Underwrite",
      description: "We execute the strategy, connecting you with buyers, lenders, or implementing your business plan."
    },
    {
      number: "04",
      title: "Close & Transition",
      description: "We guide you through closing and ensure a smooth transition to achieve your objectives."
    }
  ];

  const faqs = [
    {
      question: "How long does a sale take?",
      answer: "The timeline varies based on business size and complexity, but typically ranges from 3-9 months. We work to expedite the process while maximizing value."
    },
    {
      question: "What types of businesses do you work with?",
      answer: "We specialize in home service businesses (HVAC, plumbing, construction, landscaping), laundromats, car washes, SaaS platforms, and more. We work nationwide with businesses ready to sell or grow."
    },
    {
      question: "What are the funding requirements?",
      answer: "Requirements vary by funding type and lender. We help businesses at various stages, from startups to established enterprises. Contact us for a personalized assessment."
    },
    {
      question: "How do your consulting services deliver measurable results?",
      answer: "We focus on data-driven strategies, clear KPIs, and proven methodologies. Our success is measured by your success - whether that's securing funding, improving credit, or completing a sale."
    },
    {
      question: "Can we customize consulting services based on our needs?",
      answer: "Absolutely! We tailor every engagement to your specific business goals, industry, and circumstances. No two businesses are alike, and neither are our solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                PAC
              </span>
              <span className="ml-2 text-xl font-semibold text-gray-800">Consulting</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Schedule Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-blue-600">How It Works</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#faq" className="block py-2 text-gray-700 hover:text-blue-600">FAQ</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                Schedule Call
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Sell Your Business or Secure Capital
                <span className="block text-blue-600 mt-2">With Confidence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We help business owners sell for maximum value and secure the funding they need to grow. Straight talk, clean packaging, and a deep buyer/lender network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg flex items-center justify-center group">
                  Schedule Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Who We Help</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Business Owners Ready to Sell</p>
                      <p className="text-blue-100 text-sm mt-1">Home services, laundromats, car washes, SaaS platforms & more</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Businesses Seeking Growth Capital</p>
                      <p className="text-blue-100 text-sm mt-1">From startups to established enterprises</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">CPAs, Attorneys & Bankers</p>
                      <p className="text-blue-100 text-sm mt-1">With clients to refer for professional guidance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to help your business thrive, from funding to formation to successful exits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow group">
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{service.subtitle}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven four-step process ensures your success from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="text-6xl font-bold text-blue-100 mb-4">{step.number}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Phillip Crawford</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Your go-to consultant for selling businesses and securing capital. Based in Houston, working nationwide with straight talk, clean packaging, and a deep buyer/lender bench.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At PAC Consulting, our vision is to be the transformative gateway for entrepreneurs and startups, streamlining the journey from conception to realization. We are committed to being the bedrock upon which visionary enterprises build their future.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Houston, TX - Serving Nationwide</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Trusted by Business Owners Nationwide</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-blue-50 mb-6 leading-relaxed">
                To provide seamless, strategic solutions that unlock potential, fuel innovation, and drive success in the entrepreneurial landscape.
              </p>
              <p className="text-lg text-blue-50 leading-relaxed">
                We foster an environment where dreams are not just dreamt, but achieved. Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? 0 : index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Whether you're ready to sell your business or secure the capital you need to grow, we're here to help you succeed.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg inline-flex items-center group">
            Schedule Your Discovery Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold">PAC</span>
                <span className="ml-2 text-xl">Consulting</span>
              </div>
              <p className="text-gray-400">
                Transforming businesses through strategic consulting and financial solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Business Funding</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Credit Restoration</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Business Formation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Sell-Side Advisory</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Houston, TX
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Call
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PAC Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PACConsulting;