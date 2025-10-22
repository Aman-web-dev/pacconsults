// app/book-a-call/page.tsx
// This page allows users to book a consultation call with PAC Consultants.

'use client';

import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

export default function BookACallPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (value: string, id: string) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Booking...');

    // In a real application, this would send data to an API endpoint or a scheduling service.
    console.log('Book a Call form submitted:', formData);

    setTimeout(() => {
      setStatus('Your call has been booked successfully! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Book a Consultation Call</h1>
      <p className="text-lg text-gray-700 mb-8">
        Schedule a free consultation with our experts to discuss your needs and how PAC Consultants can help you achieve your goals.
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input type="text" id="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="email">Your Email</Label>
            <Input type="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input type="tel" id="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="service">Service of Interest</Label>
            <Select value={formData.service} onValueChange={(value) => handleSelectChange(value, 'service')} required>
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business-strategy">Business Strategy</SelectItem>
                <SelectItem value="marketing-seo">Marketing & SEO</SelectItem>
                <SelectItem value="lead-generation">Lead Generation</SelectItem>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="preferredDate">Preferred Date</Label>
            <Input type="date" id="preferredDate" value={formData.preferredDate} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="preferredTime">Preferred Time</Label>
            <Input type="time" id="preferredTime" value={formData.preferredTime} onChange={handleChange} required />
          </div>
        </div>

        <div>
          <Label htmlFor="message">Your Message / Specific Needs (Optional)</Label>
          <Textarea id="message" value={formData.message} onChange={handleChange} rows={4} />
        </div>

        <Button type="submit" disabled={status === 'Booking...'}>
          {status === 'Booking...' ? 'Booking...' : 'Book My Call'}
        </Button>
        {status && status !== 'Booking...' && <p className="mt-4 text-sm text-gray-600">{status}</p>}
      </form>
    </div>
  );
}
