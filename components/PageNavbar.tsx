"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { useEffect, useState } from "react";

interface BlogNavbarProps {
  title?: string;
  backHref?: string;
}

export default function PageNavbar({
  title = "Blogs",
  backHref = "/",
}: BlogNavbarProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full bg-background z-30">
      <div className="mx-auto flex max-w-screen w-full items-center justify-between px-6 md:px-12 py-2 border-b">
        <div className="relative z-10 flex items-center gap-3 justify-center">
          <Link
            href={backHref}
            className="bg-secondary hover:bg-muted flex h-8 w-8 items-center justify-center rounded-2xl border transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </Link>

          <h1 className="font-heading relative z-10 py-2 text-2xl">{title}</h1>
        </div>

        {mounted ? (
          <AnimatedThemeToggler
            theme={resolvedTheme === "dark" ? "dark" : "light"}
            onThemeChange={(newTheme) => setTheme(newTheme)}
            variant="square"
            className="bg-secondary hover:bg-muted flex h-8 w-8 cursor-pointer items-center justify-center rounded-2xl border transition-colors [&>svg]:h-3.5 [&>svg]:w-3.5"
          />
        ) : (
          <div className="h-8 w-8" />
        )}
      </div>
    </div>
  );
}
