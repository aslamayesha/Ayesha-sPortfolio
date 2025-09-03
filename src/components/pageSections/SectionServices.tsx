export default function SectionServices() {
  return (
    <div>
       <div className="flex flex-col md:ml-27 ml-6 mt-10 md:mt-0 animate-slide-in-left ">
          <h2
            className="text-white md:w-3xl w-full text-[30px] sm:text-[50px] xl:text-[80px] leading-[1.1] uppercase font-medium mb-6 animate-fade-in animate-delay-3 hover-glow"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            maximizing Your <br />
            <span className="animate-pulse-slow">Digital Presence with <br/></span>
            <span className="animate-pulse-slow">my best services</span>
          </h2>  
        </div>

        <div className="md:mt-[80px] mt-[50px] md:w-2xl w-ful text-white font-[Anton] text-[30px] sm:text-[35px] xl:text-[40px] uppercase font-medium  animate-fade-in animate-delay-2 hover-scale md:ml-27 ml-6">
        <p className="flex md:gap-40 gap-15 mb-7"><span className="">01</span> <span className="md:w-1/2 w-ful">web development</span></p>
        <p className="flex md:gap-39 gap-15 mb-7"><span className="">02</span> <span className="w-1/2 ">app design</span></p>
        <p className="flex md:gap-39 gap-15 "><span className="">03</span> <span className=" w-1/2">brand identity</span></p>
        </div>
    </div>
  );
}

    