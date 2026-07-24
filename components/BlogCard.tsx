import Link from "next/link";
import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  isLast?: boolean;
}

export default function BlogCard({ blog, isLast = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className={cn(
        "group hover:bg-accent/30 flex items-center justify-between gap-4 px-12 py-4 transition-colors",
        !isLast && "border-b",
      )}
    >
      <div className="flex flex-col gap-0.5">
        <h2 className="font-heading">{blog.title}</h2>
        <div className="text-muted-foreground flex items-center gap-2 text-xs">
          {blog.publishedAt && (
            <time dateTime={blog.publishedAt}>
              {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
            </time>
          )}
        </div>
      </div>
      <div className="text-muted-foreground flex items-center gap-2 text-xs">
        {blog.readingTime && <span>{blog.readingTime}</span>}
      </div>
    </Link>
  );
}
