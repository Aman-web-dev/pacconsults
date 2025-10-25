import { CheckCircle2 } from "lucide-react";
import React from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Image from "next/image";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <div className="flex flex-col items-center text-white justify-center relative w-full py-16 lg:py-24 overflow-hidden">
      <div className="absolute -bottom-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-40 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_140%,rgba(18,139,135,1)_0%,rgba(5,5,5,0)_80%)]"></div>
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-8">
          <div className="flex flex-col items-start justify-center w-full">
            <Container className="w-max mx-auto">
              <h2 className="text-3xl lg:text-5xl leading-tight text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-400 font-semibold">
                Ready to <br /> Elevate Your Business?
              </h2>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span className="text-sm font-medium ">Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span className="text-sm font-medium">
                    Tailored Solutions
                  </span>
                </div>
              </div>
            </Container>
          </div>
          <div className="flex flex-col justify-center w-full mt-8 lg:mt-0">
            <Container className="w-max mx-auto">
              <div className="flex size-20">
                <Image
                  src="/icons/heart.svg" // Placeholder image
                  alt="Heart"
                  width={1024}
                  height={1024}
                  className="object-cover size-full"
                />
              </div>
              <div className="flex items-center gap-4 mt-6">
                <Button size="lg">Book a Consultation</Button>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">
                    4.9/5 <br /> From 500+ Client Reviews
                  </span>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CTA;
