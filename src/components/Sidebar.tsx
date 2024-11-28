import { Home, Info, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen p-6 border-r border-gray-800">
      <div className="flex flex-col items-start mb-8">
        <img
          src="/lovable-uploads/fe0e584b-ec4d-4aa8-b85b-2a8ad7d61c0d.png"
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
        <h1 className="text-xl font-bold mb-2">Tyler Hughes</h1>
        <p className="text-sm text-gray-400 text-left">
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
        <Link to="/sponsor" className="sidebar-link">
          <Heart size={20} />
          SPONSOR
        </Link>
      </nav>
    </div>
  );
};