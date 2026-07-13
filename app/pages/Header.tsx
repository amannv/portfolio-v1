import { cn } from "@/lib/utils";
import ScaleX from "@/components/ScaleX";

export default function Header({ className }: { className?: string }) {
  return (
    <>
      <div className="w-full overflow-hidden">
        <img src="/header.png" className="inset-0 h-full w-full object-cover brightness-95" />
      </div>
      <ScaleX />
    </>
  );
}