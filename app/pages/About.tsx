import Heading from "@/components/Heading";
import ScaleX from "@/components/ScaleX";

export default function About() {
  return (
    <>
      <Heading title="About" />
      <p className="p-4 pt-4 pb-2 text-sm">
        • Hi, I’m Aman — A 3rd-year student and
        <span className="bg-primary text-primary-foreground mx-2 rounded-sm">
          {" "}
          full-stack engineer{" "}
        </span>
        passionate about building SaaS products and practical tools that people
        actually use.
      </p>
      <p className="p-4 pb-2 text-sm">
        • What I do — Currently deep-diving into
        <span className="bg-primary text-primary-foreground mx-2 rounded-sm">
          {" "}
          Next.js{" "}
        </span>
        to architect robust, scalable web apps and turn complex workflows into
        seamless, automated experience.
      </p>
      <p className="p-4 text-sm">
        • Offline — When away from the keyboard, I unwind with into
        <span className="bg-primary text-primary-foreground mx-2 rounded-sm">
          {" "}
          story-mode games,{" "}
        </span>
        movies, and series, enjoying great narratives and world-building.
      </p>
      <ScaleX />
    </>
  );
}
