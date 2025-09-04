import React from 'react';
import StatItem from '../StatItem';


export default function InNumbersSection() {
  return (
    <section id="in-numbers" className="bg-[#0a0a0a] w-full h-full flex items-center">
      <div className="container mx-auto md:px-8 px-4">
        <div className="border-t border-gray-700 pt-16">
          <div className='flex flex-col lg:flex-row justify-between'>
          <h2
            className=" font-anton text-[50px] md:text-[60px] text-[#62606F] leading-tight uppercase font-medium mb-6 animate-fade-in"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            In Numbers
          </h2>
          <p className="text-white  text-left max-w-2xl mb-12 animate-fade-in animate-delay-1 font-sans text-[14px] md:text-[17px] font-light">
          Project completion begins with turning ideas into actionable plans. It&apos;s about taking a concept and breaking it down into manageable tasks, setting clear goals and timelines. Throughout the process, staying focused and adaptable ensures that obstacles can be overcome, and new insights can be applied. Effective collaboration, careful planning, 
          </p>
          </div>

          <div className="flex gap-8 items-center justify-center lg:float-right  mt-[10px] ">
            <StatItem />
          </div>
        </div>
      </div>
    </section>
  );
}


