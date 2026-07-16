import Heading from "@/components/Heading";
import ScaleX from "@/components/ScaleX";
import ProjectCard from "@/components/ProjectCard";

 export default function Projects() {
    return (
        <>
        <Heading title="Projects" />
        <div className="grid grid-cols-2 w-full p-4 gap-2">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
        <ScaleX />
        </>
    )
 }