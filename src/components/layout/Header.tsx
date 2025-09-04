'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Header() {
  const pathname = usePathname();
  
  // const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  //   e.preventDefault();
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ 
  //       behavior: 'smooth',
  //       block: 'start'
  //     });
  //   }
  // };

  const isActive = (path: string) => {
    if (path === '/projects') {
      return pathname === '/projects';
    } 
    if (path === '/about') {
      return pathname === '/about';
    }
    if (path === '/services') {
      return pathname === '/services';
    }
    if (path === '/contact') {
      return pathname === '/contact';
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full py-6 backdrop-blur-md shadow-lg">
      <div className="container mx-auto md:px-8 px-4 flex items-center justify-between">
        <Link href="/"> 
        <div className="text-white md:text-[40px] text-[30px] font-medium font-anton tracking-widest">AYESHA</div>
        </Link>
        <nav>
          <ul className="flex md:space-x-8 space-x-4 text-white md:text-[16px] text-[14px] uppercase tracking-wider font-medium font-anton">
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
              <Link 
                href="/projects" 
                className={`transition-colors cursor-pointer ${
                  isActive('/projects') 
                    ? 'text-[#6c63ff] font-bold' 
                    : 'text-white hover:text-[#6c63ff]'
                }`}
              >
                Project
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className={`transition-colors cursor-pointer ${
                  isActive('/services') 
                    ? 'text-[#6c63ff] font-bold' 
                    : 'text-white hover:text-[#6c63ff]'
                }`}
                // onClick={(e) => handleNavClick(e, 'services')}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`transition-colors cursor-pointer ${
                  isActive('/about') 
                    ? 'text-[#6c63ff] font-bold' 
                    : 'text-white hover:text-[#6c63ff]'
                }`}
                // onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`transition-colors cursor-pointer ${
                  isActive('/contact') 
                    ? 'text-[#6c63ff] font-bold' 
                    : 'text-white hover:text-[#6c63ff]'
                }`}
                // onClick={(e) => handleNavClick(e, 'about')}
              >
                Contact
              </Link>
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
