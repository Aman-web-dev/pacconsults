'use client'

// app/(admin)/page.tsx
// This is the main dashboard page for the authenticated admin panel.

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Settings, Newspaper } from 'lucide-react';
import { getBlogStats, getLeadStats, getLeadsByStatus } from '@/lib/adminData';
import { BlogStatsChart } from '@/components/admin/BlogStatsChart';
import { LeadStatsChart } from '@/components/admin/LeadStatsChart';
import { BarChart as BarChartIcon, LineChart as LineChartIcon } from 'lucide-react'; // Re-importing for existing cards

export type lead = {
  /**
   * The unique identifier for the lead.
   * @type {string} (uuid)
   */
  id: string;

  /**
   * The full name of the lead.
   * @type {string | null}
   */
  name: string | null;

  /**
   * The email address of the lead.
   * @type {string | null}
   */
  email: string | null;

  /**
   * The phone number of the lead.
   * @type {string | null}
   */
  phone: string | null;

  /**
   * The current status of the lead (e.g., "New", "Contacted", "Qualified").
   * @type {string | null}
   */
  status: string | null;

  /**
   * The source from which the lead was generated (e.g., "Website", "Referral").
   * @type {string | null}
   */
  source: string | null;

  /**
   * The timestamp when the lead was created.
   * Stored as an ISO 8601 string format.
   * @type {string}
   */
  created_at: string;

  /**
   * The timestamp when the lead was last updated.
   * Stored as an ISO 8601 string format. Optional.
   * @type {string | null}
   */
  updated_at: string | null;

  /**
   * The physical address of the lead.
   * @type {string | null}
   */
  address: string | null;

  /**
   * The website URL associated with the lead.
   * @type {string | null}
   */
  website: string | null;

  /**
   * Key highlights or notes about the lead.
   * @type {string | null}
   */
  highlights: string | null;
};


export default function AdminDashboardPage() {
  const [blogStats, setBlogStats] = useState({ published: 0, unpublished: 0 });
  const [leadStats, setLeadStats] = useState({ total: 0 });
  const [leadsByStatus, setLeadsByStatus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const [blogs, leadsTotal, leadsStatus] = await Promise.all([
        getBlogStats(),
        getLeadStats(),
        getLeadsByStatus(),
      ]);
      setBlogStats(blogs);
      setLeadStats(leadsTotal);
      setLeadsByStatus(leadsStatus as any);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-xl text-gray-600">Loading dashboard data...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="space-y-8 p-4 md:p-8  rounded-lg shadow-xl">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-extrabold  tracking-tight">Admin Dashboard</h1>
              <p className="text-lg  hidden md:block">Welcome back, Administrator!</p>
            </div>
            <p className="text-xl  leading-relaxed">
              Manage your content, leads, and SEO settings with ease.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out border-l-4 border-blue-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-semibold">Total Blogs</CardTitle>
                  <Newspaper className="h-8 w-8 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-bold">{blogStats.published + blogStats.unpublished}</div>
                  <p className="text-sm text-gray-500 mt-2">Total blog posts</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out border-l-4 border-green-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-semibold">Total Leads</CardTitle>
                  <Users className="h-8 w-8 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-5xl font-bold">{leadStats.total}</div>
                  <p className="text-sm text-gray-500 mt-2">Total inquiries received</p>
                </CardContent>
              </Card>

              <BlogStatsChart published={blogStats.published} unpublished={blogStats.unpublished} />
              <LeadStatsChart data={leadsByStatus} />

              {/* Placeholder for other cards, can be removed or replaced */}
              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out border-l-4 border-purple-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-semibold">SEO Settings</CardTitle>
                  <Settings className="h-8 w-8 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base">Configure global SEO parameters for your website.</CardDescription>
                  <p className="text-sm text-gray-500 mt-2">Optimize your site for search engines.</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 ease-in-out border-l-4 border-yellow-500">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-2xl font-semibold">Website Analytics</CardTitle>
                  <BarChartIcon className="h-8 w-8 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base">Monitor your website&apos;s performance and traffic.</CardDescription>
                  <p className="text-sm text-gray-500 mt-2">Gain insights into user behavior.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
