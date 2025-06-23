import React from 'react';

export default function CtaSection() {
  return (
    <section id="cta" className="bg-transparent py-24">
      <div className="container mx-auto px-8 text-center">
        {/* Headline */}
        <h2
          className="text-white font-anton text-[clamp(2.5rem,8vw,6rem)] leading-none uppercase font-extrabold"
          style={{ fontFamily: 'Anton, sans-serif' }}
        >
          Let's Start A<br />
          <span className="text-[#6155E1]">Project</span>
        </h2>

        {/* Decorative Star */}
        <div className="flex justify-center my-8">
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 0L61.226 38.774L100 50L61.226 61.226L50 100L38.774 61.226L0 50L38.774 38.774L50 0Z"
              fill="#6155E1"
            />
          </svg>
        </div>

        {/* CTA Bar */}
        <div className="bg-[#6155E1] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
          <p className="text-white font-bold text-xl text-center md:text-left">
            READY TO CHAT OVER COFFEE AND
            <br />
            TURN IDEAS INTO ACTION
          </p>
          <button className="bg-white text-[#6155E1] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-colors flex-shrink-0">
            HIRE ME NOW
          </button>
        </div>
      </div>
    </section>
  );
}
