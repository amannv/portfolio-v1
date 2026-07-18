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
    <div className={cn("relative flex justify-between items-center", className)}>
      <div className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b pointer-events-none" />
      <h1 className="p-2 px-4 text-2xl font-bold tracking-tight">{title}</h1>
      {children}
    </div>
  );
}

