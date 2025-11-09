import React from 'react'
import Wrapper from "../global/wrapper"
import Container from "../global/container"
// Removed unused BLOGS import
import Image from "next/image"
import Link from "next/link"

const BlogSection = ({blogs}:{blogs:any}) => {
    return (
        <div className="w-full pb-16 lg:pb-24">
            <Wrapper>
                <Container>
                    <div className="flex flex-col">
                        <h2 className="text-2xl lg:text-3xl font-semibold">
                            Latest Post:
                        </h2>
                    </div>
                </Container>

                <div className="w-full mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {blogs.map((blog:any, index:any) => (
                            // Removed <Container> wrapper around the card as it adds unnecessary padding inside the grid item
                            <div key={index}> 
                                <Link
                                    href={`/blogs/${blog.id}`}
                                    className="flex flex-col w-full group"
                                >
                                    {/* FIX 1: Set a fixed, consistent height for the image container */}
                                    <div className="relative w-full h-60 md:h-52 lg:h-64 bg-foreground/5 border border-border/20 rounded-lg lg:rounded-xl overflow-hidden">
                                        <Image
                                            src={blog.image_url||"/images/blog2.svg"}
                                            alt={blog.title}
                                            // FIX 2: Use the `fill` prop to make the image take up the container size
                                            fill={true} 
                                            // Removed width and height props when using fill
                                            // FIX 3: Use object-cover and style for filling/cropping
                                            style={{ objectFit: 'cover' }} 
                                            className="rounded-lg lg:rounded-xl transition-transform duration-300 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                    <div className="flex flex-col mt-4">
                                        <span className="inline-block px-3 py-1 rounded-sm bg-neutral-800/80 text-xs text-foreground/80 w-max">
                                            {blog.category}
                                        </span>
                                        <h3 className="text-lg lg:text-xl font-semibold mt-2">
                                            {blog.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                                            {blog.description}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default BlogSection