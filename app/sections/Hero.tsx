"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Repeat } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";

const words = [
  "Full-Stack Engineer",
  "Backend-Focused Developer",
  "Building SaaS Products",
  "First-Principles Thinker",
];

export default function Hero() {
  const [isAnime, setIsAnime] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    setMounted(true);

    const update = () => {
      const now = new Date();
      setDateTime(
        now.toLocaleDateString("en-IN", {
          timeZone: "Asia/Kolkata",
          day: "2-digit",
          month: "short",
          year: "numeric",
        }) +
          "  ·  " +
          now.toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }),
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative flex flex-col-reverse items-center gap-6 px-8 py-6 md:grid md:grid-cols-[1fr_auto] md:items-start md:gap-8 md:px-13">
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
        <div className="relative z-10 flex w-full flex-col justify-between gap-1 py-2 md:text-left">
          <div>
            <h1 className="font-heading  text-3xl">Aman Verma, 20</h1>
            <div className="text-muted-foreground pb-3 text-sm">
              <FlipWords
                className="text-muted-foreground dark:text-muted-foreground px-0"
                words={words}
              />
            </div>
          </div>
          <div className="text-muted-foreground flex flex-col gap-3 text-pretty">
            <p className="text-sm">
              Hi, I&apos;m Aman — A 3rd-year student and full-stack engineer
              passionate about building SaaS products and practical tools that
              people actually use.
            </p>
            <p className="text-sm">
              What I do — Currently deep-diving into Next.js to architect
              robust, scalable web apps and turn complex workflows into
              seamless, automated experience.
            </p>
            <p className="text-sm">
              Offline — When away from the keyboard, I unwind with story-mode
              games, movies, and series, enjoying great narratives and
              world-building.
            </p>
          </div>
        </div>

        <div className="relative mx-auto shrink-0 md:mr-3 md:mx-0">
          <div className="absolute -right-5 -top-1 z-50 md:-right-5 md:top-3">
            {mounted && (
              <AnimatedThemeToggler
                theme={resolvedTheme === "dark" ? "dark" : "light"}
                onThemeChange={(newTheme) => setTheme(newTheme)}
                variant="square"
                className="bg-card hover:bg-background flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border transition-colors [&>svg]:h-4 [&>svg]:w-4"
              />
            )}
          </div>
          <div className="group bg-card relative mt-4 rounded-2xl border p-3 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] md:mt-8">
            <img
              src={isAnime ? "/avatar.jpeg" : "/anime.jpeg"}
              className="h-52 w-52 rounded-xl object-cover transition-all duration-300"
            />
            <p className="text-muted-foreground mx-auto mt-2 w-full text-center text-[11px] font-medium tracking-tight">
              {dateTime ? (
                <>
                  <span>India</span>
                  <span> · </span>
                  <span>{dateTime}</span>
                </>
              ) : (
                "—"
              )}
            </p>
            <button
              onClick={() => setIsAnime(!isAnime)}
              className="bg-card hover:bg-background absolute bottom-10 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border shadow-sm transition-colors md:bottom-10 md:right-4"
              title="Toggle Anime Version"
            >
              <Repeat size={13} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
