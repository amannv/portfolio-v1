import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Heading from "@/components/Heading";

export default function Connect() {
  return (
    <>
      <Heading title="Work With Me" />
      <div className="relative w-full px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto w-full max-w-3xl p-4 text-center md:p-8">
          <h2 className="font-heading mb-1 text-2xl font-medium tracking-wide md:text-3xl">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mb-3 text-sm md:text-base">
            Feel free to reach out through any of these platforms
          </p>

          <div className="flex flex-nowrap items-center justify-center gap-2 sm:flex-wrap sm:gap-3">
            <a
              href="https://x.com/amanntwt"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground bg-transparent px-2.5 shadow-none transition-colors sm:px-4",
              )}
            >
              <FaXTwitter /> <span className="hidden sm:inline">X</span>
            </a>
            <a
              href="https://github.com/amannv"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground bg-transparent px-2.5 shadow-none transition-colors sm:px-4",
              )}
            >
              <FaGithub /> <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="mailto:amanworkstuff@gmail.com"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground bg-transparent px-2.5 shadow-none transition-colors sm:px-4",
              )}
            >
              <Mail size={15} /> <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aman-verma-473645328/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground bg-transparent px-2.5 shadow-none transition-colors sm:px-4",
              )}
            >
              <FaLinkedin /> <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
