"use client";
import SectionContact from "@/components/pageSections/SectionContact";
import CtaSection from "@/components/sections/CtaSection";
import FirstSection from "@/components/sections/FirstSection";

export default function Contact() {
  return (
    <div>
      <FirstSection title="contact" description="We will inquire thoughtfully, explore potentialities, and formulate an action plan. Let's create something incredible together."/>
      <SectionContact />
      <div className="border border-[#62606F] mx-auto w-[87%] mt-[100px] mb-[70px]"/>
      <CtaSection />
    </div>
  );
}