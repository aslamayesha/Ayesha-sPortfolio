'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce site with a modern UI, product catalog, and a seamless checkout process built to scale.',
    image: '/project-placeholder-1.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    link: '#',
  },
  {
    title: 'AI-Powered Content Generator',
    description:
      'A SaaS application that leverages AI to help creators generate high-quality content for their blogs and social media.',
    image: '/project-placeholder-2.png',
    tags: ['React', 'Node.js', 'GraphQL', 'OpenAI'],
    link: '#',
  },
  {
    title: 'Interactive Data Dashboard',
    description:
      'A complex data visualization dashboard for a fintech company, providing real-time insights into market trends.',
    image: '/project-placeholder-3.png',
    tags: ['React', 'D3.js', 'WebSocket', 'Framer Motion'],
    link: '#',
  },
];

const ProjectCard = ({ title, description, image, tags, link }: (typeof projects)[0]) => (
  <div className="bg-[#1a1a2e] rounded-lg overflow-hidden flex flex-col h-full hover-lift animate-fade-in group">
    <div className="relative w-full h-56 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#6f64f3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      <Image src={image} alt={title} layout="fill" objectFit="cover" className="hover-scale transition-transform duration-500" />
      <div className="absolute top-4 right-4 bg-[#6f64f3] text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce-slow">
        NEW
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#6f64f3] transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={tag}
            className="bg-[#6155E1] bg-opacity-20 text-[#c2bbf9] text-xs font-semibold px-2.5 py-1 rounded-full hover-glow animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {tag}
          </span>
        ))}
      </div>
      <a href={link} className="text-[#6155E1] font-semibold hover:underline self-start hover-glow group-hover:text-[#6f64f3] transition-all duration-300 flex items-center gap-2">
        View Project 
        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
      </a>
    </div>
  </div>
);

const PrevButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all hover-lift hover-glow animate-fade-in"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 18L9 12L15 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const NextButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all hover-lift hover-glow animate-fade-in"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 18L15 12L9 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="projects" className="bg-[#000000] w-full h-full flex items-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        <h2 className="text-white font-anton text-[clamp(2rem,6vw,4rem)] leading-tight uppercase font-extrabold mb-6 animate-fade-in hover-glow"
        style={{ fontFamily: 'Anton, sans-serif' }}
        >
          <span className="animate-pulse-slow">Featured</span> Projects
        </h2>
        <p className="text-gray-400 text-left max-w-2xl mb-12 animate-fade-in animate-delay-1 hover-lift">
          Here are some of the projects I am most proud of. Each one was a unique challenge that
          helped me grow as a developer.
        </p>

        <div className="relative animate-fade-in animate-delay-2">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
                  style={{ animationDelay: `${(index + 3) * 0.2}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
          <PrevButton onClick={scrollPrev} />
          <NextButton onClick={scrollNext} />
        </div>
      </div>
    </section>
  );
}
