import Scales from "./ui/scales";
import { cn } from "@/lib/utils";

export default function ScaleY({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-background relative min-h-full w-8 z-10 overflow-hidden",
        className,
      )}
    >
      <Scales size={6} orientation="diagonal" />
    </div>
  );
}
