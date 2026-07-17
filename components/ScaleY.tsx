import Scales from "./ui/scales";
import { cn } from "@/lib/utils";

export default function ScaleY({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-background relative min-h-screen w-4 border-x z-10",
        className,
      )}
    >
      <Scales size={8} orientation="diagonal" />
    </div>
  );
}
