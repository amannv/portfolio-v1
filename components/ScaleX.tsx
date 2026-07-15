import Scales from "./ui/scales";
import { cn } from "@/lib/utils";

export default function ScaleX({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative left-1/2 h-4 w-screen -translate-x-1/2 border-y",
        className,
      )}
    >
      <Scales size={8} orientation="diagonal" />
    </div>
  );
}
