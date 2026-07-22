import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export const getBlog = async (slug: string) => {
  try {
    const blogContent = await fs.readFile(
      path.join(process.cwd(), `content/blogs/${slug}.mdx`),
      "utf8",
    );

    const { content, frontmatter } = await compileMDX<{ title: string }>({
      source: blogContent,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (e) {
    return null;
  }
};
