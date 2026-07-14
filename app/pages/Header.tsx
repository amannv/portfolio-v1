import ScaleX from "@/components/ScaleX";

export default function Header({ className }: { className?: string }) {
  return (
    <>
      <div className="h-50 w-full overflow-hidden p-2">
        <img src="/header-5.gif" className="inset-0 h-full w-full rounded-xs" />
      </div>
      <ScaleX />
    </>
  );
}
