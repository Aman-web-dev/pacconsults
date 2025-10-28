import React from 'react';
import { Button } from "@/components/ui/button";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import Image from "next/image";

const ServicesOverview = () => {
    const services = [
        {
            title: "Sell-Side Advisory",
            description: "Package the story, protect confidentiality, drive competition, and structure deals that close.",
            features: [
                "Valuation & confidential marketing",
                "Buyer outreach & negotiation", 
                "Seller notes, earnouts, SBA coordination"
            ],
            cta: "GET A FREE VALUATION",
            image: "/images/sell-side-advisory.webp"
        },
        {
            title: "Business Funding",
            description: "Prep that gets approvals. Relationships that move faster.",
            features: [
                "SBA packaging and lender matching",
                "Lines of credit & business cards",
                "Bank + fintech network"
            ],
            cta: "CHECK FUNDING OPTIONS",
            image: "/images/business-plan.webp"
        }
    ];

    return (
        <section id="services" className="py-20 bg-white dark:bg-neutral-800">
            <Wrapper>
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            SERVICES
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            We always strive for the best.
                        </p>
                    </div>
                </Container>

                <div className="grid md:grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <Container key={index} delay={0.1 * index}>
                            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                                <div className="mb-6">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-4">
                                    {service.title}
                                </h3>
                                
                                <p className="text-muted-foreground mb-6">
                                    {service.description}
                                </p>
                                
                                <ul className="space-y-2 mb-8">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <Button className="w-full">
                                    {service.cta}
                                </Button>
                            </div>
                        </Container>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default ServicesOverview;
