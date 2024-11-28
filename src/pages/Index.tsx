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

// Generate sample posts with realistic content
const SAMPLE_POSTS = [
  {
    title: "Setting Up Your First Homelab: A Beginner's Guide",
    excerpt: "Learn how to build your first homelab from scratch, including hardware recommendations and basic networking setup.",
    date: "Feb 25, 2024",
    lastEdited: "2024-02-25",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    slug: "first-homelab-guide",
    tags: ["homelab", "networking", "hardware"],
  },
  {
    title: "Docker Container Management Best Practices",
    excerpt: "Discover the essential practices for managing Docker containers in production, including security and performance tips.",
    date: "Feb 23, 2024",
    lastEdited: "2024-02-24",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    slug: "docker-container-management",
    tags: ["docker", "kubernetes", "devops"],
  },
  {
    title: "Linux Server Security Essentials",
    excerpt: "A comprehensive guide to securing your Linux servers against common threats and vulnerabilities.",
    date: "Feb 20, 2024",
    lastEdited: "2024-02-23",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    slug: "linux-security-essentials",
    tags: ["linux", "security", "networking"],
  },
  {
    title: "Kubernetes Cluster Setup on Raspberry Pi",
    excerpt: "Step-by-step tutorial on building a Kubernetes cluster using Raspberry Pi hardware for home testing.",
    date: "Feb 18, 2024",
    lastEdited: "2024-02-22",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    slug: "kubernetes-raspberry-pi",
    tags: ["kubernetes", "homelab", "raspberry-pi"],
  },
  {
    title: "Automated Backups with Docker",
    excerpt: "Learn how to implement automated backup solutions for your Docker containers and volumes.",
    date: "Feb 15, 2024",
    lastEdited: "2024-02-21",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    slug: "docker-automated-backups",
    tags: ["docker", "automation", "devops"],
  },
  {
    title: "Network Monitoring Tools for Homelab",
    excerpt: "A comparison of different network monitoring tools suitable for homelab environments.",
    date: "Feb 12, 2024",
    lastEdited: "2024-02-20",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    slug: "homelab-monitoring-tools",
    tags: ["homelab", "networking", "monitoring"],
  },
  {
    title: "Self-Hosting with Docker Compose",
    excerpt: "Guide to self-hosting popular services using Docker Compose, including media servers and automation tools.",
    date: "Feb 10, 2024",
    lastEdited: "2024-02-19",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    slug: "self-hosting-docker",
    tags: ["docker", "self-hosting", "homelab"],
  },
  {
    title: "Linux Performance Tuning Tips",
    excerpt: "Advanced techniques for optimizing Linux system performance in your homelab environment.",
    date: "Feb 8, 2024",
    lastEdited: "2024-02-18",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    slug: "linux-performance-tuning",
    tags: ["linux", "performance", "homelab"],
  },
  {
    title: "Getting Started with Kubernetes Operators",
    excerpt: "Understanding and implementing Kubernetes Operators for automated application management.",
    date: "Feb 5, 2024",
    lastEdited: "2024-02-17",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    slug: "kubernetes-operators-guide",
    tags: ["kubernetes", "automation", "devops"],
  },
];

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