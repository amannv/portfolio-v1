import { FlipWords } from "@/components/ui/flip-words";
import NewContact from "./NewContact";
import ScaleX from "@/components/ScaleX";

const words = [
  "Full-Stack Engineer",
  "I love doing backend",
  "wanna be an Indie Hacker",
  "I think from first principles",
];

export default function NewHero() {
  return (
    <>
      <div className="relative grid grid-cols-[1fr_auto] items-center justify-center px-12 py-5">
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
        <div className="relative z-10 flex flex-col gap-1">
          <h1 className="font-heading text-3xl">Aman Verma, 20</h1>
          <div className="text-muted-foreground pb-3 text-sm">
            <FlipWords
              className="text-muted-foreground dark:text-muted-foreground px-0"
              words={words}
            />
          </div>
          <div className="text-muted-foreground flex flex-col gap-3 text-wrap">
            <p className="text-sm">
              I'm a 3rd-year Computer Science student and full-stack developer
              passionate about building useful software. I enjoy creating SaaS
              products, learning new technologies, and shipping projects that
              make a real impact.
            </p>
            <p className="text-sm">
              Outside of coding, I love story-driven games, movies, and great
              storytelling—things that shape how I approach product design and
              user experience.
            </p>
            <p className="text-sm">
              Open to internships, freelance opportunities, and exciting
              collaborations.
            </p>
          </div>
        </div>
        <div className="shrink-0 p-4">
          <div className="bg-card rotate-[-2] p-3 pb-6 rounded-2xl border">
            <img
              src="/avatar.jpeg"
              className="h-52 w-52 rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
      <NewContact />
    </>
  );
}
