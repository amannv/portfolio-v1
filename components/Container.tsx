export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-3xl border-x">
      <div className="w-full px-4">{children}</div>
    </div>
  );
}
