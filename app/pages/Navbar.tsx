import ScaleX from "@/components/ScaleX";
import ScaleY from "@/components/ScaleY";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  return (
    <div className="bg-background sticky top-0 z-50 w-full max-w-4xl">
      <div className="grid w-full grid-cols-[16px_minmax(0,1fr)_16px]">
        <ScaleY className="h-14 min-h-0" />
        <div
          className={cn(
            "flex h-14 w-full items-center justify-between",
            className,
          )}
        >
          <div>
            <h1 className="p-4 text-sm font-bold tracking-tight">$whoami</h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="p-4 text-sm font-bold tracking-tight">Projects</div>
            <div className="p-4 text-sm font-bold tracking-tight">Blogs</div>
            <div className="p-4 text-sm font-bold tracking-tight">Resume</div>
            <div className="flex items-center justify-center p-4">
              <AnimatedThemeToggler />
            </div>
          </div>
        </div>
        <ScaleY className="h-14 min-h-0" />
      </div>
      <ScaleX />
    </div>
  );
}
