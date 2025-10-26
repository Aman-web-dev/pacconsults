import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Minimal Blog type for stronger typing in this file
type Blog = {
  id: string;
  title: string;
  content: string;
  image_url?: string | null;
  created_at?: string | null;
  status: "published" | "draft";
  [key: string]: any;
};

// This function generates static paths for individual blog posts
export async function generateStaticParams(): Promise<{ id: string }[]> {
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('id')
    .eq('status', "published");

  if (error) {
    console.error('Error fetching blog IDs for static paths:', error);
    return [];
  }

  return blogs.map((blog: any) => ({
    id: blog.id,
  }));
}

async function getBlogById(id: string) {
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .eq('status', "published")
    .single();

  if (error) {
    console.error(`Error fetching blog with ID ${id}:`, error);
    return null;
  }
  return blog as Blog | null;
}

// Define props to satisfy the project's specific (and unusual) PageProps constraint
// by typing `params` as a Promise.
type WorkaroundPageProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage(props: WorkaroundPageProps) {
  // Use `await` to resolve the params. This works whether Next.js passes
  // a real Promise or a plain object at runtime.
  const { id } = await props.params;
  const blog = await getBlogById(id);

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
          Published on {blog?.created_at ? new Date(blog.created_at).toLocaleDateString() : 'Unknown date'}
        </p>
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <p>{blog.content}</p>
          {/* In a real application, you might parse markdown content here */}
        </div>
      </article>
    </div>
  );
}