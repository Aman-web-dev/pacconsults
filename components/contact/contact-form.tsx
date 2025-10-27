'use client'

import React, { useState } from 'react';
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner"; // For displaying notifications

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subject, setSubject] = useState('');
    const [workEmail, setWorkEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: `${firstName} ${lastName}`,
                email: workEmail,
                subject,
                message,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            toast.success(data.message);
            // Clear form fields
            setFirstName('');
            setLastName('');
            setSubject('');
            setWorkEmail('');
            setMessage('');
        } else {
            toast.error(data.message || 'Failed to send message.');
        }
        setLoading(false);
    };

    return (
        <div className="w-full pb-16 lg:pb-24">
            <Wrapper>
                <Container delay={0.1}>
                    <div className="flex flex-col lg:items-center lg:justify-center">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-left lg:text-center">
                            Contact Us
                        </h2>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto w-full mt-10 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">
                                    First Name*
                                </Label>
                                <Input
                                    id="firstName"
                                    placeholder="John"
                                    className="bg-[#0A0A0A] border-border/50"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">
                                    Last Name*
                                </Label>
                                <Input
                                    id="lastName"
                                    placeholder="Doe"
                                    className="bg-[#0A0A0A] border-border/50"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subject">
                                Subject*
                            </Label>
                            <Input
                                id="subject"
                                placeholder="Type your subject here"
                                className="bg-[#0A0A0A] border-border/50"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="workEmail">
                                Work Email*
                            </Label>
                            <Input
                                id="workEmail"
                                type="email"
                                placeholder="johndoe@example.com"
                                className="bg-[#0A0A0A] border-border/50"
                                value={workEmail}
                                onChange={(e) => setWorkEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">
                                How can we help you?*
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Type your message here..."
                                className="min-h-[150px] bg-[#0A0A0A] border-border/50 resize-none"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>

                        {/* File upload removed as per current task focus on email contact */}
                        {/* <div className="flex flex-col gap-2">
                            <label
                                htmlFor="file-upload"
                                className="flex items-center justify-center gap-2 px-4 py-8 rounded-lg border border-dashed border-border/50 bg-[#0A0A0A] cursor-pointer"
                            >
                                <UploadIcon className="size-5 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">
                                    Drop your files here or click to upload
                                </span>
                                <input
                                    id="file-upload"
                                    type="file"
                                    multiple
                                    className="hidden"
                                />
                            </label>
                        </div> */}

                        <Button className="w-full" type="submit" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </form>
                </Container>
            </Wrapper>
        </div>
    )
};

export default ContactForm
