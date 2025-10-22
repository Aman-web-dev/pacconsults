// app/blogs/page.tsx
// This page displays a public listing of published blogs from PAC Consultants.

'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  status: 'draft' | 'published';
  created_at: string;
}

export default function PublicBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPublishedBlogs();
  }, []);

  const fetchPublishedBlogs = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('status', 'published') // Only fetch published blogs for the public view
      .order('created_at', { ascending: false });

    if (error) {
      setError(error.message);
      setBlogs([]);
    } else {
      setBlogs(data || []);
    }
    setLoading(false);
  };

  if (loading) {
    return <div className="text-center py-8">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">Our Latest Insights</h1>
      {blogs.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No published blogs yet. Please check back later!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>By {blog.author} on {new Date(blog.created_at).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Display a truncated version of the content */}
                <p className="text-gray-700 mb-4">{blog.content.substring(0, 150)}...</p>
                <Link href={`/blogs/${blog.id}`} passHref>
                  <Button variant="link" className="p-0 h-auto">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
