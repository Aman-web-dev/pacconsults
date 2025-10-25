import React from "react";
import Image from "next/image";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { Marquee } from "../ui/marquee";

type Testimonial = {
    name: string;
    role: string;
    company: string;
    companyUrl: string;
    image: string;
    content: string;
    time: string;
    date: string;
    highlighted?: boolean;
};

// Placeholder TESTIMONIALS array - replace with actual content for PAC Consultants
const TESTIMONIALS: Testimonial[] = [
    {
        name: "John Doe",
        role: "CEO",
        company: "Tech Solutions",
        companyUrl: "#",
        image: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470", // Placeholder image
        content: "PAC Consulting provided invaluable guidance. Their expertise in funding helped us secure the capital needed for our expansion. Highly recommended!",
        time: "2 days ago",
        date: "Oct 23, 2025",
    },
    {
        name: "Jane Smith",
        role: "Founder",
        company: "Innovate Co.",
        companyUrl: "#",
        image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1476", // Placeholder image
        content: "The team at PAC Consulting is exceptional. Their strategic planning transformed our business, leading to significant growth and market penetration.",
        time: "1 week ago",
        date: "Oct 18, 2025",
    },
    {
        name: "Robert Johnson",
        role: "Director",
        company: "Global Ventures",
        companyUrl: "#",
        image: "https://images.unsplash.com/photo-1746194060000-3615371d42bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687", // Placeholder image
        content: "We partnered with PAC for a complex acquisition, and their M&A advisory was top-notch. Smooth process and excellent results.",
        time: "2 weeks ago",
        date: "Oct 11, 2025",
    },
    {
        name: "Emily White",
        role: "Owner",
        company: "Local Business",
        companyUrl: "#",
        image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687", // Placeholder image
        content: "Their credit restoration services were a game-changer for our small business. We now have access to better financing options.",
        time: "3 weeks ago",
        date: "Oct 4, 2025",
    },
];

const Testimonials = () => {
    return (
        <div className="flex flex-col items-center text-white justify-center relative w-full pb-16 lg:pb-24">
            <Wrapper>
                <div className="relative flex flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:80s] gap-8">
                        {TESTIMONIALS.map((item) => (
                            <Item key={item.name} item={item} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
            </Wrapper>
            <div className="absolute hidden lg:block top-1/4 left-1/4 w-1/8 h-16 rounded-full bg-primary/80 -z-10 blur-[6rem]"></div>
            <div className="absolute hidden lg:block top-1/4 right-1/4 w-1/8 h-16 rounded-full bg-primary/80 -z-10 blur-[6rem]"></div>
        </div>
    )
};

const Item = ({ item }: { item: Testimonial }) => (
    <Container>
        <div className="flex flex-col bg-neutral-900/80 border border-border/50 rounded-lg lg:rounded-xl p-4 lg:p-6 w-full">
            <div className="flex items-center gap-x-3 w-full">
                <div className="w-10 h-10 flex-shrink-0 rounded-full">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={1024}
                        height={1024}
                        className="rounded-full object-cover size-full"
                    />
                </div>
                <div className="flex flex-col">
                    <h4 className="font-semibold">
                        {item.name}
                    </h4>
                    <div className="text-muted-foreground text-sm">
                        {item.role}{" "}
                        <span className="text-primary ml-1">
                            @{item.company}
                        </span>
                    </div>
                </div>
            </div>
            <div className="text-muted-foreground max-w-xs mt-2">
                "{item.content}"
            </div>
            <div className="text-xs text-muted-foreground mt-4 flex gap-2">
                <span>{item.time}</span>
                <span>·</span>
                <span>{item.date}</span>
            </div>
        </div>
    </Container>
);

export default Testimonials;
