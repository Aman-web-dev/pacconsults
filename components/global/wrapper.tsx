import React from 'react';
import { cn } from "@/lib/utils"; // Assuming cn is in utils.ts

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Wrapper = ({ className, children }: Props) => {
    return (
        <section className={cn(
            "h-full mx-auto w-full lg:max-w-screen-xl px-4 lg:px-10",
            className,
        )}>
            {children}
        </section>
    )
};

export default Wrapper;
