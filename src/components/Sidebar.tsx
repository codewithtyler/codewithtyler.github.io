import { Home, Info, ShoppingBag, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen p-6 border-r border-gray-800">
      <div className="flex flex-col items-center mb-8">
        <img
          src="/placeholder.svg"
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h1 className="text-xl font-bold mb-2">Tech Blog</h1>
        <p className="text-sm text-gray-400 text-center">
          Software Engineer | Tech Content Creator | Full Nerd
        </p>
      </div>

      <nav className="space-y-4">
        <Link to="/" className="sidebar-link">
          <Home size={20} />
          HOME
        </Link>
        <Link to="/about" className="sidebar-link">
          <Info size={20} />
          ABOUT
        </Link>
        <Link to="/merch" className="sidebar-link">
          <ShoppingBag size={20} />
          MERCH
        </Link>
        <Link to="/sponsor" className="sidebar-link">
          <Heart size={20} />
          SPONSOR
        </Link>
      </nav>

      <div className="mt-8">
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