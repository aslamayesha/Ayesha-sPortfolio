import React from 'react';

const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <p
      className="text-white font-anton text-6xl font-extrabold"
      style={{ fontFamily: 'Anton, sans-serif' }}
    >
      {number}
    </p>
    <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
  </div>
);

export default function InNumbersSection() {
  return (
    <section id="in-numbers" className="bg-transparent py-24">
      <div className="container mx-auto px-8">
        <div className="border-t border-gray-700 pt-16">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-gray-400 text-2xl uppercase tracking-widest">In Numbers</h2>
            </div>
            <div>
              <p className="text-gray-400">
                Project completion begins with turning ideas into actionable plans. It's about
                taking a concept and breaking it down into manageable tasks, setting clear goals and
                timelines. Throughout the process, staying focused and adaptable ensures that
                obstacles can be overcome, and new insights can be applied.
              </p>
            </div>
          </div>

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
