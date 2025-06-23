import React from 'react';

const ServiceItem = ({ children }: { children: React.ReactNode }) => (
  <h3
    className="text-white font-anton text-[clamp(2rem,6vw,3.5rem)] leading-none uppercase font-extrabold animate-fade-in hover-scale"
    style={{ fontFamily: 'Anton, sans-serif' }}
  >
    {children}
  </h3>
);

const decorativeTextStyle: React.CSSProperties = {
  fontFamily: 'Anton, sans-serif',
  WebkitTextStroke: '2px rgba(255, 255, 255, 0.5)',
  color: 'transparent',
};

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#6155E1] w-full h-full flex items-center relative overflow-hidden">
      {/* Decorative Background Text */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-5 text-white text-[20rem] font-bold whitespace-nowrap animate-rotate-slow"
        style={{ fontFamily: 'Anton, sans-serif' }}
      >
        SERVICES
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-12 left-0 w-1/3 pointer-events-none animate-float">
        <svg viewBox="0 0 500 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50 20 Q 250 0 550 30" stroke="white" strokeWidth="2" fill="transparent" />
          <path d="M-50 40 Q 250 20 550 50" stroke="white" strokeWidth="2" fill="transparent" />
          <path d="M-50 60 Q 250 40 550 70" stroke="white" strokeWidth="2" fill="transparent" />
        </svg>
      </div>

      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column */}
        <div className="md:col-start-2 animate-slide-in-right">
          <p className="text-white uppercase tracking-widest mb-4 animate-fade-in animate-delay-1">Services</p>
          <p className="text-white text-opacity-80 max-w-md mb-12 animate-fade-in animate-delay-2">
            Web development tools are often available as browser add-ons or integrated features
            within popular web browsers. Leading browsers like Google Chrome, Firefox, Safari,
            Microsoft Edge, and Opera come with built-in tools designed to assist developers.
          </p>
          <div className="flex flex-col gap-8">
            <ServiceItem>Web Development</ServiceItem>
            <ServiceItem>App Design</ServiceItem>
            <ServiceItem>Brand Identity</ServiceItem>
          </div>
          <button className="mt-12 bg-white text-[#6155E1] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-colors animate-scale-in animate-delay-3 hover-lift">
            VIEW PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}
