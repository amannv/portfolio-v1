import PageContainer from "@/components/PageContainer";
import { Metadata } from "next";
import { getAllBlogs } from "@/lib/mdx";
import BlogCard, { BlogFrontmatter } from "@/components/BlogCard";
import PageNavbar from "@/components/PageNavbar";
import Connect from "../sections/Connect";
import Quote from "../sections/Quote";

export const metadata: Metadata = {
  title: "Blogs - Aman Verma",
  description: "Writings and learnings which i got through project building.",
};

export default async function Page() {
  const allBlogs = await getAllBlogs();

  return (
    <PageContainer>
      <PageNavbar title="Blogs" backHref="/" />
      <div className="mx-auto w-full max-w-screen">
        <div>
          {allBlogs.map((blog, idx) => (
            <BlogCard key={idx} blog={blog as BlogFrontmatter} />
          ))}
          {allBlogs.length === 0 && (
            <p className="text-muted-foreground mt-8">No blogs found.</p>
          )}
        </div>
      </div>
      <Quote />
      <Connect />
    </PageContainer>
  );
}
