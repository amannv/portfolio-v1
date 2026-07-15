import React from "react";
import { cn } from "@/lib/utils";

export default function Heading({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("border-b flex justify-between items-center pr-4", className)}>
      <h1 className="p-2 px-4 text-2xl font-bold tracking-tight">{title}</h1>
      {children}
    </div>
  );
}

