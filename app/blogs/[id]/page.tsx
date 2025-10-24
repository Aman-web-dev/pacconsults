import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// This function generates static paths for individual blog posts
export async function generateStaticParams() {
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('id')
    .eq('is_published', true);

  if (error) {
    console.error('Error fetching blog IDs for static paths:', error);
    return [];
  }

  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

async function getBlogById(id: string) {
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .eq('is_published', true)
    .single();

  if (error) {
    console.error(`Error fetching blog with ID ${id}:`, error);
    return null;
  }
  return blog;
}

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  const blog = await getBlogById(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <article className="bg-white rounded-lg shadow-xl p-8">
        {blog.image_url && (
          <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
            <Image
              src={blog.image_url}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">{blog.title}</h1>
        <p className="text-gray-600 text-lg mb-8">
          Published on {new Date(blog.created_at).toLocaleDateString()}
        </p>
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <p>{blog.content}</p>
          {/* In a real application, you might parse markdown content here */}
        </div>
      </article>
    </div>
  );
}
