"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Repeat } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import NewContact from "./NewContact";

const words = [
  "Full-Stack Engineer",
  "Backend-Focused Developer",
  "Building SaaS Products",
  "First-Principles Thinker",
];

export default function NewHero() {
  const [isAnime, setIsAnime] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="relative grid grid-cols-[1fr_auto] items-center justify-center px-12 py-5">
        <div className="absolute top-5 right-12 z-50">
          {mounted && <AnimatedThemeToggler
            theme={resolvedTheme === "dark" ? "dark" : "light"}
            onThemeChange={(newTheme) => setTheme(newTheme)}
            variant="circle"
            className="bg-background hover:bg-muted flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border shadow-sm transition-colors [&>svg]:h-[14px] [&>svg]:w-[14px]"
          />}
        </div>
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
              I'm a 3rd-year Computer Science student and<span className="text-foreground"> full-stack developer </span>
              passionate about building useful software. I enjoy creating SaaS
              products, learning new technologies, and shipping projects that
              make a real impact.
            </p>
            <p className="text-sm">
              Outside of coding, I love story-driven games, movies, and great
              storytelling—things that shape how I approach <span className="text-foreground">product design</span> and
              user experience.
            </p>
            <p className="text-sm">
              Open to internships, freelance opportunities, and collaborations. <a href="/contact" className="text-foreground underline">Let's talk.</a>
            </p>
          </div>
        </div>
        <div className="shrink-0 p-4">
          <div className="group relative">
            <img
              src={isAnime ? "/avatar.jpeg" : "/anime.jpeg" }
              className="h-52 w-52 rounded-2xl object-cover transition-all duration-300"
            />
            <button
              onClick={() => setIsAnime(!isAnime)}
              className="bg-background/80 hover:bg-muted absolute right-2 bottom-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border shadow-sm backdrop-blur-sm transition-colors"
              title="Toggle Anime Version"
            >
              <Repeat size={14} />
            </button>
          </div>
        </div>
      </div>
      <NewContact />
    </>
  );
}
