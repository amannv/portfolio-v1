import ScaleX from "@/components/ScaleX";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn(
          "bg-background flex h-14 w-full max-w-4xl justify-between border-y backdrop-blur-2xl",
          className,
        )}
      >
        <div>
          <h1 className="text-primary border-x p-4 font-bold tracking-tight">
            whoami$
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="text-primary border-x p-4 font-bold tracking-tight">
            Projects
          </div>
          <div className="text-primary border-r p-4 font-bold tracking-tight">
            Blogs
          </div>
          <div className="text-primary border-r p-4 font-bold tracking-tight">
            Resume
          </div>
          <div className="text-primary border-r p-4 font-bold tracking-tight">
            <AnimatedThemeToggler />
          </div>
        </div>
      </div>
      <ScaleX className="border-t-0" />
    </>
  );
}
