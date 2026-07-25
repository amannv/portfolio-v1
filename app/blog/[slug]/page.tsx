import PageContainer from "@/components/PageContainer";
import { getBlog } from "@/lib/mdx";
import { redirect } from "next/navigation";
import PageNavbar from "@/components/PageNavbar";
import { format } from "date-fns";

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

  return (
    <PageContainer>
      <PageNavbar backHref="/blog" />
      <div className="mx-auto w-full max-w-full px-6 md:px-12">
        <header className="mt-4 mb-8 flex flex-col items-start">
          <h1 className="font-heading mb-4 text-3xl tracking-tight md:text-4xl">
            {frontmatter.title}
          </h1>

          <div className="text-muted-foreground mb-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            {frontmatter.publishedAt && (
              <time
                dateTime={frontmatter.publishedAt}
                className="flex items-center gap-1.5"
              >
                {format(new Date(frontmatter.publishedAt), "MMMM dd, yyyy")}
              </time>
            )}
            {frontmatter.publishedAt && frontmatter.readingTime && (
              <span>&middot;</span>
            )}
            {frontmatter.readingTime && (
              <span className="flex items-center gap-1.5">
                {frontmatter.readingTime}
              </span>
            )}
          </div>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary/50 text-secondary-foreground border-border/50 rounded-full border px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <article className="prose prose-neutral dark:prose-invert prose-headings:font-heading prose-headings:font-normal prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:text-primary/80 prose-img:rounded-xl prose-img:border prose-img:shadow-sm prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl w-full max-w-none [&>h1:first-child]:hidden">
          {content}
        </article>
      </div>
    </PageContainer>
  );
}
