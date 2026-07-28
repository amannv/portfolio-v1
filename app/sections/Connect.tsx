import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";
import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Heading from "@/components/Heading";

export default function Connect() {
  return (
    <>
      <Heading title="Work With Me" />
      <div className="relative w-full px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto w-full max-w-3xl p-8 text-center">
          <h2 className="font-heading mb-1 text-2xl font-medium tracking-wide md:text-3xl">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mb-3 text-sm md:text-base">
            Feel free to reach out through any of these platforms
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://x.com/amanntwt"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground bg-transparent shadow-none transition-colors",
              )}
            >
              <FaXTwitter /> X
            </a>
            <a
              href="https://github.com/amannv"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground bg-transparent shadow-none transition-colors",
              )}
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="mailto:amanworkstuff@gmail.com"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground bg-transparent shadow-none transition-colors",
              )}
            >
              <Mail size={15} /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/aman-verma-473645328/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground bg-transparent shadow-none transition-colors",
              )}
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
