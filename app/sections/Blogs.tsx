import Heading from "@/components/Heading";
import BlogCard, { BlogFrontmatter } from "@/components/BlogCard";
import { getAllBlogs } from "@/lib/mdx";

export default async function Blogs() {
  const allBlogs = await getAllBlogs();
  return (
    <>
      <Heading title="Recent Blogs" />
        {allBlogs.map((blog, idx) => (
          <BlogCard key={idx} blog={blog as BlogFrontmatter} isLast={idx === allBlogs.length - 1} />
        ))}
    </>
  );
}
