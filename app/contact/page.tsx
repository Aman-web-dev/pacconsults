// app/contact/page.tsx
// This page provides contact information and a contact form for PAC Consultants.

'use client';

import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea'; // Assuming textarea is needed and will be added or is available

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    // In a real application, you would send this data to an API endpoint.
    // For now, we'll just simulate a successful submission.
    console.log('Contact form submitted:', formData);

    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8">
        We'd love to hear from you! Please fill out the form below or reach out to us directly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={formData.message} onChange={handleChange} required />
            </div>
            <Button type="submit">Send Message</Button>
            {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Details</h2>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Email:</strong> info@pacconsultants.com
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
          <p className="text-lg text-gray-700 mb-2">
            <strong>Address:</strong> 123 Consulting Ave, Suite 100, City, State, 12345
          </p>
          <div className="mt-6">
            {/* Placeholder for a map or other contact info */}
            <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
              Map Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
