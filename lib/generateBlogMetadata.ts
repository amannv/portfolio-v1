import type { Metadata } from "next";
import { BlogFrontmatter } from "./mdx";

const siteUrl = "https://portfolio-v1-henna-eta.vercel.app";

export function generateBlogMetadata(
  slug: string,
  frontmatter: BlogFrontmatter,
): Metadata {
  const url = `${siteUrl}/blog/${slug}`;

  return {
    title: frontmatter.title,

    description: frontmatter.description,

    keywords: [
      ...(frontmatter.tags ?? []),
      "Programming",
      "Software Engineering",
      "Developer Blog",
      "Aman Verma",
    ],

    authors: [
      {
        name: "Aman Verma",
      },
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "article",

      url: `${siteUrl}/blog/${slug}`,

      title: frontmatter.title,

      description: frontmatter.description,

      publishedTime: frontmatter.publishedAt,

      tags: frontmatter.tags,

      images: frontmatter.image
        ? [
            {
              url: frontmatter.image,
              width: 1200,
              height: 630,
              alt: frontmatter.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.image ? [frontmatter.image] : [],
    },

    other: {
      readingTime: frontmatter.readingTime,
    },
  };
}
