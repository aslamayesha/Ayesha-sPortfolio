import React from "react";

const ServiceItem = ({ children }: { children: React.ReactNode }) => (
  <h3
    className="text-white  font-anton text-[clamp(2rem,6vw,3.5rem)] leading-[1.1] uppercase font-medium animate-fade-in hover-scale"
    style={{ fontFamily: "Anton, sans-serif" }}
  >
    {children}
  </h3>
);

const skills = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '✨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '⏭️' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Framer Motion', icon: '🎞️' },
  { name: 'Git', icon: '🔗' },
  { name: 'Figma', icon: '🎨' },
  { name: 'Responsive Design', icon: '📱' },
  { name: 'UI/UX', icon: '🖌️' },
];


export default function ServicesSection() {
  const sliderSkills = [...skills, ...skills];
  return (
    <section
      id="services"
      className="bg-[#6155E1] w-full h-full flex flex-col gap-15 items-center relative overflow-hidden"
    >
      {/* Decorative Background Text */}
      <div
        className="absolute inset-0 leading-[1] mb-3 flex items-end  md:ml-[-27%] sm:ml-[-10%] lg:ml-[-53%] justify-center md:opacity-70 lg:opacity-70 sm:opacity-10 text-[288px] font-medium  whitespace-nowrap text-transparent [-webkit-text-stroke:1px_#ffffff]"
        style={{ fontFamily: "Anton, sans-serif" }}
      >
        SER<br/>VICES
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-12 left-0 w-1/3 pointer-events-none animate-float">
        <svg
          viewBox="0 0 500 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 20 Q 250 0 550 30"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
          />
          <path
            d="M-50 40 Q 250 20 550 50"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
          />
          <path
            d="M-50 60 Q 250 40 550 70"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
      </div>

      <div className="container mt-[-40px]  px-8 grid md:grid-cols-2 gap-120  items-center relative z-10">
        {/* Left Column */}
        <p className="text-white h-[98%] font-[Anton] text-[60px] uppercase mb-4 animate-fade-in animate-delay-1 ">
          Services
        </p>
        <div className="md:col-start-2 animate-slide-in-right">
          <p className="text-white font-sans text-[16px] font-light text-opacity- max-w-lg mb-12 animate-fade-in animate-delay-2">
            Web development tools are often available as browser add-ons or
            integrated features within popular web browsers. Leading browsers
            like Google Chrome, Firefox, Safari, Microsoft Edge, and Opera come
            with built-in tools designed to assist developers.
          </p>
            <div>
              <ServiceItem>Web Development</ServiceItem>
              <ServiceItem>App Design</ServiceItem>
              <ServiceItem>Brand Identity</ServiceItem>
            </div>
            {/* <div className="flex items-center justify-center">
              <button className=" bg-white cursor-pointer font-[Anton] font-medium text-[20px] text-[#6155E1]  p-[25px] rounded-[64px] shadow-lg hover:bg-gray-200 transition-colors animate-scale-in animate-delay-3 hover-lift">
                VIEW PROJECTS
              </button>
            </div> */}
        </div>
      </div>
      <div className="relative overflow-x-hidden">
      <div className="flex w-max animate-skills-slider gap-6 md:gap-8 lg:gap-12">
      {sliderSkills.map((skill, idx) => (
              <div
                key={idx + skill.name}
                className="bg-[#1a1a2e] rounded-xl p-6 flex flex-col items-center shadow-lg hover-lift animate-fade-in min-w-[140px] md:min-w-[180px]"
                style={{ animationDelay: `${(idx % skills.length + 1) * 0.08}s` }}
              >
                <div className="text-4xl md:text-5xl mb-4 animate-pulse-slow">{skill.icon}</div>
                <div className="text-white text-base md:text-lg font-semibold text-center tracking-wide">
                  {skill.name}
                </div>
              </div>
            ))}
            </div>
            </div>
            <style jsx global>{`
          @keyframes skills-slider {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-skills-slider {
            animation: skills-slider 24s linear infinite;
          }
        `}</style>
    </section>
  );
}
