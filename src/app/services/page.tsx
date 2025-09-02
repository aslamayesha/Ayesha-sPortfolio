"use client";
import SectionServices from "@/components/pageSections/SectionServices";
import CtaSection from "@/components/sections/CtaSection";
import FirstSection from "@/components/sections/FirstSection";

export default function Services() {

    
  return (
    <div>
      <FirstSection title="services" description="creating captivating digital and physical projects, with unique customization to meet various needs for your products."/>
      <SectionServices />
      <div className="border border-[#62606F] mx-auto w-[87%] my-[70px]"/>
      <CtaSection />
    </div>
  );
}