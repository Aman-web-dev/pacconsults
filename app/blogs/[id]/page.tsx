// app/blogs/[id]/page.tsx
// This page displays a single published blog post.

'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import Link from 'next/link';

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  status: 'draft' | 'published';
  created_at: string;
}

export default function SingleBlogPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .eq('status', 'published') // Only show published blogs publicly
      .single();

    if (error) {
      setError(error.message);
      setBlog(null);
    } else if (data) {
      setBlog(data);
    }
    setLoading(false);
  };

  if (loading) {
    return <div className="text-center py-8">Loading blog post...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  }

  if (!blog) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-lg text-gray-700 mb-6">The blog post you are looking for does not exist or is not published.</p>
        <Link href="/blogs" passHref>
          <Button>Back to Blogs</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-bold mb-2">{blog.title}</CardTitle>
          <CardDescription>By {blog.author} on {new Date(blog.created_at).toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose lg:prose-xl max-w-none">
            <p>{blog.content}</p>
          </div>
          <div className="mt-8">
            <Link href="/blogs" passHref>
              <Button>Back to Blogs</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
