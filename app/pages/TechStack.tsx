import Heading from "@/components/Heading";
import ScaleX from "@/components/ScaleX";
import StackBtn from "@/components/StackBtn";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiShadcnui,
  SiExpress,
  SiMongodb,
  SiCloudinary,
  SiC,
  SiCplusplus,
  SiVite,
  SiSupabase,
  SiPostgresql,
  SiVercel,
  SiPostman,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

const stackItems = [
  { title: "C", icon: <SiC />, url: "" },
  { title: "C++", icon: <SiCplusplus />, url: "" },
  { title: "JavaScript", icon: <SiJavascript />, url: "" },
  { title: "TypeScript", icon: <SiTypescript />, url: "" },
  { title: "HTML5", icon: <FaHtml5 />, url: "" },
  { title: "CSS3", icon: <FaCss3Alt />, url: "" },
  { title: "Tailwind CSS", icon: <SiTailwindcss />, url: "" },
  { title: "React", icon: <FaReact />, url: "" },
  { title: "Next.js", icon: <SiNextdotjs />, url: "" },
  { title: "Vite", icon: <SiVite />, url: "" },
  { title: "Node.js", icon: <FaNodeJs />, url: "" },
  { title: "Express", icon: <SiExpress />, url: "" },
  { title: "MongoDB", icon: <SiMongodb />, url: "" },
  { title: "PostgreSQL", icon: <SiPostgresql />, url: "" },
  { title: "SQL", icon: <TbSql />, url: "" },
  { title: "Supabase", icon: <SiSupabase />, url: "" },
  { title: "Cloudinary", icon: <SiCloudinary />, url: "" },
  { title: "Shadcn UI", icon: <SiShadcnui />, url: "" },
  { title: "Vercel", icon: <SiVercel />, url: "" },
  { title: "Postman", icon: <SiPostman />, url: "" },
  { title: "Git", icon: <FaGitAlt />, url: "" },
  { title: "GitHub", icon: <FaGithub />, url: "" },
  { title: "Figma", icon: <FaFigma />, url: "" },
];

export default function TechStack() {
  return (
    <>
      <Heading title="Tech Stack" />
      <div className="flex flex-wrap gap-1 p-4">
        {stackItems.map((item, index) => (
          <StackBtn key={index} icon={item.icon} text={item.title} url={item.url} />
        ))}
      </div>
      <ScaleX />
    </>
  );
}


