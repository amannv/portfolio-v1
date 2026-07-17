"use client";

import React, { useState } from "react";
import Heading from "@/components/Heading";
import ScaleX from "@/components/ScaleX";
import StackBtn from "@/components/StackBtn";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiArrowDropDownLine } from "react-icons/ri";
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

interface StackItem {
  title: string;
  icon: React.ReactNode;
  url: string;
  type: "language" | "frontend" | "backend" | "design" | "tool";
}

const stackItems: StackItem[] = [
  { title: "C", icon: <SiC />, url: "", type: "language" },
  { title: "C++", icon: <SiCplusplus />, url: "", type: "language" },
  { title: "JavaScript", icon: <SiJavascript />, url: "", type: "language" },
  { title: "TypeScript", icon: <SiTypescript />, url: "", type: "language" },
  { title: "HTML5", icon: <FaHtml5 />, url: "", type: "frontend" },
  { title: "CSS3", icon: <FaCss3Alt />, url: "", type: "frontend" },
  { title: "Tailwind CSS", icon: <SiTailwindcss />, url: "", type: "frontend" },
  { title: "React", icon: <FaReact />, url: "", type: "frontend" },
  { title: "Next.js", icon: <SiNextdotjs />, url: "", type: "frontend" },
  { title: "Vite", icon: <SiVite />, url: "", type: "frontend" },
  { title: "Node.js", icon: <FaNodeJs />, url: "", type: "backend" },
  { title: "Express", icon: <SiExpress />, url: "", type: "backend" },
  { title: "MongoDB", icon: <SiMongodb />, url: "", type: "backend" },
  { title: "PostgreSQL", icon: <SiPostgresql />, url: "", type: "backend" },
  { title: "SQL", icon: <TbSql />, url: "", type: "backend" },
  { title: "Supabase", icon: <SiSupabase />, url: "", type: "backend" },
  { title: "Cloudinary", icon: <SiCloudinary />, url: "", type: "backend" },
  { title: "Shadcn UI", icon: <SiShadcnui />, url: "", type: "frontend" },
  { title: "Vercel", icon: <SiVercel />, url: "", type: "tool" },
  { title: "Postman", icon: <SiPostman />, url: "", type: "tool" },
  { title: "Git", icon: <FaGitAlt />, url: "", type: "tool" },
  { title: "GitHub", icon: <FaGithub />, url: "", type: "tool" },
  { title: "Figma", icon: <FaFigma />, url: "", type: "design" },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Languages", value: "language" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Design", value: "design" },
  { label: "Tools", value: "tool" },
];

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredItems =
    activeFilter === "all"
      ? stackItems
      : stackItems.filter((item) => item.type === activeFilter);

  return (
    <>
      <Heading title="Tech Stack">
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="h-7 px-2.5 mr-3 py-1 text-xs font-semibold flex items-center gap-1.5"
          >
            <span>{filters.find((f) => f.value === activeFilter)?.label}</span>
            <span className="text-[10px]"><RiArrowDropDownLine /></span>
          </Button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-1 w-40 rounded-md border bg-popover text-popover-foreground shadow-md z-50 font-mono text-xs overflow-hidden">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => {
                    setActiveFilter(filter.value);
                    setDropdownOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-3 py-2 hover:bg-muted transition-colors cursor-pointer block font-semibold",
                    activeFilter === filter.value && "bg-muted/80 text-foreground"
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </Heading>
      <div className="flex flex-wrap gap-1 p-4">
        {filteredItems.map((item, index) => (
          <StackBtn
            key={index}
            icon={item.icon}
            text={item.title}
            url={item.url}
          />
        ))}
      </div>
      <ScaleX />
    </>
  );
}
