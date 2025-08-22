'use client';

import React from 'react';

export default function DownloadCVButton() {
  const resumeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = '/AyeshaAslam-resume.pdf';
    link.download = 'AyeshaAslam_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      className='fixed cursor-pointer bottom-14 right-15 bg-white text-[#6f64f3] font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 z-50 animate-fade-in animate-delay-3 hover-lift' 
      onClick={resumeClick}
    >
    Download Resume
    </button>
  );
}
