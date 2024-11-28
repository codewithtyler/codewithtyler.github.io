export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  lastEdited: string;
  image: string;
  slug: string;
  tags: string[];
}

export const SAMPLE_POSTS: BlogPost[] = [
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
