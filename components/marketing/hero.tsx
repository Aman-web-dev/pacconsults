'use client'

import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import Image from "next/image";
import Container from "../global/container";
import { Button } from "../ui/button";
import { useState,useEffect } from "react";

const Hero = () => {
      const phrases = [
    'Grow Wealth',
    'Build Business',
    'Sell Companies',
    'Secure Funding'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative z-0 w-full h-full">
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-40 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(18,139,135,1)_0%,rgba(5,5,5,0)_80%)]"></div>

 

      <Wrapper className="py-20">
        <div className="flex flex-col items-center justify-center w-full z-10">
          <Container>
            <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max mx-auto rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
              <Icons.stars className="size-5" />
              <span className="text-sm text-white">
                Nationwide | Confidential | Fast
              </span>
            </div>
          </Container>

          <Container delay={0.1}>
            <h2 className="text-balance !leading-[1.25] text-center text-5xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
              Sell Your Business or Secure Funding{" "}
              <br className="hidden lg:inline-block" /> —Without the Guesswork.
            </h2>
          </Container>

          <Container delay={0.2}>
            <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
              We help owners sell for maximum value and get the capital they
              need to grow. 20+years experience • SBA & lender network •
              $10M–$50M buyer relationships
            </p>
          </Container>

          <Container delay={0.3}>
            <div className="mt-6">
              <Button size="md">BOOK A CALL</Button>
            </div>
          </Container>

          <Container className="w-full z-30">
            <div className="relative mx-auto max-w-7xl rounded-2xl md:rounded-[32px] border border-neutral-200/50 bg-neutral-100 p-2 backdrop-blur-lg dark:border-neutral-700 dark:bg-neutral-800/50 mt-10 md:mt-14">
              <div className="rounded-lg md:rounded-[24px] border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black">
               <div className="relative w-full max-w-7xl rounded-lg md:rounded-[24px] border border-neutral-700 bg-black overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          {/* Dark overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div> */}
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-[600px] md:min-h-[700px] px-8 md:px-16  py-16">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              I will Help You in
            </h1>
            
            {/* Animated Text */}
            <div className="relative h-24 md:h-32 overflow-hidden mb-8">
              <h2 
                className={`text-5xl md:text-7xl lg:text-8xl font-bold transition-all duration-400 ease-in-out ${
                  isAnimating 
                    ? 'opacity-0 translate-y-8' 
                    : 'opacity-100 translate-y-0'
                }`}
                style={{
                  background: 'linear-gradient(135deg, #2FDCCD 0%, #1fb3a5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {phrases[currentIndex]}
              </h2>
            </div>

            {/* Subtitle
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Founded by Philip, PAC Consulting helps entrepreneurs start strong, build credit, secure funding, and grow with confidence.
            </p> */}

            {/* CTA Button */}
            <button 
              className="px-8 py-4 rounded-full mt-32 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #2FDCCD 0%, #1fb3a5 100%)',
                color: '#000'
              }}
            >
              Schedule a Call
            </button>

            {/* Accent Line */}
            <div 
              className="w-24 h-1 mt-8 rounded-full"
              style={{ backgroundColor: '#2FDCCD' }}
            ></div>
          </div>
        </div>

        {/* Bottom Gradient Accent */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-2"
          style={{
            background: 'linear-gradient(90deg, #2FDCCD 0%, transparent 100%)'
          }}
        ></div>
      </div>
              </div>
            </div>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
