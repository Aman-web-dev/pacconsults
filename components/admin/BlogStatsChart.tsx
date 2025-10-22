'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogStats {
  published: number;
  unpublished: number;
}

const COLORS = ['#82ca9d', '#8884d8']; // Green for published, Purple for unpublished

export function BlogStatsChart({ published, unpublished }: BlogStats) {
  const data = [
    { name: 'Published', value: published },
    { name: 'Unpublished', value: unpublished },
  ];

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Blog Publication Status</CardTitle>
      </CardHeader>
      <CardContent className="h-[250px] flex items-center justify-center">
        {published === 0 && unpublished === 0 ? (
          <p className="text-gray-500">No blog data available.</p>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
