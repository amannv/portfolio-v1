"use client";
import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function ViewsCount() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    async function loadCount() {
      const res = await fetch("/api/visitor");
      const data = await res.json();

      setCount(data.count);
    }
    loadCount();
  }, []);

  return (
    <div className="mt-4 mx-auto flex w-fit items-center gap-2 rounded-full border border-border/40 bg-muted/30 px-3 py-1.5 text-xs font-medium text-muted-foreground/80 backdrop-blur-sm transition-all hover:bg-muted/50 hover:text-foreground">
      <Eye className="h-3.5 w-3.5" />
      <span>{count > 0 ? count.toLocaleString() : "..."} views</span>
    </div>
  );
}
