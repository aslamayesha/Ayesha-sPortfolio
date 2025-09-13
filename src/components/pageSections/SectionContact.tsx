"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";

export default function SectionContact() {
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPrivacyAccepted) {
      messageApi.open({
        type: "error",
        content: "Please accept the privacy policy to continue.",
      });
      return;
    }

    if (!input.firstName || !input.lastName || !input.email || !input.message) {
      messageApi.open({
        type: "error",
        content: "Please fill in all required fields.",
      });
      return;
    }

    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      const templateId = "template_jqk6wpc";
      const serviceId = "service_2eltq73";
      const publicKey = "TFDQYWQ3JV0dxlODR";

      const templateParams = {
        from_name: `${input.firstName} ${input.lastName}`,
        from_email: input.email,
        message: input.message,
        to_email: "khushhalkhan335@gmail.com",
        reply_to: input.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      messageApi.open({
        type: "success",
        content: "Email sent successfully!",
      });

      setInput({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      setIsPrivacyAccepted(false);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckboxChange = () => {
    setIsPrivacyAccepted(!isPrivacyAccepted);
  };

  return (
    <div className="md:ml-27 ml-6 mt-[70px]  ">
      {contextHolder}
      <div className="flex flex-col md:flex-row  justify-between md:mr-27 mr-5">
        <h2
          className="text-whit md:w-xl w-full text-[40px] sm:text-[50px] xl:text-[80px] leading-[1.1] uppercase font-medium mb-6 animate-fade-in animate-delay-3 hover-glow"
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

        <form onSubmit={handleFormSubmit}>
          <div className="w-full md:w-lg ">
            <div className="flex  w-full gap-3">
              <input
                value={input.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                type="text"
                placeholder="FIRST NAME*"
                className="bg-[#62606F] w-1/2 py-[25px] px-[28px] rounded-[64px] placeholder:font-[Anton] placeholder:text-[18px]"
              />
              <input
                type="text"
                value={input.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="LAST NAME*"
                className="bg-[#62606F] w-1/2 py-[25px] px-[28px] rounded-[64px] placeholder:font-[Anton] placeholder:text-[18px] "
              />
            </div>
            <input
              type="email"
              value={input.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="ENTER YOUR EMAIL*"
              className="bg-[#62606F] w-full mt-6 py-[25px] px-[30px] rounded-[64px] placeholder:font-[Anton] placeholder:text-[18px] "
            />
            <textarea
              value={input.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="YOUR MESSAGE HERE*"
              className="bg-[#62606F] w-full mt-6 py-[25px] h-[146px]  px-[30px] rounded-[40px] placeholder:font-[Anton] placeholder:text-[18px] "
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center mt-4 ml-3">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={handleCheckboxChange}
                >
                  <span
                    className={`relative inline-flex items-center justify-center h-[18px] w-[18px] rounded-[4px] border transition-colors ${
                      isPrivacyAccepted
                        ? "bg-white border-white"
                        : "bg-[#62606F] border-none"
                    }`}
                  >
                    {isPrivacyAccepted && (
                      <svg
                        viewBox="0 0 24 24"
                        className="absolute h-[13px] w-[13px] text-[#333333]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </span>
                  <p className="font-sans text-[12px] ml-2">
                    I ACCEPT THE PRIVACY POLICY
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`font-[Anton] text-[18px] md:py-[15px] py-3 px-[30px] transition-colors animate-scale-in animate-delay-3 hover-lift rounded-[64px] mt-5 mr-4 ${
                    isLoading
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                      : "bg-white text-[#6155E1] cursor-pointer hover:bg-gray-300"
                  }`}
                >
                  {isLoading ? "SENDING..." : "SEND"}
                </button>

                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm mt-2 mr-4">
                    Failed to send message. Please try again.
                  </p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
