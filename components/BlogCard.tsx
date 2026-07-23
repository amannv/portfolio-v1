import Link from "next/link";
import { format } from "date-fns";

export interface BlogFrontmatter {
  title: string;
  slug: string;
  publishedAt: string;
  description: string;
  readingTime: string;
  tags?: string[];
}

interface BlogCardProps {
  blog: BlogFrontmatter;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group hover:bg-accent/30 block border-b py-4 pt-3 px-12 transition-colors"
    >
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-xl group-hover:underline">
          {blog.title}
        </h2>
        <div className="text-muted-foreground flex items-center gap-2 text-xs">
          {blog.publishedAt && (
            <time dateTime={blog.publishedAt}>
              {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
            </time>
          )}
          {blog.publishedAt && blog.readingTime && <span>•</span>}
          {blog.readingTime && <span>{blog.readingTime}</span>}
        </div>

        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-2">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-secondary text-secondary-foreground rounded-xl px-3 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
            {blog.tags.length > 3 && (
              <span className="bg-secondary text-secondary-foreground rounded-xl px-3 py-1 text-xs">
                +{blog.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
