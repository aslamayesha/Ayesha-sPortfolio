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
  // { name: 'HTML5', icon: '🌐' },
  // { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '✨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '⏭️' },
  // { name: 'Tailwind CSS', icon: '💨' },
  // { name: 'Framer Motion', icon: '🎞️' },
  { name: 'NodeJs', icon: '🔗' },
  // { name: 'Figma', icon: '🎨' },
  // { name: 'Responsive Design', icon: '📱' },
  // { name: 'UI/UX', icon: '🖌️' },
];


export default function ServicesSection() {
  const sliderSkills = [...skills];
  return (
    <section
      // id="services"
      className="bg-[#6155E1] w-full h-full flex flex-col gap-15 items-center relative overflow-hidden"
    >
      {/* Decorative Background Text */}
      <div
        className="absolute inset-0 leading-[1] mb-3 px-4 md:px-10 lg:px-23 flex items-end  md:opacity-70 lg:opacity-70 sm:opacity-10 md:text-[288px] text-[165px] md:font-medium font-light whitespace-nowrap text-transparent [-webkit-text-stroke:1px_#ffffff]"
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

      <div className="container md:mt-[-40px] mt-[0px]  md:px-8 px-4 grid md:grid-cols-2 xl:gap-120 gap-0  items-center relative z-10">
        {/* Left Column */}
        <h1 className="text-white animate-pulse-slow h-full font-[Anton] font-extrabold text-[50px] md:text-[80px] uppercase mb-1 md:mb-12 animate-fade-in animate-delay-1 ">
          Services
        </h1>
        <div className="md:col-start-2 animate-slide-in-right">
          <p className="text-white font-sans text-[14px] md:text-[16px] font-light text-opacity- max-w-lg md:mb-12 mb-8 animate-fade-in animate-delay-2">
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
            <div className="relative flex-wrap mt-10 md:mt-10 xl:mt-10 ">
      <div className="flex lg:w-max md:w-full w-full flex-wrap gap-6 ">
      {sliderSkills.map((skill, idx) => (
              <div
                key={idx }
                className=" flex flex-col items-center  "
                // style={{ animationDelay: `${(idx % skills.length + 1) * 0.08}s` }}
              >
                <div className="text-4xl md:text-5xl mb-4 ">{skill.icon}</div>
                <div className="text-white text-base md:text-lg font-semibold text-center ">
                  {skill.name}
                </div>
              </div>
            ))}
            </div>
            </div>
            {/* <div className="flex items-center justify-center">
              <button className=" bg-white cursor-pointer font-[Anton] font-medium text-[20px] text-[#6155E1]  p-[25px] rounded-[64px] shadow-lg hover:bg-gray-200 transition-colors animate-scale-in animate-delay-3 hover-lift">
                VIEW PROJECTS
              </button>
            </div> */}
        </div>
      </div>
   
            {/* <style jsx global>{`
          @keyframes skills-slider {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-skills-slider {
            animation: skills-slider 24s linear infinite;
          }
        `}</style> */}
    </section>
  );
}
