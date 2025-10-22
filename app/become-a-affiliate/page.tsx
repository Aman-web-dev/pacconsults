// app/become-a-affiliate/page.tsx
// This page provides information and a form for individuals to become affiliates of PAC Consultants.

'use client';

import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';

export default function BecomeAnAffiliatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    howYouHelp: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');

    // In a real application, this would send data to an API endpoint.
    console.log('Affiliate application submitted:', formData);

    setTimeout(() => {
      setStatus('Application submitted successfully! We will review it and get back to you.');
      setFormData({ name: '', email: '', website: '', howYouHelp: '' });
    }, 2000);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Become an Affiliate</h1>
      <p className="text-lg text-gray-700 mb-8">
        Partner with PAC Consultants and help others succeed while earning commissions. We are looking for motivated individuals and organizations to join our affiliate program.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Why Partner With Us?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Generous commission rates on successful referrals.</li>
            <li>Access to marketing materials and support.</li>
            <li>Opportunity to collaborate with a leading consulting brand.</li>
            <li>Help your audience achieve their business and personal goals.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Apply Now</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input type="text" id="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="email">Your Email</Label>
              <Input type="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="website">Your Website/Social Media (Optional)</Label>
              <Input type="url" id="website" value={formData.website} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="howYouHelp">How do you plan to promote PAC Consultants?</Label>
              <Textarea id="howYouHelp" value={formData.howYouHelp} onChange={handleChange} rows={4} required />
            </div>
            <Button type="submit" disabled={status === 'Submitting...'}>
              {status === 'Submitting...' ? 'Submitting...' : 'Submit Application'}
            </Button>
            {status && status !== 'Submitting...' && <p className="mt-4 text-sm text-gray-600">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
