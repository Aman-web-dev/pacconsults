import React from 'react'
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import Image from "next/image";

// Placeholder FEATURES array - replace with actual content for PAC Consultants
const FEATURES = [
    {
        title: "Strategic Business Planning",
        desc: "Develop robust strategies for growth, market entry, and competitive advantage.",
        icon: "/icons/pie.svg", // Placeholder image
    },
    {
        title: "Comprehensive Funding Solutions",
        desc: "Access diverse funding options including SBA loans, M&A financing, and working capital.",
        icon: "/icons/computer.svg", // Placeholder image
    },
    {
        title: "Expert M&A Advisory",
        desc: "Navigate mergers and acquisitions with expert guidance for maximum value.",
        icon: "/icons/label.svg", // Placeholder image
    },
    {
        title: "Credit Restoration & Building",
        desc: "Improve your business credit profile to unlock better financial opportunities.",
        icon: "/icons/crown.svg", // Placeholder image
    },
    {
        title: "Commercial Real Estate",
        desc: "Get expert advice and financing for your commercial property needs.",
        icon: "/icons/cursor.svg", // Placeholder image
    },
    {
        title: "Equipment Financing",
        desc: "Secure financing for essential equipment to boost your operational efficiency.",
        icon: "/icons/clock.svg", // Placeholder image
    },
];

const Features = () => {
    return (
        <div className="flex flex-col items-center justify-center text-white w-full py-16 lg:py-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-center tracking-tight">
                            Tailored Solutions That Drive <br /> Your Business Forward
                        </h2>
                        <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-center max-w-md mt-2">
                            At PAC Consulting, we offer a suite of services designed to meet the unique needs of entrepreneurs and businesses, ensuring sustainable growth and success.
                        </p>
                    </div>
                </Container>

                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-10">
                        {FEATURES.map((feature, index) => (
                            <Feature
                                key={index}
                                title={feature.title}
                                desc={feature.desc}
                                icon={feature.icon}
                            />
                        ))}
                    </div>
                </Container>
            </Wrapper>
        </div>
    )
};

const Feature = ({
    title,
    desc,
    icon
}: {
    title: string;
    desc: string;
    icon: string;
}) => {
    return (
        <div className="flex flex-col p-4 lg:p-6 border border-border/60 rounded-lg lg:rounded-xl hover:border-primary transition-all duration-300 ease-out">
            <Image
                src={icon}
                alt={title}
                width={1024}
                height={1024}
                className="size-8 lg:size-10"
            />
            <h3 className="text-lg font-semibold mt-4">
                {title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
                {desc}
            </p>
        </div>
    )
};

export default Features;
