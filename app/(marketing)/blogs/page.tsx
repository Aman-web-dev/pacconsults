// ============================================
// FILE: /blogs/page.tsx
// ============================================
import { supabase } from '@/lib/supabaseClient';
import { Metadata } from 'next'; // Import Metadata type

// Components are used here
import BlogHero from "@/components/blog/blog-hero"
import BlogSection from "@/components/blog/blog-section"
import CTA from "@/components/marketing/cta"
import Faq from "@/components/marketing/faq"

// SEO FIX 1: Set static metadata for the list page
export const metadata: Metadata = {
    title: 'Our Blog - Latest Articles on Tech, Business & More',
    description: 'Read the latest high-quality, AI-generated blog posts on technology, business, wellness, and more. Fresh content daily to keep you informed.',
    openGraph: {
      title: 'Our Blog - Latest Articles',
      description: 'The best AI-curated content, refreshed daily.',
      url: 'https://yourdomain.com/blogs', // REPLACE WITH YOUR DOMAIN
      type: 'website',
    },
};

// Next.js Incremental Static Regeneration (ISR) configuration.
// This is the CRITICAL FIX for "redeploy my website everyday".
// 86400 seconds = 24 hours.
export const revalidate = 86400;

async function getPublishedBlogs() {
  // CRITICAL FIX: The `fetch failed` error might be due to Next.js caching or Node.js network. 
  // Adding `noStore()` or `cache: 'no-store'` is not necessary with ISR, 
  // but we ensure the query is clean.
  const { data: blogs, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('status', "published")
    .order('created_at', { ascending: false })
    .limit(6); // Only show the latest 6

  if (error) {
    console.error('Error fetching published blogs:', error);
    // Returning an empty array allows the page to render safely
    return [];
  }
  return blogs;
}

const BlogPage = async() => {
  const blogs = await getPublishedBlogs();
  
  return (
    <div className="w-full relative flex flex-col pt-16">
        <BlogHero />
        {/* Pass the latest 6 blogs to the section component */}
        <BlogSection blogs={blogs}/> 
        <Faq />
        <CTA />
    </div>
  )
};

export default BlogPage;