import ScaleY from "./ScaleY";
import ScaleX from "./ScaleX";
import { cn } from "@/lib/utils";
import { Quote } from "./Quote";
import Footer from "./Footer";

export default function Container({ children, className }: { children: React.ReactNode, className?: string; }) {
  return (
    <div className="mx-auto w-full max-w-4xl relative flex flex-col min-h-screen">
      <ScaleX className="h-24 z-20 border-b" />
      <div className="relative w-full flex-1 border-x bg-background">
        <ScaleY className="absolute left-0 top-0 bottom-0 h-full w-8 border-r z-10" />
        <ScaleY className="absolute right-0 top-0 bottom-0 h-full w-8 border-l z-10" />
        <div className={cn("w-full relative z-0", className)}>
          {children}
        </div>
      </div>
      <ScaleX className="h-24 z-20 border-t" />
    </div>
  );
}
