import React from 'react';

const ServiceItem = ({ children }: { children: React.ReactNode }) => (
  <h3
    className="text-white font-anton text-[clamp(2rem,6vw,3.5rem)] leading-none uppercase font-extrabold"
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
    <section id="services" className="bg-[#6155E1] py-24 my-24 relative overflow-hidden">
      {/* Decorative Background Text */}
      <div
        className="absolute -left-12 -top-4 text-white opacity-10 font-anton text-[25rem] leading-none select-none pointer-events-none"
        style={decorativeTextStyle}
      >
        SERVICES
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-12 left-0 w-1/3 pointer-events-none">
        <svg viewBox="0 0 500 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-50 20 Q 250 0 550 30" stroke="white" strokeWidth="2" fill="transparent" />
          <path d="M-50 40 Q 250 20 550 50" stroke="white" strokeWidth="2" fill="transparent" />
          <path d="M-50 60 Q 250 40 550 70" stroke="white" strokeWidth="2" fill="transparent" />
        </svg>
      </div>

      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column */}
        <div className="md:col-start-2">
          <p className="text-white uppercase tracking-widest mb-4">Services</p>
          <p className="text-white text-opacity-80 max-w-md mb-12">
            Web development tools are often available as browser add-ons or integrated features
            within popular web browsers. Leading browsers like Google Chrome, Firefox, Safari,
            Microsoft Edge, and Opera come with built-in tools designed to assist developers.
          </p>
          <div className="flex flex-col gap-8">
            <ServiceItem>Web Development</ServiceItem>
            <ServiceItem>App Design</ServiceItem>
            <ServiceItem>Brand Identity</ServiceItem>
          </div>
          <button className="mt-12 bg-white text-[#6155E1] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-colors">
            VIEW PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}
