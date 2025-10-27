import React from 'react';
import { Button } from "@/components/ui/button";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import Image from "next/image";

const AboutPhillip = () => {
    return (
        <section id="about-phillip" className="py-20 bg-white dark:bg-neutral-800">
            <Wrapper>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <Container>
                        <div className="mb-8">
                            <Image
                                src="/images/philiphero.png"
                                alt="Phillip Crawford"
                                width={500}
                                height={900}
                                quality={100}
                                className="w-full  object-cover rounded-2xl"
                            />
                        </div>
                    </Container>
                    
                    <Container delay={0.1}>
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                I'M Phillip.
                            </h2>
                            
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I help owners sell and secure capital—with straight talk, clean packaging, and a deep buyer/lender bench. Based in Houston, working nationwide.
                            </p>
                            
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At PAC Consulting, our vision is to be the transformative gateway for entrepreneurs and startups, streamlining the journey from conception to realization. Our mission is to provide seamless, strategic solutions that unlock potential, fuel innovation, and drive success in the entrepreneurial landscape.
                            </p>
                            
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We are committed to being the bedrock upon which visionary enterprises build their future, fostering an environment where dreams are not just dreamt, but achieved.
                            </p>
                            
                            <div className="pt-4">
                                <Button size="lg">
                                    CONNECT ON LINKEDIN
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </Wrapper>
        </section>
    );
};

export default AboutPhillip;
