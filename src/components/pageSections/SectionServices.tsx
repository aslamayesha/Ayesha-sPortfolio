export default function SectionServices() {
  return (
    <div>
       <div className="flex flex-col ml-27 animate-slide-in-left ">
          <h2
            className="text-white w-3xl text-[40px] sm:text-[50px] xl:text-[80px] leading-[1.1] uppercase font-medium mb-6 animate-fade-in animate-delay-3 hover-glow"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            maximizing Your <br />
            <span className="animate-pulse-slow">Digital Presence with <br/></span>
            <span className="animate-pulse-slow">my best services</span>
          </h2>  
        </div>

        <div className="mt-[80px] w-2xl  text-white font-[Anton] text-[30px] sm:text-[35px] xl:text-[40px] uppercase font-medium  animate-fade-in animate-delay-2 hover-scale ml-27">
        <p className="flex justify-between pr-40 mb-7"><span className="">01</span> <span className="">web development</span></p>
        <p className="flex justify-between pr-40 mb-7"><span className="">02</span> <span className="w-[281px]">app design</span></p>
        <p className="flex justify-between pr-40 "><span className="">03</span> <span className=" w-[281px]">brand identity</span></p>
        </div>
    </div>
  );
}

    