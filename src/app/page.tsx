'use client';
import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
// import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import InNumbersSection from '@/components/sections/InNumbersSection';
import CtaSection from '@/components/sections/CtaSection';
import '@fontsource/anton';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionWrappers = document.querySelectorAll('.section-wrapper');
      
      sectionWrappers.forEach((wrapper, index) => {
        const sectionTop = index * windowHeight;
        const sectionBottom = (index + 1) * windowHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          // Current section is active
          wrapper.classList.remove('stacked');
        } else if (scrollY >= sectionBottom) {
          // Section has been scrolled past
          wrapper.classList.add('stacked');
        } else {
          // Section hasn't been reached yet
          wrapper.classList.remove('stacked');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="stacked-sections">
        <div className="section-wrapper">
          <HeroSection />
        </div>
        <div className="section-wrapper">
          <AboutSection />
        </div>
        {/* <div className="section-wrapper">
          <SkillsSection />
        </div> */}
        <div className="section-wrapper">
          <ProjectsSection />
        </div>
        <div className="section-wrapper">
          <ServicesSection />
        </div>
        <div className="section-wrapper">
          <InNumbersSection />
        </div>
        <div className="section-wrapper">
          <CtaSection />
        </div>
      </div>
    </div>
  );
}
