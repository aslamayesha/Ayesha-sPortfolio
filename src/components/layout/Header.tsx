'use client';

import React from 'react';

export default function Header() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full py-6 bg-black/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-8 flex items-center justify-between">
        <div className="text-white text-[40px] font-medium font-[Anton] tracking-widest">AYESHA</div>
        <nav>
          <ul className="flex space-x-8 text-white text-[16px] uppercase tracking-wider font-medium font-[Anton]">
            {/* <li>
              <a 
                href="#contact" 
                className="hover:text-[#6c63ff] transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </a>
            </li> */}
            <li>
              <a 
                href="#project" 
                className="hover:text-[#6c63ff] transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, 'project')}
              >
                Project
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="hover:text-[#6c63ff] transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, 'services')}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="hover:text-[#6c63ff] transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
            </li>
            {/* <li>
              <a 
                href="#menu" 
                className="hover:text-[#6c63ff] transition-colors cursor-pointer"
                onClick={(e) => handleNavClick(e, 'menu')}
              >
                Menu
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
