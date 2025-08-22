import Image from "next/image";
import React from "react";

export default function CtaSection() {
  return (
    <section id="cta" className="bg-[#0a0a0a] w-full h-full flex items-center">
      <div className="container mx-auto px-8 text-center">
        <div className="flex sm:text-left justify-between items-center">
          <h1 className="text-white font-[Anton] text-[144px] font-medium uppercase leading-[1]">
            Let's start a <br />
            <span className="text-[#6155E1] flex items-center justify-between">
              project{" "}
              <Image src="/star.svg" alt="cta-image" width={61} height={61} />
            </span>
          </h1>
        </div>

        <div className="flex sm:w-full lg:w-[70%] justify-between p-[30px] items-center w-[70%] h-[170px] mt-[40px] rounded-[30px] bg-[#6155E1]">
          <h1 className="text-white sm:text-[30px] sm:whitespace-nowrap text-left font-[Anton] text-[40px] font-medium uppercase leading-[1]">
            ready to chat over coffee and <br /> turn ideas into action
          </h1>
          <button className="bg-white sm:whitespace-nowrap font-[Anton] text-[20px] cursor-pointer text-[#6155E1] font-medium py-3 px-8 sm:px-4 rounded-full shadow-lg hover:bg-gray-200 transition-colors animate-scale-in animate-delay-3 hover-lift">
            HIRE ME NOW
          </button>
        </div>
      </div>
    </section>
  );
}
