import { cn } from "@/lib/utils";
import ScaleX from "./ScaleX";
import ScaleY from "./ScaleY";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-4xl flex-col">
      <ScaleX className="z-20 h-24 border-b" />
      <div className="bg-background relative w-full flex-1 border-x">
        <ScaleY className="absolute top-0 bottom-0 left-0 z-10 h-full w-8 border-r" />
        <ScaleY className="absolute top-0 right-0 bottom-0 z-10 h-full w-8 border-l" />
        <div className={cn("relative z-0 w-full", className)}>{children}</div>
      </div>
      <ScaleX className="z-20 h-24 border-t" />
    </div>
  );
}
