import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  tags: string[];
}

export const BlogCard = ({
  title,
  excerpt,
  date,
  image,
  slug,
  tags,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="block">
      <article className="blog-card">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="space-y-2">
          <div className="flex gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-400">{excerpt}</p>
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar size={16} />
            <time>{date}</time>
          </div>
        </div>
      </article>
    </Link>
  );
};