"use client";

import SectionAbout from "@/components/pageSections/SectionAbout";
import CtaSection from "@/components/sections/CtaSection";
import FirstSection from "@/components/sections/FirstSection";

export default function About() {
  return (
    <div>
      <FirstSection title="about me" description=" I specialize in creating captivating digital and physical projects, uniquely tailored to meet diverse needs."/>
      <SectionAbout />
      <div className="border border-[#62606F] mx-auto w-[87%] mt-[100px] mb-[70px]"/>
      <CtaSection />
    </div>
  );
}
