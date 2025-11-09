import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { remark } from 'remark';
import html from 'remark-html';

// Minimal Blog type for stronger typing in this file
type Blog = {
  id: string;
  title: string;
  content: string; // This is now Markdown content
  image_url?: string | null;
  created_at?: string | null;
  status: "published" | "draft";
  [key: string]: any;
};

// Function to convert Markdown to HTML (server-side utility)
async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

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

  // **CRITICAL FIX:** Convert Markdown content to HTML on the server
  const contentHtml = await markdownToHtml(blog.content);

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <article className="bg-white rounded-lg shadow-xl p-8">
        {blog.image_url && (
          <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
            <Image
              src={blog.image_url}
              alt={blog.title}
              // The next two props are deprecated. Use `fill` for next-gen Image component
              // layout="fill" 
              // objectFit="cover"
              fill={true} // Use fill prop instead of layout="fill"
              style={{ objectFit: 'cover' }} // Move object-fit to style prop
              className="rounded-lg"
            />
          </div>
        )}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">{blog.title}</h1>
        <p className="text-gray-600 text-lg mb-8">
          Published on {blog?.created_at ? new Date(blog.created_at).toLocaleDateString() : 'Unknown date'}
        </p>
        <div 
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
          // **CRITICAL FIX:** Render the Markdown content as raw HTML
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}