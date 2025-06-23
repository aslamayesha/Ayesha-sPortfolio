export default function HeroSection() {
  return (
    <section className="bg-transparent pt-12 mt-24">
      <div className="container mx-auto px-8 min-h-[60vh] flex flex-col md:flex-row items-start justify-between">
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
          <h1
            className="text-[clamp(2.5rem,8vw,5rem)] leading-tight text-[#6f64f3] font-anton font-extrabold uppercase mb-4"
            style={{ fontFamily: 'Anton, sans-serif' }}
          >
            LET'S BUILD THE <br /> FUTURE TOGETHER
          </h1>
          <svg
            width="636"
            height="50"
            viewBox="0 0 636 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M233.479 30.403C291.107 33.8693 349.161 32.0738 406.867 32.0738C470.245 32.0738 533.013 34.3912 596.035 41.7271C600.495 42.2462 604.955 42.7687 609.401 43.3979C612.299 43.8079 619.129 42.7654 617.941 45.4399C616.05 49.6933 578.476 47.1079 577.1 47.1107C462.468 47.3418 347.833 47.1107 233.2 47.1107C156.491 47.1107 79.6135 48.5857 2.91331 47.1107C-1.61834 47.0235 11.9543 46.4398 16.4651 45.9968C45.3761 43.1573 74.0893 38.8033 103.066 36.5292C235.907 26.1037 370.635 32.0738 503.772 32.0738C545.077 32.0738 668.992 32.0738 627.687 32.0738C511.569 32.0738 395.45 32.0738 279.332 32.0738C239.574 32.0738 199.816 32.0738 160.058 32.0738C137.936 32.0738 204.302 32.0738 226.425 32.0738C353.279 32.0738 733.842 32.0738 606.988 32.0738C543.13 32.0738 479.791 21.8901 416.242 16.6656C363.997 12.3704 311.821 10.0952 259.469 7.9405C242.145 7.22747 226.786 5.71054 210.088 2"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>

          <button className="bg-white text-[#6c63ff] font-bold py-3 px-8 rounded-full shadow hover:bg-[#6c63ff] hover:text-white transition-colors text-base mt-4">
            HIRE ME NOW
          </button>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start mt-8 md:mt-0">
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-0">
              <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
                <path d="M110 0C170.914 0 220 49.086 220 110" stroke="#6f64f3" strokeWidth="2" />
                <path d="M110 20C156.564 20 200 63.436 200 110" stroke="#6f64f3" strokeWidth="2" />
                <path d="M110 40C142.214 40 170 67.786 170 110" stroke="#6f64f3" strokeWidth="2" />
              </svg>
            </div>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Ayesha profile"
              className="relative z-10 w-40 h-40 object-cover rounded-b-full border-t-4 border-white shadow-lg"
            />
          </div>
          <p className="text-white text-right mt-6 max-w-xs text-xs">
            Hey, I'm <span className="font-bold">AYESHA</span> your GO TO creative developer,
            welcome to my personal portfolio.
          </p>
        </div>
      </div>
    </section>
  );
}
