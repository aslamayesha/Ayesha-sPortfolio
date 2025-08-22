import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full py-6 bg-black/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-8 flex items-center justify-between">
        <div className="text-white text-[40px] font-medium font-[Anton] tracking-widest">AYESHA</div>
        <nav>
          <ul className="flex space-x-8 text-white text-[16px] uppercase tracking-wider font-medium font-[Anton]">
            <li>
              <a href="#contact" className="hover:text-[#6c63ff] transition-colors ">
                Contact
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-[#6c63ff] transition-colors">
                Project
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#6c63ff] transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#6c63ff] transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-[#6c63ff] transition-colors">
                Menu
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
