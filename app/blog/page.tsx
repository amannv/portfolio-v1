import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Aman Verma",
  description: "Writings and learnings which i got through project building.",
};

export default function Page() {
  return (
    <Container className="px-6 py-12 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="font-heading mb-6 text-4xl">Blogs</h1>
        <p className="text-muted-foreground">List of blogs coming soon.</p>
      </div>
    </Container>
  );
}
