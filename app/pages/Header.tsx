import ScaleX from "@/components/ScaleX";

export default function Header({ className }: { className?: string }) {
  return (
    <>
      <div className="h-50 w-full overflow-hidden">
        <img src="/header-5.gif" className="inset-0 h-full w-full" />
      </div>
      <ScaleX />
    </>
  );
}
