"use client";

import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import Image from "next/image";
import Container from "../global/container";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const phrases = [
    "Grow Wealth",
    "Build Business",
    "Sell Companies",
    "Secure Funding",
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
    <div className="relative z-0 w-full h-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-40 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(18,139,135,1)_0%,rgba(5,5,5,0)_80%)]"></div>

      <Wrapper className="py-12 md:py-20">
        <div className="flex flex-col items-center justify-center w-full z-10">
          {/* Top Badge */}
          <Container>
            <div className="flex items-center justify-center gap-x-1 px-3 py-1.5 relative w-max mx-auto rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
              <Icons.stars className="size-4 sm:size-5 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-white whitespace-nowrap">
                Nationwide | Confidential | Fast
              </span>
            </div>
          </Container>

          {/* Main Heading */}
          <Container delay={0.1}>
            <h2 className="text-balance !leading-[1.15] sm:!leading-[1.2] text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mt-6 w-full px-4">
              Sell Your Business or Secure Funding{" "}
              <br className="hidden md:inline-block" /> —Without the Guesswork.
            </h2>
          </Container>

          {/* Subheading */}
          <Container delay={0.2}>
            <p className="text-sm sm:text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4 px-4 leading-relaxed">
              We help owners sell for maximum value and get the capital they
              need to grow. 20+years experience • SBA & lender network •
              $10M–$50M buyer relationships
            </p>
          </Container>

          {/* CTA Button */}
          <Container delay={0.3}>
            <div className="mt-6 md:mt-8">
              <Button size="md" className="text-sm sm:text-base">
                BOOK A CALL
              </Button>
            </div>
          </Container>

          {/* Hero Image Section */}
          <Container className="w-full z-30 mt-8 md:mt-12">
            <div className="w-full flex items-center justify-center px-2 sm:px-4">
              <div className="w-full max-w-[98vw] sm:max-w-[95vw] lg:max-w-[90vw] mx-auto">
                {/* Outer Container with border */}
                <div className="relative rounded-xl sm:rounded-2xl md:rounded-[32px] border border-neutral-700/50 bg-neutral-800/30 p-1.5 sm:p-2 backdrop-blur-lg">
                  {/* Inner Container */}
                  <div className="rounded-lg sm:rounded-xl md:rounded-[24px] border border-neutral-700/50 bg-black">
                    {/* Main Content Container */}
                    <div className="relative w-full rounded-lg sm:rounded-xl md:rounded-[24px] border border-neutral-700/50 bg-black overflow-hidden">
                      {/* Aspect ratio container - 16:9 on desktop, taller on mobile */}
                      <div
                        className="relative w-full"
                        style={{ 
                          paddingBottom: "clamp(75%, 16vw + 40%, 56.25%)" 
                        }}
                      >
                        {/* Background Image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: "url('/images/hero.png')",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        >
                          {/* Gradient Overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent sm:from-black/70 sm:via-black/40"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8 md:py-12">
                          <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                            {/* Main Heading */}
                            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight tracking-tight">
                              I will Help You in
                            </h1>

                            {/* Animated Text Container */}
                            <div
                              className="relative overflow-hidden mb-3 sm:mb-4 md:mb-6 lg:mb-8"
                              style={{
                                height: "clamp(40px, 12vw, 120px)",
                              }}
                            >
                              <h2
                                className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold transition-all duration-400 ease-in-out leading-none ${
                                  isAnimating
                                    ? "opacity-0 translate-y-4"
                                    : "opacity-100 translate-y-0"
                                }`}
                                style={{
                                  background:
                                    "linear-gradient(135deg, #2FDCCD 0%, #1fb3a5 100%)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  backgroundClip: "text",
                                }}
                              >
                                {phrases[currentIndex]}
                              </h2>
                            </div>

                            {/* CTA Button */}
                            <button
                              className="px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 md:py-4 rounded-full font-semibold text-xs xs:text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 mt-2 sm:mt-4 md:mt-8 lg:mt-16"
                              style={{
                                background:
                                  "linear-gradient(135deg, #2FDCCD 0%, #1fb3a5 100%)",
                                color: "#000",
                              }}
                            >
                              Schedule a Call
                            </button>

                            {/* Accent Line */}
                            <div
                              className="w-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 h-0.5 md:h-1 mt-3 sm:mt-4 md:mt-6 lg:mt-8 rounded-full"
                              style={{ backgroundColor: "#2FDCCD" }}
                            ></div>
                          </div>
                        </div>

                        {/* Bottom Gradient Accent */}
                        <div
                          className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 md:h-2"
                          style={{
                            background:
                              "linear-gradient(90deg, #2FDCCD 0%, transparent 100%)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
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