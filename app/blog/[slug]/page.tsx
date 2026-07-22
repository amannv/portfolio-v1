import Container from "@/components/Container";
import { getBlog } from "@/lib/mdx";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const blogContent = await getBlog(slug);

  if (!blogContent) {
    redirect("/blog");
  }

  const { content, frontmatter } = blogContent;

  console.log(frontmatter);
  console.log(content);

  return (
    <Container className="px-6 py-12 md:py-20">
      <article className="prose prose-neutral dark:prose-invert prose-headings:font-heading prose-headings:font-normal mx-auto w-full max-w-3xl">
        {content}
      </article>
    </Container>
  );
}
