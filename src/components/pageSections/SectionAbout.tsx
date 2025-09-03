import StatItem from "../StatItem";

export default function SectionAbout() {

  return (
    <div className="mt-[70px]">
        <div className="flex flex-col md:flex-row justify-between">
         <div className="flex flex-col md:ml-27 ml-6 mt-10 md:mt-0 animate-slide-in-left ">
          {/* <p className="text-[#62606F] font-[Anton] text-[50px] md:text-[80px] lg:text-[70px] xl:text-[80px] uppercase mb-0 md:mb-4 lg:mb-0 xl:mb-4 animate-fade-in animate-delay-1 hover-glow">About</p> */}
          <p className="text-white font-[Anton] text-[30px] sm:text-[35px] xl:text-[40px] uppercase font-medium  animate-fade-in animate-delay-2 hover-scale">Code Meets Creativity</p>
          <h2
            className="text-white w-full md:w-2xl text-[40px] sm:text-[50px] xl:text-[80px] leading-[1.1] uppercase font-medium mb-6 animate-fade-in animate-delay-3 hover-glow"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            A Developer Who <br />
            <span className="animate-pulse-slow">Designs With Vision.</span>
          </h2>
          <p className="text-[#FFFFFF]  max-w-md  md:mr-0 mr-4 animate-fade-in animate-delay-4 hover-lift font-sans text-[13px] md:text-[16px] lg:text-[13px] xl:text-[16px] font-light">
            I&apos;m a developer who thrives on coding and problem-solving. There&apos;s nothing more
            fulfilling than creating software—it&apos;s where I feel truly alive. So, what made me take
            on the unexpected challenge of learning design? We&apos;ve all heard it before—developers
            can&apos;t design. Or can they? And more importantly, should they?
          </p>
        </div>
        <div className="mr-35 ml-5 md:ml-0  mt-[50px] flex md:flex-col flex-row md:gap-10 gap-8">
            <StatItem />
          </div>
          </div>
    </div>
  );
}