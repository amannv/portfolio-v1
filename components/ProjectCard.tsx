import { Badge } from "@/components/ui/badge";
import { TbWorld } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  isLive?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveLink,
  githubLink,
  isLive = false,
}: ProjectCardProps) {
  return (
    <Card className="group/card bg-background border-border/40 relative mx-auto w-full rounded-sm border pt-0">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
        />
      </div>
      <CardHeader className="pt-4 pb-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-foreground text-base font-bold tracking-tight">
            {title}
          </CardTitle>
          {isLive && (
            <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold tracking-wider text-emerald-600 uppercase select-none dark:text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </span>
              Live
            </div>
          )}
        </div>
        <CardDescription className="text-muted-foreground mt-1 line-clamp-3 text-xs leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between gap-1.5 border-none bg-transparent pt-0 pb-4">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-muted-foreground/90 border-border/60 bg-muted/20 rounded-xs px-2.5 py-0.5 font-mono text-[10px] font-semibold"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Repository"
              className="border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground inline-flex size-7 items-center justify-center rounded-md border transition-colors active:translate-y-px"
            >
              <TbBrandGithub size={16} />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Website"
              className="border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground inline-flex size-7 items-center justify-center rounded-md border transition-colors active:translate-y-px"
            >
              <TbWorld size={16} />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
