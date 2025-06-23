import React from 'react';

const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center animate-fade-in hover-scale">
    <p
      className="text-white font-anton text-6xl font-extrabold animate-pulse-slow"
      style={{ fontFamily: 'Anton, sans-serif' }}
    >
      {number}
    </p>
    <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
  </div>
);

export default function InNumbersSection() {
  return (
    <section id="in-numbers" className="bg-[#000000] w-full h-full flex items-center">
      <div className="container mx-auto px-8">
        <div className="border-t border-gray-700 pt-16">
          <h2
            className="text-white font-anton text-[clamp(2rem,6vw,4rem)] leading-tight uppercase font-extrabold mb-6 animate-fade-in"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            In Numbers
          </h2>
          <p className="text-gray-400 text-left max-w-2xl mb-12 animate-fade-in animate-delay-1">
            Here are some key metrics that showcase my experience and the impact of my work.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <StatItem number="30+" label="Projects completed" />
            <StatItem number="20+" label="Rework customers" />
            <StatItem number="5+" label="Years experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
