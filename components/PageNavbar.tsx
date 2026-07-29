"use client";

import Link from "next/link";
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
    <div className="bg-background relative z-30 w-full">
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
      <div className="flex w-full items-center justify-between px-8 py-3 md:px-11">
        <Link
          href={backHref}
          className="text-muted-foreground hover:text-foreground ml-2 text-sm transition-colors"
        >
          ← Back to {title}
        </Link>

        {mounted ? (
          <AnimatedThemeToggler
            theme={resolvedTheme === "dark" ? "dark" : "light"}
            onThemeChange={(newTheme) => setTheme(newTheme)}
            variant="square"
            className="hover:bg-muted m-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full p-0 [&>svg]:h-3.5 [&>svg]:w-3.5"
          />
        ) : (
          <div className="h-8 w-8" />
        )}
      </div>
    </div>
  );
}
