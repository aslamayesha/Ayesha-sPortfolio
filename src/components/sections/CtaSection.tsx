import React from 'react';

export default function CtaSection() {
  return (
    <section id="cta" className="bg-[#000000] w-full h-full flex items-center">
      <div className="container mx-auto px-8 text-center">
        {/* Headline */}
        <h2
          className="text-white font-anton text-[clamp(2rem,6vw,4rem)] leading-tight uppercase font-extrabold mb-6 animate-fade-in"
          style={{ fontFamily: 'Anton, sans-serif' }}
        >
          Ready to Start <br />
          Your Project?
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in animate-delay-1">
          Let's work together to bring your ideas to life. I'm here to help you create something
          amazing that your users will love.
        </p>

        {/* CTA Button */}
        <button className="bg-[#6f64f3] text-white font-bold py-4 px-12 rounded-full shadow-lg hover:bg-[#5a52d4] transition-colors text-lg animate-scale-in animate-delay-2 hover-lift hover-glow">
          Let's Talk
        </button>
      </div>
    </section>
  );
}
