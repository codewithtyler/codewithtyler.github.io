import { Link } from "react-router-dom";
import { Clock, Search } from "lucide-react";

interface Post {
  title: string;
  slug: string;
  lastEdited: string;
}

interface RightSidebarProps {
  recentPosts: Post[];
}

export const RightSidebar = ({ recentPosts }: RightSidebarProps) => {
  return (
    <div className="w-64 min-h-screen p-6 border-l border-gray-800">
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <input
          type="search"
          placeholder="Search posts..."
          className="w-full pl-10 pr-4 py-2 bg-blog-card rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-blog-accent text-sm"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Recently Edited</h2>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="flex items-start gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <Clock size={16} className="mt-1 flex-shrink-0" />
              <span>{post.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Trending Tags</h2>
        <div className="flex flex-wrap gap-2">
          {["homelab", "kubernetes", "docker", "linux"].map((tag) => (
            <Link
              key={tag}
              to={`/?tag=${tag}`}
              className="px-2 py-1 bg-gray-800 rounded-full text-sm text-gray-400 hover:bg-gray-700 cursor-pointer"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};