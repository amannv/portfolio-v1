import Heading from "@/components/Heading";
import ScaleX from "@/components/ScaleX";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

const projectsList: ProjectCardProps[] = [
  {
    title: "CanvasFlow",
    description:
      "CanvasFlow is a collaborative whiteboard that enables teams to draw, brainstorm, and collaborate in real time.",
    image: "/canvasflow.jpg",
    tags: ["React.js", "TypeScript", "Monorepo", "Express.js", "WebSockets"],
    githubLink: "https://github.com/amannv/CanvasFlow",
    isLive: false,
  },
  {
    title: "Textly",
    description:
      "Textly is a free AI-powered writing assistant that refines text, improves grammar, and enhances written communication.",
    image: "/textly.jpg",
    tags: ["Next.js", "TypeScript", "Groq API", "Node.js"],
    liveLink: "https://textly-aman.vercel.app",
    githubLink: "https://github.com/amannv/Textly",
    isLive: true,
  },
  {
    title: "Room Chat-App",
    description:
      "Simple Room Chat is a real-time chat application that lets users create rooms, invite friends, and communicate instantly.",
    image: "/chat-app.jpg",
    tags: ["React.js", "WebSockets", "Typescript", "Node.js"],
    liveLink: "https://chat-application-brown-one.vercel.app",
    githubLink: "https://github.com/amannv/Chat-Application",
    isLive: true,
  },
  {
    title: "GoalKeeper",
    description:
      "GoalKeeper is a full-stack goal management app that helps users create, track, and organize their daily goals.",
    image: "/goalkeeper.jpg",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
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
              "py-8 px-16",
              idx % 2 === 0 ? "md:pl-16 md:pr-8" : "md:pr-16 md:pl-8",
              idx === total - 1 ? "border-b-0" : "border-b",
              idx < 2 ? "md:border-b" : "md:border-b-0",
              idx % 2 === 0 ? "md:border-r" : "md:border-r-0",
            )}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b pointer-events-none z-0" />
    </div>
  );
}
