import { Home, Info, Heart, Sun, Moon, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import config from "../../config.json";

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "github":
      return <Github size={20} />;
    case "twitter":
      return <Twitter size={20} />;
    case "linkedin":
      return <Linkedin size={20} />;
    default:
      return null;
  }
};

export const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-64 min-h-screen p-6 border-r border-gray-800">
      <div className="h-16" /> {/* Spacer to align with top nav */}
      <div className="flex flex-col items-start mb-8">
        <img
          src={config.profile.avatarPath}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
        <h1 className="text-xl font-bold mb-2">{config.profile.name}</h1>
        <p className="text-sm text-gray-400 text-left">
          {config.profile.bio}
        </p>
      </div>

      <nav className="space-y-4 mb-8">
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

      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-8 h-8"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </Button>

        <span className="text-gray-400 mx-2">•</span>

        <div className="flex gap-2">
          {config.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition-colors"
              aria-label={link.label}
            >
              <SocialIcon platform={link.platform} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};