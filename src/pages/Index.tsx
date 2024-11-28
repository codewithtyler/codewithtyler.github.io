import { BlogCard } from "@/components/BlogCard";
import { Sidebar } from "@/components/Sidebar";

const SAMPLE_POSTS = [
  {
    title: "Weekend Wireless Wizardry",
    excerpt: "This is how my weekends usually go... Watch Video Disclosures Ubiquiti devices were provided for testing.",
    date: "Nov 22, 2024",
    image: "/placeholder.svg",
    slug: "weekend-wireless-wizardry",
    tags: ["homelab", "networking"],
  },
  {
    title: "Building the Ultimate Wireless Bridge",
    excerpt: "I transformed my wireless bridge into a faster, more reliable network setup.",
    date: "Nov 18, 2024",
    image: "/placeholder.svg",
    slug: "ultimate-wireless-bridge",
    tags: ["homelab", "networking"],
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <input
              type="search"
              placeholder="Search posts..."
              className="w-full px-6 py-3 bg-blog-card rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-blog-accent text-lg"
            />
          </div>

          <div className="grid gap-6">
            {SAMPLE_POSTS.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;