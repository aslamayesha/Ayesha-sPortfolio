import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0a0a0a] w-full h-full flex items-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Column */}
        <div className="flex-1 animate-slide-in-left">
          <p className="text-gray-400 uppercase tracking-widest mb-2 animate-fade-in animate-delay-1 hover-glow">About</p>
          <p className="text-white uppercase font-semibold text-lg mb-4 animate-fade-in animate-delay-2 hover-scale">Code Meets Creativity</p>
          <h2
            className="text-white font-anton text-[clamp(2rem,6vw,4rem)] leading-tight uppercase font-extrabold mb-6 animate-fade-in animate-delay-3 hover-glow"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            A Developer Who <br />
            <span className="animate-pulse-slow">Designs With Vision.</span>
          </h2>
          <p className="text-gray-400 max-w-md animate-fade-in animate-delay-4 hover-lift">
            I&apos;m a developer who thrives on coding and problem-solving. There&apos;s nothing more
            fulfilling than creating software—it&apos;s where I feel truly alive. So, what made me take
            on the unexpected challenge of learning design? We&apos;ve all heard it before—developers
            can&apos;t design. Or can they? And more importantly, should they?
          </p>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-12 items-end animate-slide-in-right">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6f64f3] to-[#6155E1] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-float"></div>
            <Image
              src="/about-image1.png"
              alt={'code-image'}
              width={400}
              height={100}
              objectFit="contain"
              className="animate-scale-in animate-delay-2 hover-scale relative z-10"
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
              className="animate-scale-in animate-delay-4 hover-scale relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
