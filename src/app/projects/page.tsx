"use client";

import FirstSection from "@/components/sections/FirstSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Projects() {
  return <div>
    <FirstSection title="projects" description="dedicated to crafting compelling and impactful digital and physical projects."/>
    <ProjectsSection showTitle={false} />
    <div className="border border-[#62606F] mx-auto w-[87%] my-[70px]"/>
    <CtaSection />
  </div>;
}