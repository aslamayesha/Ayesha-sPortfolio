'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function StickyProfile() {
  const [showThoughtCloud, setShowThoughtCloud] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Show thought cloud after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThoughtCloud(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setShowThoughtCloud(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      {/* Thought cloud */}
      {showThoughtCloud && !isDismissed && (
        <div className="absolute -top-32 left-0 -translate-x-1/2 flex flex-col items-center animate-slide-in-right animate-delay-1">
          <div className="relative flex flex-col items-center justify-center w-[200px] h-[90px]">
            {/* Cancel button */}
            <button
              onClick={handleDismiss}
              className="absolute top-6 right-6 translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold border border-white/60 shadow-md hover:scale-110 transition-all duration-300 z-20"
              title="Close profile"
            >
              ×
            </button>
            {/* SVG comic-style bubble with V tail */}
            <svg width="200" height="90" viewBox="0 0 200 90" fill="none" className="absolute top-0 left-0 w-full h-full z-0">
              <path
                d="M10 20 Q10 10 30 10 H170 Q190 10 190 30 V60 Q190 80 170 80 H80 L95 89 L90 80 H30 Q10 80 10 60 Z"
                stroke="#fff"
                strokeWidth="2"
                fill="url(#bubbleGradient)"
              />
              <defs>
                <linearGradient id="bubbleGradient" x1="0" y1="0" x2="200" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fff" stopOpacity="0.10" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0.03" />
                </linearGradient>
              </defs>
            </svg>
            {/* Content centered in the bubble */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
              <div className="text-[#6f64f3] font-bold text-[10px] animate-pulse-slow bg-gradient-to-r from-[#6f64f3] to-[#6155E1] bg-clip-text text-transparent">Hey, I&apos;m</div>
              <div className="text-white font-bold text-xs animate-fade-in animate-delay-4">AYESHA</div>
              <div className="text-gray-200 font-semibold text-[10px] animate-fade-in animate-delay-5">your GO TO creative developer</div>
              <div className="text-gray-400 text-[9px] animate-fade-in animate-delay-6 italic">welcome to my personal portfolio</div>
            </div>
          </div>
        </div>
      )}
      {/* Sticky profile image */}
      <div className="relative group">
        <Image
          src="/Ayesha.png"
          alt="Ayesha profile"
          width={80}
          height={80}
          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full shadow-2xl hover-scale animate-float border-2 border-white/20"
        />
        {/* Hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6f64f3]/20 to-[#6155E1]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
} 