import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Container from "../global/container";
import Wrapper from "../global/wrapper";

const ContactFormHero = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-neutral-800">
            <Wrapper>
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                BOOK A CALL
                            </h2>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <Label htmlFor="fullName">Full Name *</Label>
                                    <Input id="fullName" type="text" required />
                                </div>
                                
                                <div>
                                    <Label htmlFor="email">Email *</Label>
                                    <Input id="email" type="email" required />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="phone">Phone *</Label>
                                <Input id="phone" type="tel" required />
                            </div>

                            <div>
                                <Label htmlFor="address">Address</Label>
                                <Input id="address" type="text" placeholder="Street Address" />
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <Label htmlFor="city">City</Label>
                                    <Input id="city" type="text" />
                                </div>
                                
                                <div>
                                    <Label htmlFor="state">State/Province</Label>
                                    <Input id="state" type="text" />
                                </div>
                                
                                <div>
                                    <Label htmlFor="zip">ZIP/Postal</Label>
                                    <Input id="zip" type="text" />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="country">Select country/region</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="us">United States</SelectItem>
                                        <SelectItem value="ca">Canada</SelectItem>
                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                        <SelectItem value="au">Australia</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="service">Service Needed *</Label>
                                <Select required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an option" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="business-sale">Business Sale Advisory</SelectItem>
                                        <SelectItem value="funding">Business Funding</SelectItem>
                                        <SelectItem value="credit-restoration">Credit Restoration</SelectItem>
                                        <SelectItem value="shelf-corporation">Shelf Corporation</SelectItem>
                                        <SelectItem value="business-formation">Business Formation</SelectItem>
                                        <SelectItem value="consultation">General Consultation</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Submit
                            </Button>
                        </form>
                    </div>
                </Container>
            </Wrapper>
        </section>
    );
};

export default ContactFormHero;
