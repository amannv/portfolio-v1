import ScaleY from "./ScaleY";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-4xl grid-cols-[16px_minmax(0,1fr)_16px]">
      <ScaleY />

      <div className="w-full">{children}</div>

      <ScaleY />
    </div>
  );
}
