import { BlogCard } from "@/components/BlogCard";
import { Sidebar } from "@/components/Sidebar";
import { RightSidebar } from "@/components/RightSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// Generate 26 sample posts
const SAMPLE_POSTS = Array.from({ length: 26 }, (_, i) => ({
  title: `Blog Post ${i + 1}`,
  excerpt: i % 2 === 0 
    ? "This is how my weekends usually go... Watch Video Disclosures Ubiquiti devices were provided for testing."
    : "I transformed my wireless bridge into a faster, more reliable network setup.",
  date: `Nov ${(i % 28) + 1}, 2024`,
  lastEdited: `2024-02-${(25 - i)}`, // Simulating last edited dates
  image: "/placeholder.svg",
  slug: `blog-post-${i + 1}`,
  tags: ["homelab", "networking"],
}));

const POSTS_PER_PAGE = 8;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");
  
  const filteredPosts = tag 
    ? SAMPLE_POSTS.filter(post => post.tags.includes(tag))
    : SAMPLE_POSTS;

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              {tag && (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbPage>Tag: {tag}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid gap-6 mb-8">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(p => Math.max(1, p - 1));
                  }}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(page);
                    }}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(p => Math.min(totalPages, p + 1));
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      <RightSidebar recentPosts={SAMPLE_POSTS.slice(0, 4)} />
    </div>
  );
};

export default Index;