import Heading from "@/components/Heading";
import ScaleX from "@/components/ScaleX";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import HeadingButton from "@/components/HeadingButton";

const projectsList: ProjectCardProps[] = [
  {
    title: "CanvasFlow",
    description:
      "CanvasFlow is a collaborative whiteboard that enables teams to draw, brainstorm, and collaborate in real time.",
    image: "/canvasflow.jpg",
    tags: ["React.JS", "TypeScript", "TurboRepo", "Express.JS", "WebSockets"],
    githubLink: "https://github.com/amannv/CanvasFlow",
    isLive: false,
    isBuilding: true,
  },
  {
    title: "Textly",
    description:
      "Textly is an AI writing assistant that refines text, improves grammar, and enhances written communication.",
    image: "/textly.jpg",
    tags: ["Next.JS", "TypeScript", "Groq API", "Node.JS", "Tailwind CSS"],
    liveLink: "https://textly-aman.vercel.app",
    githubLink: "https://github.com/amannv/Textly",
    isLive: true,
  },
  {
    title: "Room Chat-App",
    description:
      "Simple Room Chat is a real-time chat app for creating rooms, inviting friends, and messaging instantly.",
    image: "/chat-app.jpg",
    tags: ["React.JS", "WebSockets", "Typescript", "Node.JS"],
    liveLink: "https://chat-application-brown-one.vercel.app",
    githubLink: "https://github.com/amannv/Chat-Application",
    isLive: true,
  },
  {
    title: "GoalKeeper",
    description:
      "GoalKeeper is a full-stack goal management app that helps users create, track, and organize their daily goals.",
    image: "/goalkeeper.jpg",
    tags: ["React.JS", "Node.JS", "Express.JS", "MongoDB", "Tailwind CSS"],
    liveLink: "https://goal-keeper-eight.vercel.app",
    githubLink: "https://github.com/amannv/GoalKeeper",
    isLive: true,
  },
];

export default function Projects() {
  const total = projectsList.length;
  return (
    <div className="relative">
      <Heading title="Projects" />
      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        {projectsList.map((project, idx) => (
          <div
            key={idx}
            className={cn(
              "px-16 py-8",
              idx % 2 === 0 ? "md:pr-8 md:pl-16" : "md:pr-16 md:pl-8",
              idx === total - 1 ? "border-b-0" : "border-b",
              idx < 2 ? "md:border-b" : "md:border-b-0",
              idx % 2 === 0 ? "md:border-r" : "md:border-r-0",
            )}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <HeadingButton title={"View All Projects"} href={"/projects"} />
    </div>
  );
}
