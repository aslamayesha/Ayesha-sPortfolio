import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-[#0a0a0a] w-full h-full flex items-center md:mt-0 mt-[50px]">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col xl:flex-row items-center justify-between xl:gap-16 gap-4">
        {/* Left Column */}
        <div className="flex-1 md:w-[100%] md:pl-3 lg:pl-0 animate-slide-in-left lg:mt-[60px] xl:mt-0 ">
          <p className="text-[#62606F] font-[Anton] text-[50px] md:text-[80px] lg:text-[70px] xl:text-[80px] uppercase mb-0 md:mb-4 lg:mb-0 xl:mb-4 animate-fade-in animate-delay-1 hover-glow">About</p>
          <p className="text-white font-[Anton] text-[30px] sm:text-[35px] xl:text-[40px] uppercase font-medium  animate-fade-in animate-delay-2 hover-scale">Code Meets Creativity</p>
          <h2
            className="text-white text-[40px] sm:text-[50px] xl:text-[80px] leading-[1.1] uppercase font-medium mb-6 animate-fade-in animate-delay-3 hover-glow"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            A Developer Who <br />
            <span className="animate-pulse-slow">Designs With Vision.</span>
          </h2>
          <p className="text-[#FFFFFF] max-w-md animate-fade-in animate-delay-4 hover-lift font-sans text-[13px] md:text-[16px] lg:text-[13px] xl:text-[16px] font-light">
            I&apos;m a developer who thrives on coding and problem-solving. There&apos;s nothing more
            fulfilling than creating software—it&apos;s where I feel truly alive. So, what made me take
            on the unexpected challenge of learning design? We&apos;ve all heard it before—developers
            can&apos;t design. Or can they? And more importantly, should they?
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-6 md:gap-12 items-end animate-slide-in-right">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6f64f3] to-[#6155E1] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-float"></div>
            <Image
              src="/about-image1.png"
              alt={'code-image'}
              width={400}
              height={100}
              objectFit="contain"
              className="animate-scale-in animate-delay-2 hover-scale relative z-10 w-[200px] h-[100px] md:w-[400px] md:h-[150px] lg:w-[350px] lg:h-[120px] xl:w-[400px] xl:h-[150px]"
            />
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6155E1] to-[#6f64f3] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-float" style={{ animationDelay: '1s' }}></div>
            <Image
              src="/about-image2.png"
              alt={'code-image'}
              width={400}
              height={100}
              objectFit="contain"
              className="animate-scale-in animate-delay-4 hover-scale relative z-10 w-[200px] h-[100px] md:w-[400px] md:h-[150px] lg:w-[350px] lg:h-[120px] xl:w-[400px] xl:h-[150px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
