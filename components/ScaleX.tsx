import Scales from "./ui/scales";
import { cn } from "@/lib/utils";

export default function ScaleX({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-background relative left-1/2 w-screen -translate-x-1/2 h-6 z-20 overflow-hidden",
        className,
      )}
    >
      <Scales size={6} orientation="diagonal" />
    </div>
  );
}
