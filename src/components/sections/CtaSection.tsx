import Image from "next/image";
import React from "react";

export default function CtaSection() {
  const handleGmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=aslamayesha799@gmail.com"
    );
  }
  return (
    <section id="cta" className="bg-[#0a0a0a]  w-full h-full flex items-center">
      <div className="container mx-auto md:px-8 px-4 text-center">
        <div className="flex sm:text-left justify-between items-center">
          <h1 className="text-white font-[Anton] text-[60px] md:text-[100px] lg:text-[144px] font-medium uppercase leading-[1.1] md:leading-[1]">
            Let&apos;s start a <br />
            <span className="text-[#6155E1] flex items-center justify-between">
              project
              <Image src="/star.svg" alt="cta-image" width={61} height={61} />
            </span>
          </h1>
        </div>

        <div className="flex w-full  justify-between md:p-[30px] p-[15px] items-center  md:h-[170px] h-[100px] mt-[40px] rounded-[30px] bg-[#6155E1]">
          <h1 className="text-white text-[16px] md:text-[35px] lg:text-[40px]  whitespace-nowrap text-left font-[Anton]  font-medium uppercase md:leading-[1.1] leading-[1.2]">
            ready to chat over coffee and <br /> turn ideas into action
          </h1>
          <button onClick={handleGmailClick} className="bg-white whitespace-nowrap font-[Anton] md:text-[20px] text-[13px] cursor-pointer text-[#6155E1] font-medium md:py-3 md:px-8 px-3 py-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors animate-scale-in animate-delay-3 hover-lift">
            HIRE ME NOW
          </button>
        </div>
      </div>
    </section>
  );
}
