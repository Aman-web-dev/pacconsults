import React from 'react';
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import Image from "next/image";

const HowItWorksPAC = () => {
    const steps = [
        {
            number: "1",
            title: "Discovery Call",
            description: "We start with a comprehensive discovery call to understand your business, goals, and specific needs."
        },
        {
            number: "2", 
            title: "Strategy & Docs",
            description: "We develop a tailored strategy and prepare all necessary documentation for your specific situation."
        },
        {
            number: "3",
            title: "Market/Underwrite", 
            description: "We market your business to qualified buyers or underwrite your funding application with our lender network."
        },
        {
            number: "4",
            title: "Close & Transition",
            description: "We guide you through the closing process and ensure a smooth transition to your next phase."
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-neutral-50 dark:bg-neutral-900">
            <Wrapper>
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            How It Works
                        </h2>
                    </div>
                </Container>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <Container key={index} delay={0.1 * index}>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                                    {step.number}
                                </div>
                                
                                <h3 className="text-xl font-bold mb-4">
                                    {step.title}
                                </h3>
                                
                                <p className="text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>
                        </Container>
                    ))}
                </div>

                <Container className="mt-16">
                    <div className="text-center">
                        <Image
                            src="/images/hero.svg"
                            alt="Process Overview"
                            width={800}
                            height={400}
                            className="w-full h-64 object-cover rounded-2xl mx-auto"
                        />
                    </div>
                </Container>
            </Wrapper>
        </section>
    );
};

export default HowItWorksPAC;
