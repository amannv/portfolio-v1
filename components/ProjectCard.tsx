import { Badge } from "@/components/ui/badge";
import { TbWorld } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

export default function ProjectCard() {
  return (
    <Card className="bg-background relative mx-auto w-full max-w-sm rounded-md pt-0">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src="/textly.jpg"
        alt="text"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          <Button variant={"ghost"}>
            <TbWorld size={20} />
          </Button>
          <Button variant={"ghost"} >
            <TbBrandGithub size={20} />
          </Button>
        </CardAction>
        <CardTitle>Textly</CardTitle>
        <CardDescription>
          Textly is a free AI-powered writing assistant that refines text,
          improves grammar, and enhances written communication.
        </CardDescription>
      </CardHeader>
      <CardFooter className="bg-background gap-1 border-none pt-0">
        <Badge variant="outline" className="rounded-sm p-3">
          Next.js
        </Badge>
        <Badge variant="outline" className="rounded-sm p-3">
          Typescript
        </Badge>
        <Badge variant="outline" className="rounded-sm p-3">
          Groq Api
        </Badge>
      </CardFooter>
    </Card>
  );
}
