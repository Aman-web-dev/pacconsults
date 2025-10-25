import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

// This function fetches data at build time
export async function generateStaticParams() {
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('id')
    .eq('status', "published");

  if (error) {
    console.error('Error fetching blog IDs for static paths:', error);
    return [];
  }

  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

async function getPublishedBlogs() {
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('status', "published")
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching published blogs:', error);
    return [];
  }
  return blogs;
}

export default async function BlogListPage() {
  const blogs = await getPublishedBlogs();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">Our Blog</h1>
      {blogs.length === 0 ? (
        <p className="text-center text-xl text-gray-600">No published blogs yet. Check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              {blog.image_url && (
                <div className="relative h-48 w-full">
                  <Image
                    src={blog.image_url}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold leading-tight">
                  <Link href={`/blogs/${blog.id}`} className="hover:text-blue-600 transition-colors duration-200">
                    {blog.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  Published on {new Date(blog.created_at).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 line-clamp-3">{blog.content}</p>
                <Link href={`/blogs/${blog.id}`} className="text-blue-600 hover:underline mt-4 inline-block">
                  Read More &rarr;
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
