import { cn } from "@/lib/utils";
import ScaleX from "@/components/ScaleX";

export default function Header({ className }: { className?: string }) {
  return (
    <>
      <div className="w-full h-50 overflow-hidden p-2">
        <img src="/header.gif" className="inset-0 h-full w-full object-cover rounded-sm" />
      </div>
      <ScaleX />
    </>
  );
}