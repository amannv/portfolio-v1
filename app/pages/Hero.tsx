import ScaleX from "@/components/ScaleX";
import { FlipWords } from "@/components/ui/flip-words";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { Mail } from "lucide-react";

const words = [
  "Full-Stack Engineer",
  "I love doing backend",
  "wanna be an Indie Hacker",
  "I think from first principles",
];


export default function Hero({ className }: { className?: string }) {
  return (
    <>
      <div className="flex items-center gap-5 px-5 py-5">
        <div className="shrink-0">
          <img
            src="/avatar.jpeg"
            className="h-20 w-20 rounded-full border-2 object-cover"
            alt="Aman Verma"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold tracking-tight">Aman Verma</h1>
          <div className="text-muted-foreground text-sm">
            <FlipWords
              className="text-muted-foreground dark:text-muted-foreground px-0"
              words={words}
            />
          </div>
        </div>
      </div>
      <ScaleX />
    </>
  );
}
