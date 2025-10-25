import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import Link from "next/link";
import Image from "next/image";

type Blog = {
    title: string;
    desc: string;
    image: string;
    category: string;
    author: string;
    authorRole: string;
    authorCompany: string;
    authorCompanyUrl: string;
    authorImage: string;
};

// Placeholder BLOGS array - replace with actual content for PAC Consultants
const BLOGS: Blog[] = [
    {
        title: "The Future of Business Funding",
        desc: "Explore emerging trends and innovative strategies in securing capital for your enterprise.",
        image: "/images/blog1.svg", // Placeholder image
        category: "Funding",
        author: "Philip Crawford",
        authorRole: "CEO",
        authorCompany: "PAC Consulting",
        authorCompanyUrl: "#",
        authorImage: "/images/avatar-1.jpg", // Placeholder image
    },
    {
        title: "Mastering Mergers & Acquisitions",
        desc: "A comprehensive guide to navigating the complexities of business sales and acquisitions.",
        image: "/images/blog2.svg", // Placeholder image
        category: "M&A",
        author: "Jane Smith",
        authorRole: "Lead Advisor",
        authorCompany: "PAC Consulting",
        authorCompanyUrl: "#",
        authorImage: "/images/avatar-2.jpg", // Placeholder image
    },
    {
        title: "Building Strong Business Credit",
        desc: "Essential steps and strategies to establish and maintain a robust credit profile for your company.",
        image: "/images/blog3.svg", // Placeholder image
        category: "Credit",
        author: "Robert Johnson",
        authorRole: "Financial Expert",
        authorCompany: "PAC Consulting",
        authorCompanyUrl: "#",
        authorImage: "/images/avatar-3.jpg", // Placeholder image
    },
];

const Blogs = () => {
    return (
        <div className="flex flex-col items-center text-white justify-center relative w-full pb-16 lg:pb-24">
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
                        {BLOGS.slice(0, 3).map((item, index) => (
                            <Item key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};


const Item = ({ item, index }: { item: Blog, index: number }) => (
    <Container>
        <div className="flex flex-col w-full">
            <div className="relative w-full bg-foreground/5 border border-border/20 rounded-lg lg:rounded-xl overflow-hidden">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={1024}
                    height={1024}
                    className="object-contain size-full rounded-lg lg:rounded-xl"
                />
            </div>
            <div className="flex flex-col mt-4">
                <span className="inline-block px-3 py-1 rounded-sm bg-neutral-800/80 text-xs text-foreground/80 w-max text-white">
                    {item.category}
                </span>
                <Link
                    href={`/blogs/${encodeURIComponent(item.title.toLowerCase().replace(/\s+/g, "-"))}`}
                    className="text-lg lg:text-xl font-semibold mt-2"
                >
                    {item.title}
                </Link>
                <p className="text-muted-foreground text-sm mt-1">
                    {item.desc}
                </p>
            </div>
        </div>
    </Container>
);

export default Blogs;
