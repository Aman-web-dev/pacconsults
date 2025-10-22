'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LeadStatusData {
  name: string;
  value: number;
}

interface LeadStatsChartProps {
  data: LeadStatusData[];
}

export function LeadStatsChart({ data }: LeadStatsChartProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Leads by Status</CardTitle>
      </CardHeader>
      <CardContent className="h-[250px] flex items-center justify-center">
        {data.length === 0 ? (
          <p className="text-gray-500">No lead data available.</p>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" name="Number of Leads" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
