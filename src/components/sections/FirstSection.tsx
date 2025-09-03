export default function FirstSection({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <div className="flex justify-between md:pr-3 pr-0">
        <div className="mx-auto md:ml-27 mt-13 w-full md:w-xl ">
          <div className="relative text-left flex flex-col md:items-start items-center ">
            <h1
              className="relative text-[70px] sm:text-[80px] lg:text-[100px] xl:text-[144px] text-center text-[#6f64f3] font-bold uppercase  animate-fade-in"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              {title}
            </h1>
            <svg
              width="636"
              height="50"
              viewBox="0 0 636 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute md:-bottom-[-10px] -bottom-[5px] md:left-2 left-14 animate-slide-in-left animate-delay-1 w-3/4 md:w-[636px]"
            >
              <path
                d="M233.479 30.403C291.107 33.8693 349.161 32.0738 406.867 32.0738C470.245 32.0738 533.013 34.3912 596.035 41.7271C600.495 42.2462 604.955 42.7687 609.401 43.3979C612.299 43.8079 619.129 42.7654 617.941 45.4399C616.05 49.6933 578.476 47.1079 577.1 47.1107C462.468 47.3418 347.833 47.1107 233.2 47.1107C156.491 47.1107 79.6135 48.5857 2.91331 47.1107C-1.61834 47.0235 11.9543 46.4398 16.4651 45.9968C45.3761 43.1573 74.0893 38.8033 103.066 36.5292C235.907 26.1037 370.635 32.0738 503.772 32.0738C545.077 32.0738 668.992 32.0738 627.687 32.0738C511.569 32.0738 395.45 32.0738 279.332 32.0738C239.574 32.0738 199.816 32.0738 160.058 32.0738C137.936 32.0738 204.302 32.0738 226.425 32.0738C353.279 32.0738 733.842 32.0738 606.988 32.0738C543.13 32.0738 479.791 21.8901 416.242 16.6656C363.997 12.3704 311.821 10.0952 259.469 7.9405C242.145 7.22747 226.786 5.71054 210.088 2"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col md:gap-28 gap-10 w-full md:w-3xl">
          <div className="flex flex-col mx-auto md:ml-0 md:flex-row md:h-[90px] h-[150px] items-center justify-between md:mt-20 mt-10 w-full md:w-[600px]">
            <button className="bg-white cursor-pointer text-[#6c63ff]  font-bold md:py-[15px] py-3 px-[30px] rounded-full shadow hover:bg-[#6c63ff] hover:text-white transition-all duration-300 text-base animate-scale-in animate-delay-2 hover-lift hover-glow animate-pulse-slow group relative overflow-hidden">
              <span className="relative z-10 font-[Anton] text-[20px] font-medium group-hover:scale-110 transition-transform duration-300">
                Contact Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6f64f3] to-[#6155E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button>

            <p className="text-white text-center md:text-left text-[17px] w-[356px] font-sans font-light">
              {description}
            </p>
          </div>

          <div className=" border border-[#62606F] mx-auto w-[87%] md:w-full"/>
          </div>
        </div>

        <div
        className="hidden md:block leading-[1] uppercase mb-3 px-4 md:px-10 lg:px-23 flex items-end  md:opacity-70 lg:opacity-70 sm:opacity-10 md:text-[288px] text-[165px] md:font-medium font-light whitespace-nowrap text-transparent [-webkit-text-stroke:1px_#ffffff]"
        style={{ fontFamily: "Anton, sans-serif" }}
      >
        {title === "projects" ? (
          <>
            PROJ<br />ECTS
          </>
        ) : (
          title === "services" ? (
            <>
              SERV<br />ICES
            </>
          ) : (
            title === "about me" ? (
              <>
                ABOU<br />T ME
              </>
            ) : (
              title === "contact" ? (
                <>
                  CONT<br />ACT
                </>
              ) : (
                title
              )
            )
          )
        )}
      </div>
      </div>
    </div>
  );
}
