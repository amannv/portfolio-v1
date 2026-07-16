import React from "react";
import { Button } from "./ui/button";
import { MagneticButton } from "./ui/magnetic-button";

export default function StackBtn({
  icon,
  text,
  url,
}: {
  icon?: React.ReactNode;
  text: string;
  url?: string;
}) {
  return (
    <div>
      <a href={url} className="inline-block">
        <MagneticButton>
          <Button
            variant={"outline"}
            size={"sm"}
            className="inline-flex h-7 items-center justify-center gap-1.5 text-xs leading-none"
          >
            <span className="inline-flex items-center justify-center leading-none">
              {icon}
            </span>
            <span className="mt-0.5 leading-none">{text}</span>
          </Button>
        </MagneticButton>
      </a>
    </div>
  );
}
