export default function SectionContact() {
  return (
    <div className="ml-27 mt-[70px]">
      <div className="flex justify-between mr-27">
        <h2
          className="text-whit w-xl text-[40px] sm:text-[50px] xl:text-[80px] leading-[1.1] uppercase font-medium mb-6 animate-fade-in animate-delay-3 hover-glow"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          DISCUSS
          <br />
          <span className="animate-pulse-slow">
            POSSIBILITIES <br />
          </span>
          <span className="animate-pulse-slow">
            AND MAKE AN <br />
          </span>
          <span className="animate-pulse-slow">ACTION PLAN.</span>
        </h2>

        <div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="FIRST NAME*"
              className="bg-[#62606F] py-[25px] px-[30px] rounded-[64px] placeholder:font-[Anton] placeholder:text-[18px]"
            />
            <input
              type="text"
              placeholder="LAST NAME*"
              className="bg-[#62606F] py-[25px] px-[30px] rounded-[64px] placeholder:font-[Anton] placeholder:text-[18px] "
            />
          </div>
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL*"
            className="bg-[#62606F] w-full mt-6 py-[25px] px-[30px] rounded-[64px] placeholder:font-[Anton] placeholder:text-[18px] "
          />
          <textarea
            placeholder="YOUR MESSAGE HERE*"
            className="bg-[#62606F] w-full mt-6 py-[25px] h-[146px]  px-[30px] rounded-[40px] placeholder:font-[Anton] placeholder:text-[18px] "
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center mt-6 ml-2">
              <input type="checkbox" className="w-4 h-4 rounded-[10px] cursor-pointer" />
              <p className=" font-sans text-[12px]">
                I ACCEPT THE PRIVACY POLICY
              </p>
            </div>
            <button className="bg-white text-[#6155E1] font-[Anton] text-[18px] py-[15px] px-[30px] cursor-pointer hover:bg-gray-300 transition-colors animate-scale-in animate-delay-3 hover-lift rounded-[64px] mt-5 mr-4">SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
}
