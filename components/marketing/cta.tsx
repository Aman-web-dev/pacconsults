import { CheckCircle2 } from "lucide-react";
import React from 'react'
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Image from "next/image";
import { Button } from "../ui/button";

const CTA = () => {
    return (
        <div className="flex flex-col items-center justify-center relative w-full py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
            <div className="absolute bottom-0 lg:bottom-0 inset-x-0 mx-auto bg-primary/50 lg:bg-primary/70 rounded-full w-1/3 h-1/16 blur-[4rem]"></div>

            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-8">
                    <div className="flex flex-col items-start justify-center w-full">
                        <Container className="w-max mx-auto">
                            <h2 className="text-3xl lg:text-5xl leading-tight text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-400 font-semibold">
                                Ready to Sell or <br /> Secure Funding?
                            </h2>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="size-4 text-primary" />
                                    <span className="text-sm font-medium">
                                        Free consultation
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="size-4 text-primary" />
                                    <span className="text-sm font-medium">
                                        No obligation
                                    </span>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div className="flex flex-col justify-center w-full mt-8 lg:mt-0">
                        <Container className="w-max mx-auto">
                            <div className="flex size-20">
                                <Image
                                    src="/icons/heart.svg"
                                    alt="Success"
                                    width={1024}
                                    height={1024}
                                    className="object-cover size-full"
                                />
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                <Button size="lg">
                                    BOOK A CALL
                                </Button>
                                <div className="flex flex-col">
                                    <span className="text-sm text-muted-foreground">
                                        4.9/5 <br /> From 200+ Client Reviews
                                    </span>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

export default CTA
