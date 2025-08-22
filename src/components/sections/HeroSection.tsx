import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-transparent w-full h-full flex items-center">
      <div className="container px-4 md:px-8 lg:px-24 mx-auto min-h-[60vh] flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8 md:gap-0">
        <div className="flex-1 flex flex-col items-center md:items-start justify-center max-w-2xl text-center md:text-left">
          <h1
            className="text-[clamp(2.5rem,8vw,6rem)] leading-tight text-[#6f64f3] font-anton font-extrabold uppercase mb-4 animate-fade-in"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            LET&apos;S BUILD THE <br /> FUTURE TOGETHER
          </h1>
          <svg
            width="636"
            height="50"
            viewBox="0 0 636 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-slide-in-left animate-delay-1 w-full max-w-md md:max-w-none"
          >
            <path
              d="M233.479 30.403C291.107 33.8693 349.161 32.0738 406.867 32.0738C470.245 32.0738 533.013 34.3912 596.035 41.7271C600.495 42.2462 604.955 42.7687 609.401 43.3979C612.299 43.8079 619.129 42.7654 617.941 45.4399C616.05 49.6933 578.476 47.1079 577.1 47.1107C462.468 47.3418 347.833 47.1107 233.2 47.1107C156.491 47.1107 79.6135 48.5857 2.91331 47.1107C-1.61834 47.0235 11.9543 46.4398 16.4651 45.9968C45.3761 43.1573 74.0893 38.8033 103.066 36.5292C235.907 26.1037 370.635 32.0738 503.772 32.0738C545.077 32.0738 668.992 32.0738 627.687 32.0738C511.569 32.0738 395.45 32.0738 279.332 32.0738C239.574 32.0738 199.816 32.0738 160.058 32.0738C137.936 32.0738 204.302 32.0738 226.425 32.0738C353.279 32.0738 733.842 32.0738 606.988 32.0738C543.13 32.0738 479.791 21.8901 416.242 16.6656C363.997 12.3704 311.821 10.0952 259.469 7.9405C242.145 7.22747 226.786 5.71054 210.088 2"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <button className="bg-white text-[#6c63ff] mt-6 md:mt-10 font-bold py-3 px-8 rounded-full shadow hover:bg-[#6c63ff] hover:text-white transition-all duration-300 text-base animate-scale-in animate-delay-2 hover-lift hover-glow animate-pulse-slow group relative overflow-hidden">
            <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">HIRE ME NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#6f64f3] to-[#6155E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-end justify-center md:justify-start mt-8 md:mt-0">
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-0 animate-rotate-slow">
              <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
                <path d="M110 0C170.914 0 220 49.086 220 110" stroke="#6f64f3" strokeWidth="2" />
                <path d="M110 20C156.564 20 200 63.436 200 110" stroke="#6f64f3" strokeWidth="2" />
                <path d="M110 40C142.214 40 170 67.786 170 110" stroke="#6f64f3" strokeWidth="2" />
              </svg>
            </div>
            <Image
              src="/Ayesha.png"
              alt="Ayesha profile"
              width={224}
              height={224}
              className="relative z-10 w-40 h-40 md:w-56 md:h-56 object-cover rounded-b-full shadow-lg hover-scale animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
