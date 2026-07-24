import React from "react";
import { cn } from "@/lib/utils";

export default function Heading({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative flex justify-between items-center px-12", className)}>
      <div className="absolute top-0 left-1/2 w-screen -translate-x-1/2 border-b pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/2 w-screen -translate-x-1/2 border-b pointer-events-none z-0" />
      <h1 className="py-2 text-2xl font-heading relative z-10">{title}</h1>
      {children}
    </div>
  );
}

