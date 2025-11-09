import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import Link from "next/link";
import Image from "next/image";
import { supabase } from '@/lib/supabaseClient'; // Import Supabase client

// --- Data Types and Fetching ---

// Define the Blog type to match the data fetched from Supabase
type SupabaseBlog = {
    id: string; // Added ID for linking
    title: string;
    description: string;
    category: string;
    image_url: string; // Matches Supabase/API field
    created_at: string;
    author: string; // Assuming author is available
    // Removed specific local fields (desc, image, authorRole, etc.) as they don't match Supabase
};

// Function to fetch the latest 3 published blogs
async function getLatestBlogs(): Promise<SupabaseBlog[]> {
    // Set a short revalidate time for this component if it's reused on other pages
    // Note: If this component is on a page with a different revalidate, the page's revalidate takes precedence.
    const { data: blogs, error } = await supabase
        .from('blogs')
        .select('id, title, description, category, image_url, created_at, author')
        .eq('status', "published")
        .order('created_at', { ascending: false })
        .limit(3); // CRITICAL FIX: Limit to 3 latest blogs

    if (error) {
        console.error('Error fetching latest blogs for marketing section:', error);
        return [];
    }
    return blogs as SupabaseBlog[];
}

// --- Component ---

const Blogs = async () => { // Make the component async to fetch data
    const latestBlogs = await getLatestBlogs();

    return (
        <div className="flex flex-col items-center justify-center relative w-full pb-16 lg:pb-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-center tracking-tight">
                            Blog & Articles
                        </h2>
                        <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-center mt-2 max-w-md">
                            Explore our latest articles and insights on various topics related to our industry and expertise
                        </p>
                    </div>
                </Container>

                <div className="w-full mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Use fetched data instead of local BLOGS constant */}
                        {latestBlogs.map((item, index) => (
                            <Item key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};


// Updated Item component to use Supabase type and image fix
const Item = ({ item, index }: { item: SupabaseBlog, index: number }) => (
    <Container>
        <div className="flex flex-col w-full">
            {/* CRITICAL FIX 1: Set a fixed height for the image container */}
            <div className="relative w-full h-60 bg-foreground/5 border border-border/20 rounded-lg lg:rounded-xl overflow-hidden">
                <Image
                    src={item.image_url || "/images/blog-placeholder.svg"}
                    alt={item.title}
                    // CRITICAL FIX 2: Use fill instead of fixed width/height
                    fill={true} 
                    style={{ objectFit: 'cover' }} // Use object-fit cover
                    className="rounded-lg lg:rounded-xl transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw" // Optimization for performance
                    priority={index < 3} // Priority for the first few images
                />
            </div>
            <div className="flex flex-col mt-4">
                <span className="inline-block px-3 py-1 rounded-sm bg-neutral-800/80 text-xs text-foreground/80 w-max">
                    {item.category}
                </span>
                <Link
                    // Use the fetched ID for the Link
                    href={`/blogs/${item.id}`} 
                    className="text-lg lg:text-xl font-semibold mt-2 line-clamp-2 hover:text-blue-500 transition-colors" // Added line-clamp-2 for title consistency
                >
                    {item.title}
                </Link>
                {/* Use description field from Supabase, added line-clamp for consistency */}
                <p className="text-muted-foreground text-sm mt-1 line-clamp-3"> 
                    {item.description}
                </p>
            </div>
        </div>
    </Container>
);

export default Blogs;