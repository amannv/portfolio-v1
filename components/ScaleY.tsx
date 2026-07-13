import Scales from "./ui/scales";
import { cn } from "@/lib/utils";

export default function ScaleY({ className }: {
    className?: string;
}) {
  return (
    <div className={cn("relative min-h-screen w-4 border-x", className)}>
      <Scales size={8} orientation="diagonal" />
    </div>
  );
}
