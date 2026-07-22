"use client";

import ScaleX from "@/components/ScaleX";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-background sticky top-0 z-50 w-full max-w-3xl border-x">
      <div
        className={cn(
          "flex h-14 w-full items-center justify-end px-4",
          className,
        )}
      >
        <div className="flex items-center justify-center">
          {/* <div className="p-4 text-sm font-bold tracking-tight">Projects</div>
          <div className="p-4 text-sm font-bold tracking-tight">Blogs</div>
          <div className="p-4 text-sm font-bold tracking-tight">Resume</div> */}
          <div className="flex items-center justify-center p-4">
            {mounted && (
              <AnimatedThemeToggler
                theme={resolvedTheme as "light" | "dark"}
                onThemeChange={setTheme}
              />
            )}
          </div>
        </div>
      </div>
      <ScaleX />
    </div>
  );
}
