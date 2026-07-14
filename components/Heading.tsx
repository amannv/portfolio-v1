import { cn } from "@/lib/utils";

export default function Heading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <>
      <div className={cn("border-b", className)}>
        <h1 className="text-2xl font-bold tracking-tight p-2 px-4">{title}</h1>
      </div>
    </>
  );
}
