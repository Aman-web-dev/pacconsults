// ============================================
// FILE: /blogs/[id]/page.tsx
// ============================================
import { supabase } from '@/lib/supabaseClient';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { remark } from 'remark';
import html from 'remark-html';
import { Metadata } from 'next'; // Import Metadata type

// Minimal Blog type for stronger typing in this file
type Blog = {
  id: string;
  title: string;
  description: string; // Ensure description is available for metadata
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

// Set revalidation time for dynamic pages (e.g., 24 hours)
export const revalidate = 86400; 

// SEO FIX 1: Implement generateMetadata for dynamic SEO
type WorkaroundPageProps = {
  params: { id: string }; // Use plain object for params type here
};

export async function generateMetadata({ params }: WorkaroundPageProps): Promise<Metadata> {
  const { id } = params;
  const blog = await getBlogById(id);

  if (!blog) {
    return {};
  }

  const title = blog.title;
  const description = blog.description;
  const imageUrl = blog.image_url || '/placeholder-blog-image.jpg'; // Use a fallback image

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [{ url: imageUrl }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl],
    },
  };
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
    .select('*, description') // Ensure description is selected
    .eq('id', id)
    .eq('status', "published")
    .single();

  if (error) {
    console.error(`Error fetching blog with ID ${id}:`, error);
    return null;
  }
  return blog as Blog | null;
}


export default async function BlogDetailPage({ params }: WorkaroundPageProps) {
  const { id } = params;
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
              fill={true} 
              style={{ objectFit: 'cover' }} 
              className="rounded-lg"
              sizes="(max-width: 768px) 100vw, 700px" // SEO/Performance: Add sizes prop
              priority // SEO: Mark as priority image
            />
          </div>
        )}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">{blog.title}</h1>
        <p className="text-gray-600 text-lg mb-8">
          Published on {blog?.created_at ? new Date(blog.created_at).toLocaleDateString() : 'Unknown date'}
        </p>
        {/* SEO FIX 2: Use a clean div and dangerouslySetInnerHTML */}
        <div 
          className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
      {/* SEO FIX 3: Add a structured data script (Schema.org Article) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog.title,
            "description": blog.description,
            "image": blog.image_url,
            "author": {
              "@type": "Person",
              "name": blog.author || "AI Content Generator"
            },
            "datePublished": blog.created_at,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://yourdomain.com/blogs/${blog.id}` // REPLACE WITH YOUR DOMAIN
            }
          })
        }}
      />
    </div>
  );
}