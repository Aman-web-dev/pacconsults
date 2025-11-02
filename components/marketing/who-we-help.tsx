import React from 'react';
import { Button } from "@/components/ui/button";
import { WHO_WE_HELP } from "@/constants/who-we-help";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import Image from "next/image";

const WhoWeHelp = () => {
    return (
        <section id="who-we-help" className="py-20 bg-neutral-50 dark:bg-neutral-900">
            <Wrapper>
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Who We Help
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We help owners sell for maximum value and get the capital they need to grow.
                        </p>
                    </div>
                </Container>

                <div className="grid md:grid-cols-3 gap-8">
                    {WHO_WE_HELP.map((item, index) => (
                        <Container key={index} delay={0.1 * index}>
                            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="mb-6">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-4">
                                    {item.title}
                                </h3>
                                
                                <p className="text-muted-foreground mb-6">
                                    {item.description}
                                </p>
                                
                                <a href={item.ctaLink} target="_blank" rel="noopener noreferrer">
                                <Button className="w-full">
                                    Book a Call
                                </Button>
                                </a>
                            </div>
                        </Container>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default WhoWeHelp;
