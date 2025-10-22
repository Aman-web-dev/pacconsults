// app/(admin)/seo/page.tsx
// This page allows authenticated administrators to manage global SEO settings.

'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';

interface SeoSettings {
  id: string;
  site_title: string;
  meta_description: string;
  meta_keywords: string;
  google_analytics_id?: string;
  updated_at: string;
}

export default function AdminSeoPage() {
  const [settings, setSettings] = useState<SeoSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSeoSettings();
  }, []);

  const fetchSeoSettings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('seo_settings')
      .select('*')
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found
      setError(error.message);
    } else if (data) {
      setSettings(data);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError('User not authenticated.');
      setSubmitting(false);
      return;
    }

    if (settings?.id) {
      // Update existing settings
      const { error } = await supabase
        .from('seo_settings')
        .update({
          site_title: settings.site_title,
          meta_description: settings.meta_description,
          meta_keywords: settings.meta_keywords,
          google_analytics_id: settings.google_analytics_id,
          updated_at: new Date().toISOString(),
        })
        .eq('id', settings.id);

      if (error) {
        setError(error.message);
      } else {
        alert('SEO settings updated successfully!');
      }
    } else {
      // Insert new settings
      const { error } = await supabase
        .from('seo_settings')
        .insert([{
          site_title: settings?.site_title || '',
          meta_description: settings?.meta_description || '',
          meta_keywords: settings?.meta_keywords || '',
          google_analytics_id: settings?.google_analytics_id || '',
        }]);

      if (error) {
        setError(error.message);
      } else {
        alert('SEO settings created successfully!');
        fetchSeoSettings(); // Refetch to get the new ID
      }
    }
    setSubmitting(false);
  };

  if (loading) {
    return <div className="text-center py-8">Loading SEO settings...</div>;
  }

  if (error && !submitting) {
    return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">SEO Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Global SEO Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="site_title">Site Title</Label>
              <Input
                id="site_title"
                type="text"
                placeholder="Your Website Title"
                value={settings?.site_title || ''}
                onChange={(e) => setSettings({ ...settings!, site_title: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="meta_description">Meta Description</Label>
              <Textarea
                id="meta_description"
                placeholder="A brief description of your website for search engines"
                value={settings?.meta_description || ''}
                onChange={(e) => setSettings({ ...settings!, meta_description: e.target.value })}
                rows={4}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="meta_keywords">Meta Keywords (Comma-separated)</Label>
              <Input
                id="meta_keywords"
                type="text"
                placeholder="e.g., seo, marketing, consulting"
                value={settings?.meta_keywords || ''}
                onChange={(e) => setSettings({ ...settings!, meta_keywords: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="google_analytics_id">Google Analytics ID (Optional)</Label>
              <Input
                id="google_analytics_id"
                type="text"
                placeholder="UA-XXXXX-Y or G-XXXXXXX"
                value={settings?.google_analytics_id || ''}
                onChange={(e) => setSettings({ ...settings!, google_analytics_id: e.target.value })}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" disabled={submitting}>
                {submitting ? 'Saving...' : 'Save SEO Settings'}
              </Button>
            </div>
            {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
