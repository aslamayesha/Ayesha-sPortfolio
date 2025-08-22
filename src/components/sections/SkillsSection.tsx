import React from 'react';

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

export default function SkillsSection() {
  // Duplicate the skills array for seamless looping
  const sliderSkills = [...skills, ...skills];

  return (
    <section id="skills" className="bg-[#0a0a0a] w-full h-full flex items-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-24 py-16">
        <h2
          className="text-white font-anton text-[clamp(2rem,6vw,4rem)] leading-tight uppercase font-extrabold mb-6 animate-fade-in text-left"
          style={{ fontFamily: 'Anton, sans-serif' }}
        >
          <span className="animate-pulse-slow">Skills</span> &amp; Technologies
        </h2>
        <p className="text-gray-400 text-left max-w-2xl mx-0 mb-12 animate-fade-in animate-delay-1">
          Here are some of the core technologies and tools I use to build modern, high-quality web experiences.
        </p>
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
      </div>
    </section>
  );
} 