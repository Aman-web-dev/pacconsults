import React from "react";
import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import Image from "next/image";
import Container from "../global/container";
import { Button } from "../ui/button";
import { CheckCircle2Icon } from "lucide-react";

const AboutHero = () => {
  return (
    <div className="relative z-0 w-full h-full">
      {/* Background glow */}
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-60 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(18,139,135,1)_0%,rgba(5,5,5,0)_80%)]"></div>

      <Wrapper className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* LEFT CONTENT */}
          <div className="flex flex-col w-full z-10">
            <Container>
              <div className="flex items-center justify-center gap-x-1 px-3 py-1.5 relative w-max mx-auto md:mx-0 rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
                <Icons.stars className="size-5" />
                <span className="text-sm text-white">PAC Consulting</span>
              </div>
            </Container>

            <Container delay={0.1}>
              <h2 className="text-balance !leading-[1.25] text-4xl md:text-6xl font-semibold tracking-tight text-center lg:text-left mt-6 w-full">
                Empowering Entrepreneurs <br className="hidden lg:inline-block" /> to Build, Fund & Grow
              </h2>
            </Container>

            <Container delay={0.2}>
              <p className="text-base lg:text-lg text-muted-foreground text-center lg:text-left mt-4 max-w-2xl mx-auto lg:mx-0">
                At PAC Consulting, we help entrepreneurs start strong, build
                credit, secure funding, and grow their businesses with confidence.
                Founded by Philip Crawford, our mission is simple:{" "}
                <span className="font-semibold text-white">People Matter. Results Matter. Your Vision Matters.</span>
              </p>
            </Container>

            <Container delay={0.3}>
              <div className="hidden lg:flex flex-col gap-2 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="size-4 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Build business credit from the ground up
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="size-4 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Secure funding to fuel your business goals
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="size-4 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Access mentorship and financial growth strategies
                  </span>
                </div>
              </div>
            </Container>

            <Container delay={0.4}>

              
              <div className="mt-8 flex justify-center lg:justify-start">
              <a target="_blank" href="https://calendly.com/pacconsulting/investororsellerdiscoverycall?back=1">
                <Button size="md">Schedule a Call</Button>

              </a>
              </div>
            </Container>
          </div>

          {/* RIGHT IMAGE */}
          <Container className="w-full z-30">
            <div className="relative">
              <Image
                src="/images/about/hero.svg"
                alt="About PAC Consulting"
                priority
                width={2932}
                height={1664}
                loading="eager"
                className="w-full h-full object-contain"
              />
            </div>
          </Container>
        </div>
      </Wrapper>

      {/* FOUNDER SECTION */}
      <Wrapper className="py-12">
        <Container delay={0.2}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/Gemini_Generated_Image_t98po7t98po7t98p.png"
                alt="Philip Crawford"
                width={700}
                height={700}
                priority
                className="rounded-2xl shadow-lg object-cover w-full h-full"
              />
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
                Hello! I'm Phillip Crawford 👋
              </h3>
              <p className="text-muted-foreground text-base md:text-lg mb-4">
                Originally from Houston, Texas, I spent most of my life in New York and
                hold a degree in accounting from SUNY Old Westbury. For the past
                four years, I’ve been deeply involved in the financial industry after
                transitioning from running my own personal training business.
              </p>
              <p className="text-muted-foreground text-base md:text-lg mb-4">
                In 2020, my life took a profound turn after a near-fatal battle with
                COVID-19. That experience reshaped my perspective — I embraced gratitude,
                restarted my life, and immersed myself in learning about money,
                credit, and investing from top mentors.
              </p>
              <p className="text-muted-foreground text-base md:text-lg">
                This journey led to the creation of PAC Consulting — an ecosystem
                hub helping 9-to-5 workers and business owners alike understand
                investing, credit, and access to capital. My mission is to empower
                people with the right knowledge to dream big and grow with confidence.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a target="_blank" href="https://calendly.com/pacconsulting/investororsellerdiscoverycall?back=1">
            <Button size="lg">Schedule a Call</Button>

            </a>
          </div>
        </Container>
      </Wrapper>

      {/* STATS */}
      <Container delay={0.5}>
        <div className="grid grid-cols-3 lg:place-items-stretch mt-16 lg:mt-24">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-xs text-center text-muted-foreground uppercase">
              Client retention
            </span>
            <h3 className="text-3xl font-semibold">+22k</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-xs text-center text-muted-foreground uppercase">
              Emails per month
            </span>
            <h3 className="text-3xl font-semibold">50k+</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-xs text-center text-muted-foreground uppercase">
              Monthly campaigns
            </span>
            <h3 className="text-3xl font-semibold">+45k</h3>
          </div>
        </div>
      </Container>

      {/* FOOTER LINKS */}
      <div className="mt-20 border-t border-neutral-800 pt-8 text-center text-sm text-muted-foreground">
        <p>
          Privacy Policy | Schedule a Call | About PAC Consulting
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
