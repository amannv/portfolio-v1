import Scales from "./ui/scales";
import { cn } from "@/lib/utils";

export default function ScaleX({ className }: {
    className?: string;
}) {
  return (
    <div className={cn("relative h-4 max-w-screen border-y", className)}>
      <Scales size={8} orientation="diagonal" />
    </div>
  );
}
