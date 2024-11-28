import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

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
            <span
              key={tag}
              className="px-2 py-1 bg-gray-800 rounded-full text-sm text-gray-400 hover:bg-gray-700 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};