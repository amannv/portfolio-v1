import Scales from "./ui/scales";
import { cn } from "@/lib/utils";

export default function ScaleY({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-background relative z-10 min-h-full w-8 overflow-hidden",
        className,
      )}
    >
      <Scales size={6} orientation="diagonal" />
    </div>
  );
}
