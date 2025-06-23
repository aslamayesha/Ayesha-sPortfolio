import Image from 'next/image';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import InNumbersSection from '@/components/sections/InNumbersSection';
import CtaSection from '@/components/sections/CtaSection';
import '@fontsource/anton';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <InNumbersSection />
      <CtaSection />
    </>
  );
}
